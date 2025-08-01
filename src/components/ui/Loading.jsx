import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-50 to-indigo-100">
      <motion.div 
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Main spinner */}
        <div className="w-16 h-16 relative">
          <motion.div 
            className="absolute inset-0 border-4 border-transparent border-t-emerald-500 border-r-emerald-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.3))'
            }}
          />
          
          {/* Inner spinner */}
          <motion.div 
            className="absolute inset-2 border-3 border-transparent border-t-blue-500 border-l-blue-400 rounded-full"
            animate={{ rotate: -360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.2))'
            }}
          />
          

        </div>
        
        {/* Loading text */}
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <motion.p 
            className="text-slate-600 text-sm font-medium tracking-wider uppercase"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Loading
          </motion.p>
          
          <div className="mt-2 flex justify-center space-x-1">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}