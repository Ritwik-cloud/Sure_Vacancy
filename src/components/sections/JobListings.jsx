import React, { memo, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Filter } from 'lucide-react';
import JobCard from '../ui/JobCard';
import service from '../../appwrite/database'; 
import LoadingSpinner from '../ui/LoadingSpinner';

const jobCategories = ['All', 'IT & Software', 'Technology', 'Marketing', 'Finance', 'Pharmaceutical', 'Education', 'FMCG', 'Textile', 'RealState', 'Hardware'];

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

// Custom debounce hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const JobListings = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalJobs, setTotalJobs] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10; // jobs per page

  // Debounce search term with 500ms delay
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        // Build query params
        const params = {
          limit,
          offset: (currentPage - 1) * limit,
          latest: true, // for sorting by latest
        };
        
        if (selectedCategory !== 'All') {
          params.sector = selectedCategory;
        }
        
        // If you want to support backend search:
        if (debouncedSearchTerm.trim()) {
          params.search = debouncedSearchTerm.trim();
        }

        const response = await service.getAllPosts(params);
        const fetchedJobs = response.documents || [];
        
        setJobs(fetchedJobs);
        setTotalJobs(response.total || 0);
        setHasMore(fetchedJobs.length === limit);
        
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
        setJobs([]);
        setTotalJobs(0);
        setHasMore(false);
      }
      setLoading(false);
    };

    fetchJobs();
  }, [selectedCategory, debouncedSearchTerm, currentPage]);

  // Reset to first page when category or search changes
  useEffect(() => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [selectedCategory, debouncedSearchTerm]);

  // If backend doesn't support search, filter on frontend
  const displayJobs = React.useMemo(() => {
    if (!debouncedSearchTerm.trim()) {
      return jobs;
    }
    
    // Only filter on frontend if backend search is not implemented
    // Remove this if your backend handles search
    const searchLower = debouncedSearchTerm.toLowerCase();
    return jobs.filter(job => {
      const title = job.title || '';
      const location = job.location || '';
      const company = job.company || '';
      
      return title.toLowerCase().includes(searchLower) || 
             location.toLowerCase().includes(searchLower) ||
             company.toLowerCase().includes(searchLower);
    });
  }, [jobs, debouncedSearchTerm]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (hasMore) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <section id="jobs" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with animation */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Discover Your <span className="text-teal-600 dark:text-teal-400">Perfect Job</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Browse through our curated selection of top-tier opportunities across various industries
          </p>
        </motion.div>
        
        {/* Search & Filter Row with animation */}
        <motion.div
          className="mb-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search jobs, locations, companies..."
                  className="w-full px-4 py-3 pl-10 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
                {/* Search Icon */}
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                  <Briefcase size={18} />
                </div>
              </div>
            </div>
            
            {/* Category Filter Dropdown */}
            <div className="md:w-48">
              <div className="relative">
                <select
                  className="w-full appearance-none px-4 py-3 pl-10 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent"
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                >
                  {jobCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {/* Filter Icon */}
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                  <Filter size={18} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Loading State */}
        {loading ? (
          <LoadingSpinner />
        ) : displayJobs.length === 0 ? (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Briefcase className="h-12 w-12 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No jobs found</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search criteria or check back later for new opportunities.
            </p>
          </motion.div>
        ) : (
          <>
            {/* Results count */}
            <motion.div 
              className="mb-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-600 dark:text-gray-400">
                Showing {displayJobs.length} of {totalJobs} jobs
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                {debouncedSearchTerm && ` matching "${debouncedSearchTerm}"`}
              </p>
            </motion.div>

            {/* Job Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              {displayJobs.map((job) => (
                <motion.div key={job.$id || job.id} variants={itemVariants}>
                  <JobCard job={job} />
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            <motion.div 
              className="flex justify-center items-center mt-12 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                disabled={currentPage === 1}
                onClick={handlePreviousPage}
                className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Previous
              </button>
              
              <span className="px-4 py-2 text-gray-600 dark:text-gray-400 font-medium">
                Page {currentPage}
              </span>
              
              <button
                onClick={handleNextPage}
                disabled={!hasMore}
                className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Next
              </button>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default memo(JobListings);