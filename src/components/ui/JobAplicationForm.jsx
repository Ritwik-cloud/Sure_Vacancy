import React, { useState, useRef, memo } from "react";
import { useNavigate, useParams } from "react-router-dom";

function JobApplicationForm() {
  // Get the job ID from the URL (if needed for fetching job info)
  const { id } = useParams();

  // State for form fields
  const [formData, setFormData] = useState({
    jobTitle: "",
    name: "",
    phone: "",
    message: "",
  });

  // State for file input (CV)
  const [cvFile, setCvFile] = useState(null);

  // State for loading/submitting status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // For navigation after successful submission
  const navigate = useNavigate();

  // Ref for resetting file input
  const fileInputRef = useRef(null);

  // Handle text input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare form data for FormSubmit
      const formDataToSend = new FormData();
      formDataToSend.append("Job Title", formData.jobTitle);
      formDataToSend.append("Name", formData.name);
      formDataToSend.append("Phone", formData.phone);
      formDataToSend.append("Message", formData.message);
      if (cvFile) {
        formDataToSend.append("attachment", cvFile);
      }
      formDataToSend.append("_captcha", "false");
      formDataToSend.append("_template", "table");

      // Send the form data
      const response = await fetch("https://formsubmit.co/ritwik.kmg1@gmail.com", {
        method: "POST",
        body: formDataToSend,
      });

      // On success, reset form and navigate to thank you page
      if (response.ok) {
        setFormData({ jobTitle: "", name: "", phone: "", message: "" });
        setCvFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        navigate("/success");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error sending your application! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      // mt-24 ensures the form doesn't overlap with a fixed navbar
      className="max-w-lg mt-24 mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow space-y-6"
      encType="multipart/form-data"
    >
      {/* Form Heading */}
      <h2 className="text-2xl font-bold mb-4 text-center text-emerald-700 dark:text-emerald-400">
        Application Form
      </h2>

      {/* Job Title Field */}
      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Job Title
        </label>
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          required
          placeholder="e.g. Delivery Boy"
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>

      {/* Full Name Field */}
      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>

      {/* Phone Number Field */}
      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[0-9+\-() ]{7,20}"
          placeholder="e.g. 9876543210"
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>

      {/* Cover Letter / Message Field */}
      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Cover Letter / Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
         
          rows={5}
          placeholder="Message"
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
        />
      </div>

      {/* CV Upload Field */}
      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Upload CV (PDF, DOC, DOCX)
        </label>
        <input
          type="file"
          name="attachment"
          accept=".pdf, .doc, .docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="w-full text-gray-700 dark:text-gray-300"
          
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors duration-200"
      >
        {isSubmitting ? "Submitting..." : "Apply Now"}
      </button>
    </form>
  );
}

export default memo(JobApplicationForm);
