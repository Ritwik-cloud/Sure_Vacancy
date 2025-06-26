import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Animation variants for container (stagger children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Animation variants for each item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };


    const address = "Sure Vacancy, 1st floor - Rani Niwas 39, Lala Lajpat Rai Road, Ashrampara, Siliguri-734001, West Bengal";
  
  // Encode the address for URL
  const encodedAddress = encodeURIComponent(address);
  // With coordinates (more accurate)
const lat = 26.721896478963988;
const lng = 88.4304885999491;
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;



  const handleLocationClick = () => {
  // For mobile devices, try to open native apps
  if (/Android/i.test(navigator.userAgent)) {
    window.open(`geo:0,0?q=${encodedAddress}`, '_blank');
  } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.open(`maps://maps.google.com/maps?q=${encodedAddress}`, '_blank');
  } else {
    // Fallback to web version
    window.open(googleMapsUrl, '_blank');
  }
};


  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit with AJAX (no page reload)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create FormData object for FormSubmit.co
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('mobile', formData.mobile);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');
      
      const response = await fetch("https://formsubmit.co/surevacancy.hr@gmail.com", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", mobile: "", message: "" });
        navigate("/thank-you");   
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert("There was an error sending your message! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Have questions? We're here to help guide your career journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left side: Contact form - Takes 2 columns on large screens */}
          <motion.div 
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 dark:border-gray-700"
              variants={itemVariants}
            >
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <motion.form onSubmit={handleSubmit} className="space-y-6" variants={itemVariants}>
                {/* Name and Email fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-600 focus:border-emerald-500 dark:focus:border-emerald-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-600 focus:border-emerald-500 dark:focus:border-emerald-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                {/* Mobile Number field - Full width */}
                <div>
                  <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-600 focus:border-emerald-500 dark:focus:border-emerald-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Enter your mobile number"
                    pattern="[+]?[0-9\s\-\(\)]+"
                    title="Please enter a valid mobile number"
                    required
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Your Message 
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-600 focus:border-emerald-500 dark:focus:border-emerald-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white resize-none transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Tell us how we can help you..."
                  
                  ></textarea>
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all duration-200 shadow-lg hover:shadow-xl transform"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>

          {/* Right side: Contact info and additional details */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Contact info cards */}
            <motion.div className="space-y-6" variants={containerVariants}>
              {/* Email card */}
              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm break-all">
                      surevacancy.hr@gmail.com
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Phone card */}
              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">+91 9332344995</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Address card */}
              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-500" />
                    </div>
                  </div>
                 <div className="flex-1">
      <h3 className="font-bold text-gray-900 dark:text-white mb-2">Visit Us</h3>
      <div 
        className="cursor-pointer group transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg -m-2"
        onClick={handleLocationClick}
        title="Click to open in Google Maps"
      >
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          Sure Vacancy,<br />
          1st floor - Rani Niwas 39,<br />
          Lala Lajpat Rai Road, Ashrampara,<br />
          Siliguri-734001, West Bengal
        </p>
      </div>
    </div>

                </div>
              </motion.div>

              {/* Business hours card */}
              <motion.div 
                className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800"
                variants={itemVariants}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Business Hours</h3>
                    <div className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                      <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Response time info */}
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800"
                variants={itemVariants}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Quick Response</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      We typically respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);