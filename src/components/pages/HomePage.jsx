import React from 'react';
import { motion } from 'framer-motion';
import  Hero  from '../sections/Hero';
import About from '../sections/About';
import  Services  from '../sections/Services';
import Newsletter from '../sections/NewsLetter';
import Contact from '../sections/Contact';
import Testimonials from '../sections/Testimonials';
import Sector from '../sections/Sector';


// HomePage main component
 const HomePage = () => {
  // Animation variants for fade-in effect
  const fadeInVariants = {
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

  return (
    <>
      {/* Hero Section with fade-in animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
      >
        <Hero />
      </motion.div>

      {/* About Section with fade-in animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
      >
        <About />
      </motion.div>

      {/* Services Section with fade-in animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
      >
        <Services />
      </motion.div>


    
      {/* Sector Section with fade-in animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
      >
        <Sector/>
      </motion.div>

      

      {/* Newsletter Section with fade-in animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
      >
        <Newsletter />
      </motion.div>

     

      {/*Testimonials Section with fade-in animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
      >
      <Testimonials/>
      </motion.div>

      {/* Contact Section with fade-in animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
      >
        <Contact />
      </motion.div>
    </>
  );
};

export default HomePage;