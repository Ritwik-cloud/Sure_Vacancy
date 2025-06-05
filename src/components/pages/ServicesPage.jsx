import React, { memo } from 'react';
import { FileText, Briefcase, PieChart, Sparkles, GraduationCap, Gauge } from 'lucide-react';
import { Award } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';
import SectorCard from '../ui/SectorCard';
import itImg from '../../assets/it.webp';
import bpoImg from '../../assets/bpo.webp';
import fmcgImg from '../../assets/fmcg.webp';
import hardwareImg from '../../assets/hardware.webp';
import realstateImg from '../../assets/realstate.webp';
import textilemg from '../../assets/textile.webp';

// List of services
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

// List of sectors
const sectors = [
  { title: "BPO", image: bpoImg, alt: "Business Process Outsourcing services" },
  { title: "Textile", image: textilemg, alt: "Textile industry and manufacturing" },
  { title: "FMCG", image: fmcgImg, alt: "Fast-moving consumer goods sector" },
  { title: "Real Estate", image: realstateImg, alt: "Real estate and property management" },
  { title: "Hardware", image: hardwareImg, alt: "Computer hardware and electronics" },
  { title: "IT and Software", image: itImg, alt: "Information technology and software development" },
];

const ServicesPage = () => {
  return (
    <div>
      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Professional Services
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive career solutions tailored to help you achieve your professional goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${0.1 + index * 0.07}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {sectors.map((sector, idx) => (
              <div
                key={sector.title}
                className="opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${0.2 + idx * 0.07}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <SectorCard
                  title={sector.title}
                  image={sector.image}
                  alt={sector.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fade-in animation CSS */}
      <style>
        {`
          @keyframes fade-in {
            to { opacity: 1; transform: none; }
          }
          .animate-fade-in {
            opacity: 0;
            transform: translateY(16px);
            animation: fade-in 0.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default memo(ServicesPage);
