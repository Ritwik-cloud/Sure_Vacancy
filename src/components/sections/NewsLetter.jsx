import React, { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_INVITE = "https://chat.whatsapp.com/CFAWhEkz0pzLx6m9WSQbSP?mode=ac_c";

const Newsletter = () => {
  const handleClick = () => {
    window.open(WHATSAPP_INVITE, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 shadow-xl">
            <motion.div
              className="w-full text-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 justify-center">
                
                Join Our WhatsApp Group
              </h2>
              <p className="text-white/80 text-lg mb-6">
                Click the button below to join our WhatsApp community for exclusive updates and insights.
              </p>
              <motion.button
                onClick={handleClick}
                className="px-6 py-3 bg-white text-emerald-700 font-medium rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>

            <motion.div
              className="hidden md:flex md:w-1/3 flex-col space-y-4 ml-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Group Discussions</h3>
                <p className="text-sm text-white/80">
                  Participate in conversations with community members.
                </p>
              </div>
              <div className="p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Instant Alerts</h3>
                <p className="text-sm text-white/80">
                  Get real-time notifications on fresh content and events.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Newsletter);
