import React, { memo } from 'react';
import { ArrowRight, Search, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import meetingImg from '../../assets/hero-img.webp'
import { useNavigate } from 'react-router-dom';

 const Hero = () => {

  const navigate = useNavigate();
  // Animation variant for main text content - fades in from bottom
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Animation variant for buttons - slides in from left with delay
  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Animation variant for statistics section - fades in from bottom with delay
  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Animation variant for image section - scales up from center with fade
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center pt-16 pb-12 lg:pt-28 lg:pb-24 overflow-hidden px-4 sm:px-6">
      {/* Background gradient overlay with responsive design and dark mode support */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/90 via-emerald-50/50 to-teal-50/70 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-900/70 z-0"></div>
      
      {/* Decorative floating circles with blur effect - animated entrance */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/4 -right-32 w-64 h-64 lg:w-96 lg:h-96 bg-emerald-300 dark:bg-emerald-700 rounded-full blur-2xl"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute -bottom-32 -left-32 w-64 h-64 lg:w-96 lg:h-96 bg-blue-300 dark:bg-blue-700 rounded-full blur-2xl"
      />
      
      {/* Main content container with responsive grid layout */}
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content and call-to-action buttons */}
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            {/* Hero title and description with animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="space-y-6"
            >
              {/* Main heading with highlighted "Perfect" word and animated underline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                Find Your{' '}
                <span className="relative inline-block mb-3">
                  <span className="text-emerald-600 dark:text-emerald-400 mb-2">Perfect</span>
                  {/* Animated underline that expands from left to right */}
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-600 dark:bg-emerald-400"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                </span>{' '}

                <br className="hidden sm:block" />
                 <span className = ''> Career Path</span>
              </h1>
              {/* Hero description text */}
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Professional guidance to help you navigate your career journey with confidence and achieve your professional goals.
              </p>
            </motion.div>
            
            {/* Call-to-action buttons with hover animations */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Primary CTA button - Explore Services */}
              <motion.button 
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium shadow-lg hover:bg-emerald-700 transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                 onClick={() => navigate("/services")}

              >
                <span>Explore Services</span>
                {/* Arrow icon that moves on hover */}
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
              {/* Secondary CTA button - Browse Jobs */}
              <motion.button 
                className="px-6 py-3 bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-700 rounded-lg font-medium shadow-md hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                 onClick={() => navigate("/jobs")}
              >
                <span>Browse Jobs</span>
                {/* Search icon that moves on hover */}
                <Search className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
            
            {/* Statistics section showing success metrics */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8"
              variants={statsVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Success rate statistic with hover animation */}
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md">
                  <TrendingUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="ml-2 text-gray-700 dark:text-gray-300 font-medium">93% Success Rate</p>
              </motion.div>
              {/* Client count statistic with hover animation */}
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md">
                  <Users className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="ml-2 text-gray-700 dark:text-gray-300 font-medium">2k+ Happy Clients</p>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right column - Hero image with floating stats cards (desktop only) */}
          <motion.div 
            className="relative hidden lg:block"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main image container with shadow and rounded corners */}
            <div className="w-full h-[480px] bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden p-1">
              <img 
                src={meetingImg}
                alt="Career professionals in a meeting" 
                className="w-full h-full object-cover rounded-lg"
              />
              
              {/* Floating card - Monthly placements with animated progress bar */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-48"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <p className="text-gray-600 dark:text-gray-300 text-sm">Monthly Placements</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">200+</p>
                {/* Progress bar container */}
                <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  {/* Animated progress bar fill */}
                  <motion.div 
                    className="bg-emerald-500 dark:bg-emerald-400 h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                </div>
              </motion.div>
              
              {/* Floating card - Rating with animated star appearance */}
              <motion.div 
                className="absolute top-8 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="flex items-center">
                  <p className="text-xl font-bold text-gray-900 dark:text-white">4.5</p>
                  {/* Star rating display with sequential animation */}
                  <div className="ml-2 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.div
                        key={star}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1.6 + star * 0.1 }}
                      >
                        <Star 
                          className={`w-4 h-4 ${star === 5 ? 'text-gray-300 dark:text-gray-600' : 'text-yellow-400'}`} 
                          fill="currentColor"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">From 300+ reviews</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Custom Star component for rating display
// Removed TypeScript typing - now accepts standard props
const Star = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20"  fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);


export default memo(Hero);