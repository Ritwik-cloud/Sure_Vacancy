import React, { memo } from 'react';

// SolutionCard component for displaying a solution/service card
// Props: title (string), image (string), alt (string)
const SectorCard = ({ title, image, alt }) => {
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
        <div className="absolute bottom-0 left-0 p-6">
          {/* Card Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {title}
          </h3>
          {/* green underline bar for accent */}
          <div className="w-12 h-1 bg-green-500"></div>
        </div>
      </div>
    </div>
  );
};

export default memo(SectorCard); 