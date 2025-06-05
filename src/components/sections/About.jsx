import React, { memo } from 'react';
import { motion } from 'framer-motion'; // For animation
import { Target, Users, Award, TrendingUp, Briefcase, GraduationCap, Globe2, Lightbulb } from 'lucide-react';
import meetingImg from '../../assets/about-img.webp'

// Main About component
 const About = () => {
  // Animation variants for container (stagger children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Animate children one after another
        delayChildren: 0.3    // Delay before children start animating
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

 
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          {/* Main grid: left (image) and right (text/stats) */}
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Left: Image with floating badge */}
            <motion.div className="relative" variants={itemVariants}>
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img
                  src={meetingImg}
                  alt="Team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge over image */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-700 rounded-lg shadow-xl p-6 max-w-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full">
                    <Award className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
                  </div>
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
              {/* About Headings and Description */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Empowering Careers Through Expert Guidance
                </h2>
                <div className="w-24 h-1 bg-emerald-500 mb-6"></div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  At SureVacancy, we're dedicated to transforming career aspirations into reality. Our team of expert consultants brings decades of industry experience to help professionals navigate their career paths with confidence.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We understand that every career journey is unique, which is why we provide personalized guidance tailored to your specific goals and circumstances.
                </p>
              </div>

              {/* Stats Grid */}
              <motion.div 
                className="grid grid-cols-2 gap-6"
                variants={containerVariants}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6"
                    variants={itemVariants}
                  >
                    {/* Stat icon */}
                    <div className="mb-4">{stat.icon}</div>
                    {/* Stat value */}
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    {/* Stat label */}
                    <div className="font-medium text-emerald-600 dark:text-emerald-500 mb-2">
                      {stat.label}
                    </div>
                    {/* Stat description */}
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

        
        </div>
      </section>







    </>
  );
};

export default memo(About);