import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, TrendingUp, Briefcase, GraduationCap, Globe2, Lightbulb } from 'lucide-react';
import meetingImg from '../../assets/about-img.webp';

// Stats to display in the About section
const stats = [
  {
    icon: <Users className="h-6 w-6 text-emerald-600" />,
    value: "10,000+",
    label: "Clients Served",
    description: "Professionals who found their dream careers"
  },
  {
    icon: <Award className="h-6 w-6 text-emerald-600" />,
    value: "93%",
    label: "Success Rate",
    description: "Of our clients land their target roles"
  },
  {
    icon: <Target className="h-6 w-6 text-emerald-600" />,
    value: "15+",
    label: "Years Experience",
    description: "Of career consulting excellence"
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-emerald-600" />,
    value: "45%",
    label: "Average Salary Increase",
    description: "For successfully placed candidates"
  }
];

// Core company values
const values = [
  {
    icon: <Briefcase className="h-8 w-8 text-emerald-600" />,
    title: "Professional Excellence",
    description: "We maintain the highest standards of professionalism in everything we do."
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-emerald-600" />,
    title: "Continuous Learning",
    description: "We stay updated with industry trends to provide cutting-edge guidance."
  },
  {
    icon: <Globe2 className="h-8 w-8 text-emerald-600" />,
    title: "Global Perspective",
    description: "Our diverse team brings international expertise to career development."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-emerald-600" />,
    title: "Innovation",
    description: "We embrace new technologies and methods to enhance our services."
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const statsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const valuesVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5
    }
  }
};

const fadeInUpVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const AboutPage = () => {
  return (
    <motion.section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-800"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image with floating badge */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.div 
              className="relative h-[500px] rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={meetingImg}
                alt="Team meeting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
            
            {/* Floating badge over image */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-700 rounded-lg shadow-xl p-6 max-w-xs"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: { 
                  delay: 0.8, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Industry Leader</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Top-rated career consultancy</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: About text and stats */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Empowering Careers Through Expert Guidance
              </motion.h2>
              
              <motion.div 
                className="w-24 h-1 bg-emerald-500 mb-6"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                At SureVacancy, we're dedicated to transforming career aspirations into reality. Our team of expert consultants brings decades of industry experience to help professionals navigate their career paths with confidence.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                We understand that every career journey is unique, which is why we provide personalized guidance tailored to your specific goals and circumstances.
              </motion.p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={statsVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6"
                  variants={fadeInUpVariants}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(16, 185, 129, 0.05)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: 0.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  <motion.div 
                    className="text-2xl font-bold text-gray-900 dark:text-white mb-1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <div className="font-medium text-emerald-600 dark:text-emerald-500 mb-2">
                    {stat.label}
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Company Values Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Our Core Values
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
            variants={valuesVariants}
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6"
                variants={fadeInUpVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="mb-4"
                  whileHover={{ 
                    rotate: [0, -10, 10, -5, 5, 0],
                    scale: 1.1 
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {value.icon}
                </motion.div>
                
                <motion.div 
                  className="font-semibold text-lg text-gray-900 dark:text-white mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                >
                  {value.title}
                </motion.div>
                
                <motion.p 
                  className="text-sm text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + idx * 0.1 }}
                >
                  {value.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(AboutPage);