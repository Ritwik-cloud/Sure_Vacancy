import React, { memo } from 'react';
import { MapPin, Clock, IndianRupee, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

// JobCard component receives a "job" prop with job details
const JobCard = ({ job }) => {
  // Defensive programming - handle missing job prop
  if (!job) {
    return null;
  }

  // Provide fallback values for missing properties
  const {
    title = 'Job Title Not Available',
    location = 'Location Not Specified',
    salary = 'Salary Not Disclosed',
    posted = 'Recently',
    sector = 'General',
    $id = null,
    id = null
  } = job;

 

  // Create a unique identifier for the job
  const jobId = $id || id;

  const handleViewDetails = (e) => {
    e.preventDefault();
    // You can implement navigation logic here
    // For example: navigate to job details page
    console.log('View details for job:', jobId);
    // Or dispatch an action, open a modal, etc.
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
      role="article"
      aria-label={`Job posting: ${title}`}
    >
      <div className="p-6">
        {/* Briefcase icon and job title/company */}
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-md bg-gray-100 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center">
            <Briefcase size={28} className="text-teal-600 dark:text-teal-400" aria-hidden="true" />
          </div>
          <div className="ml-4 min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
              {title}
            </h3>
          </div>
        </div>
                
        {/* Job details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
            <MapPin size={16} className="mr-2 text-gray-400 flex-shrink-0" aria-hidden="true" />
            <span className="truncate">{location}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
            <IndianRupee size={16} className="mr-2 text-gray-400 flex-shrink-0" aria-hidden="true" />
            <span className="truncate">{salary}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
            <Clock size={16} className="mr-2 text-gray-400 flex-shrink-0" aria-hidden="true" />
            <span>
           Posted: {job.datePosted ?
           new Date(job.datePosted).toLocaleDateString('en-GB', {
           day: '2-digit',
           month: '2-digit',
           year: 'numeric' }) : ""}
           </span>

          </div>
        </div>
                
        {/* Category badge and View Details link */}
        <div className="pt-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
          <span 
            className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs font-medium rounded-full"
            aria-label={`Job category: ${sector}`}
          >
            {sector}
          </span>
          
          <Link
            to={`/jobs/${job.$id || job.id}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 rounded"
            aria-label={`View details for ${title}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(JobCard);