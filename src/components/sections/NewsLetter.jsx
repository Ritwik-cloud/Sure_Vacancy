import React, { useState, useRef, memo } from "react";
import { motion } from "framer-motion";
import { Smartphone, ArrowRight, MessageCircle } from "lucide-react";

const Newsletter = () => {
  // State for the phone input
  const [phone, setPhone] = useState("");
  // State for loading and success message
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  // Ref for input reset (optional)
  const phoneInputRef = useRef(null);

  // Handle input change
  const handleChange = (e) => setPhone(e.target.value);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare form data for FormSubmit
      const formData = new FormData();
      formData.append("Phone", phone);
      formData.append("_captcha", "false");
      formData.append("_template", "table");

      // AJAX POST to FormSubmit
      const response = await fetch(
        "https://formsubmit.co/ajax/surevacancy.hr@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }
      );

      if (response.ok) {
        setSuccess(true);
        setPhone("");
        if (phoneInputRef.current) phoneInputRef.current.value = "";
        setTimeout(() => setSuccess(false), 5000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      alert("There was an error submitting your number. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 shadow-xl">
            {/* Left side: WhatsApp Channel text and form */}
            <motion.div
              className="md:w-2/3 mb-8 md:mb-0 md:pr-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <MessageCircle className="h-8 w-8 text-green-400" />
                Join Our WhatsApp Channel
              </h2>
              <p className="text-white/80 text-lg mb-6">
                Subscribe with your mobile number to receive job alerts, career advice, and industry insights directly on WhatsApp.
              </p>
              {/* Form or Success Message */}
              {!success ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                >
                  <div className="relative flex-grow">
                    <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-800" />
                    <input
                      ref={phoneInputRef}
                      type="tel"
                      name="phone"
                      placeholder="Your mobile number"
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                      pattern="[0-9]{10,15}"
                      maxLength={15}
                      required
                      value={phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-white text-emerald-700 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center disabled:opacity-60"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Joining..." : (
                      <>
                        Join WhatsApp
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center bg-white/20 rounded-lg px-6 py-4 text-emerald-100 font-semibold"
                >
                  🎉 Joined successfully! You’ll receive updates on WhatsApp soon.
                </motion.div>
              )}
            </motion.div>
            {/* Right side: Newsletter feature highlights */}
            <motion.div
              className="md:w-1/3 flex flex-col space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="p-4 bg-white/20 rounded-lg backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-semibold mb-2">WhatsApp Job Alerts</h3>
                <p className="text-sm text-white/80">
                  Get personalized job recommendations sent straight to your WhatsApp.
                </p>
              </motion.div>
              <motion.div
                className="p-4 bg-white/20 rounded-lg backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-semibold mb-2">Career Resources</h3>
                <p className="text-sm text-white/80">
                  Access exclusive guides, templates, and videos to enhance your career journey.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Newsletter);
