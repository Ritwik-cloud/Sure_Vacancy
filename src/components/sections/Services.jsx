import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FileText, Briefcase, PieChart, Sparkles, GraduationCap, Gauge } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';


// Services section component
const Services = () => {
  // Animation variants for the container (stagger children)
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

  // List of services to display
  const services = [
    {
      icon: <FileText className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />,
      title: 'Resume Building',
      description: 'Get a professionally crafted resume that highlights your strengths and catches recruiters\' attention.',
    },
    {
      icon: <Briefcase className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />,
      title: 'Career Coaching',
      description: 'One-on-one sessions with experienced career coaches to guide your professional development.',
    },
    {
      icon: <PieChart className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />,
      title: 'Skill Assessment',
      description: 'Comprehensive evaluation of your skills to identify strengths and areas for improvement.',
    },
    {
      icon: <Sparkles className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />,
      title: 'Interview Preparation',
      description: 'Mock interviews and feedback to help you perform confidently in any interview setting.',
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />,
      title: 'Professional Training',
      description: 'Specialized training programs to enhance your skills and boost your employability.',
    },
    {
      icon: <Gauge className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />,
      title: 'Career Transition',
      description: 'Expert guidance for smoothly transitioning between industries or roles.',
    },
  ];

  return (
    // Main section with background and spacing
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header with animation */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Professional Services
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive career solutions tailored to help you achieve your professional goals
          </p>
        </motion.div>

        {/* Services grid with staggered animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            // Each service card with animation
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Services)