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
  { title: "Hospitality and Hotel", image: hospitalityImg, alt: "Business Process Outsourcing services", readmore: "https://surevacancyjobs.blogspot.com/2025/07/empowering-hospitality-careers-how-sure.html" },
  { title: "Logistics and Warehouse", image: logisticImg, alt: "Textile industry and manufacturing",  readmore: "https://surevacancyjobs.blogspot.com/2025/07/connecting-talent-with-opportunity-in.html" },
  { title: "Manufacturing and Retail", image: retailImg , alt: "Fast-moving consumer goods sector",  readmore: "https://surevacancyjobs.blogspot.com/2025/07/find-jobs-in-manufacturing-retail-with.html"},
  { title: "Real Estate and Infrastructure", image: realstateImg, alt: "Real estate and property management",  readmore:"https://surevacancyjobs.blogspot.com/2025/08/real-estate-infrastructure-growing.html" },
  { title: "Healthcare and Pharma", image: healthcareImg, alt: "Computer hardware and electronics",  readmore:"https://surevacancyjobs.blogspot.com/2025/08/build-career-in-healthcare-pharma-with.html" },
  { title: "IT and Software", image: itImg, alt: "Information technology and software development",  readmore:"https://surevacancyjobs.blogspot.com/2025/08/it-software-job-placements-by-sure.html" },
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
                link={sector.readmore}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Sector);
