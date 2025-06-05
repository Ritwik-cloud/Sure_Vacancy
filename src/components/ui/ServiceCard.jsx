import React from 'react';
import { ArrowRight } from 'lucide-react';

// ServiceCard component displays a service feature with icon, title, and description
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 group">
      {/* Service Icon */}
      <div className="mb-5">{icon}</div>
      {/* Service Title */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
        {title}
      </h3>
      {/* Service Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-5">{description}</p>
      {/* Learn More Button with Arrow */}
      <button className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
        Learn more 
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default ServiceCard;
