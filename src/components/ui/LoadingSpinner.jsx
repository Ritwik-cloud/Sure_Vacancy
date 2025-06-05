import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const JobsLoadingComponent = ({ text = "" }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const briefcaseVariants = {
    animate: {
      y: [-5, 5, -5],
      rotate: [-2, 2, -2],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const particleVariants = {
    animate: {
      y: [-10, -20, -10],
      opacity: [0.5, 1, 0.5],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const dotVariants = {
    animate: {
      y: [-3, 3, -3],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const progressVariants = {
    animate: {
      scaleX: [0.2, 0.8, 0.2],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 8,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center py-16 px-8 min-h-[400px] relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated briefcase with particles */}
      <motion.div
        className="relative mb-8"
        variants={itemVariants}
      >
        <motion.div
          className="w-20 h-16 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-lg shadow-2xl relative overflow-hidden flex items-center justify-center"
          variants={briefcaseVariants}
          animate="animate"
        >
          {/* Briefcase icon from lucide-react */}
          <Briefcase size={32} className="text-white z-10" />
          
          {/* Briefcase details */}
          <div className="absolute inset-2 bg-white rounded-md opacity-10"></div>
          
          {/* Shimmer effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        {/* Floating particles */}
        <motion.div
          className="absolute -top-3 -right-3 w-3 h-3 bg-green-400 rounded-full shadow-lg"
          variants={particleVariants}
          animate="animate"
        />
        <motion.div
          className="absolute -bottom-2 -left-2 w-2 h-2 bg-emerald-400 rounded-full shadow-lg"
          variants={particleVariants}
          animate="animate"
          transition={{ delay: 0.3 }}
        />
        <motion.div
          className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-teal-400 rounded-full shadow-lg"
          variants={particleVariants}
          animate="animate"
          transition={{ delay: 0.6 }}
        />
        
        {/* Orbiting elements */}
        <motion.div
          className="absolute inset-0 w-24 h-24 -m-4"
          variants={spinnerVariants}
          animate="animate"
        >
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-green-300 rounded-full transform -translate-x-1/2"></div>
          <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-emerald-300 rounded-full transform -translate-x-1/2"></div>
        </motion.div>
      </motion.div>

      {/* Loading text with staggered animation */}
      <motion.div
        className="text-center space-y-4"
        variants={itemVariants}
      >
        <motion.h3
          className="text-2xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ backgroundSize: '200% 100%' }}
        >
          {text}
        </motion.h3>
        
        {/* Animated loading dots */}
        <motion.div
          className="flex items-center justify-center space-x-1"
          variants={itemVariants}
        >
          <span className="text-gray-600 dark:text-gray-300 text-lg">Loading</span>
          <div className="flex space-x-1 ml-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                variants={dotVariants}
                animate="animate"
                transition={{ delay: index * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Animated progress bar */}
      <motion.div
        className="w-72 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-8 overflow-hidden shadow-inner"
        variants={itemVariants}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full origin-left shadow-lg"
          variants={progressVariants}
          animate="animate"
        />
      </motion.div>

      {/* Floating background elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        variants={itemVariants}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-300 dark:bg-green-400 rounded-full opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default JobsLoadingComponent;