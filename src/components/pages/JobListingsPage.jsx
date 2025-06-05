import React from 'react';
import { motion } from 'framer-motion';
import JobListings  from '../sections/JobListings';

// JobListingsPage component: wraps JobListings with a fade-in/out animation
 const JobListingsPage = () => {
  return (
    // Animated container for page transition
    <motion.div
      // initial={{ opacity: 0 }}           // Start hidden
      // animate={{ opacity: 1 }}           // Fade in on mount
      // exit={{ opacity: 0 }}              // Fade out on unmount (for route transitions)
      // transition={{ duration: 0.5 }}     // Animation duration
      className="pt-20"                  // Top padding for spacing (e.g., below navbar)
    >
      {/* Main job listings section */}
      <JobListings />
    </motion.div>
  );
};
export default JobListingsPage;