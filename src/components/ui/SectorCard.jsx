import React, { memo } from 'react';
import { ArrowRight } from 'lucide-react';

// SolutionCard component for displaying a solution/service card
// Props: title (string), image (string), alt (string), link (string)
const SectorCard = ({ title, image, alt, link }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      {/* Card Image Section */}
      <div className="relative h-64 w-full">
        {/* Main Image */}
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Dark overlay for readability and hover effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
        
        {/* Content overlay at the bottom of the card */}
        <div className="absolute bottom-0 left-0 p-6 w-full">
          {/* Card Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {title}
          </h3>
          
          {/* Green underline bar for accent */}
          <div className="w-12 h-1 bg-green-500 mb-4"></div>
          
          {/* Read More Button */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex  cursor-pointer items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium transition-all duration-300 hover:bg-white hover:text-gray-900 hover:border-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            <span>Read More</span>
            <ArrowRight 
              size={16} 
              className="transition-transform duration-300 group-hover/btn:translate-x-1" 
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(SectorCard);