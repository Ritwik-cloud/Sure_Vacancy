import React, { memo } from "react";
import { motion } from "framer-motion";
import SectorCard from "../ui/SectorCard";
import itImg from '../../assets/it.webp'
import retailImg from '../../assets/retail.webp'
import realstateImg from '../../assets/realstate.webp'
import logisticImg from '../../assets/logistic.webp'
import hospitalityImg from '../../assets/hospitality.webp'
import healthcareImg from '../../assets/healthcare .webp'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Adjust for speed: lower = faster
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const sectors = [
  { title: "Hospitality", image: hospitalityImg, alt: "Business Process Outsourcing services" },
  { title: "Logistics", image: logisticImg, alt: "Textile industry and manufacturing" },
  { title: "Retail", image: retailImg , alt: "Fast-moving consumer goods sector" },
  { title: "Real Estate", image: realstateImg, alt: "Real estate and property management" },
  { title: "Healtcare and Pharma", image: healthcareImg, alt: "Computer hardware and electronics" },
  { title: "IT and Software", image: itImg, alt: "Information technology and software development" },
];

const Sector = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Industries We Serve
        </h2>
        <div className="mb-12 flex flex-col items-center">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2 text-center">
            Delivering specialized solutions across key industry sectors.
          </p>
          <div className="w-16 h-1 bg-green-500"></div>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {sectors.map((sector) => (
            <motion.div key={sector.title} variants={cardVariants}>
              <SectorCard
                title={sector.title}
                image={sector.image}
                alt={sector.alt}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Sector);
