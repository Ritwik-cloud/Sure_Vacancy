import React, { memo, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Filter, MapPin, Search } from 'lucide-react';
import JobCard from '../ui/JobCard';
import service from '../../appwrite/database'; 
import LoadingSpinner from '../ui/LoadingSpinner';

const jobCategories = ['All', 'IT & Software', 'Technology', 'Marketing', 'Finance', 'Pharmaceutical', 'Education', 'FMCG', 'Textile', 'Real Estate', 'Hardware'];

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

const JobListings = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const [activeSearchTerm, setActiveSearchTerm] = useState('');
  const [activeLocationTerm, setActiveLocationTerm] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalJobs, setTotalJobs] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10; // jobs per page

  // Main function to fetch jobs from the API with filters and pagination
  const fetchJobs = useCallback(async () => {
    setLoading(true);
    try {
      // Build query parameters for API request
      const params = {
        limit,
        offset: (currentPage - 1) * limit,
        latest: true, // for sorting by latest
      };
      
      // Add category filter if not 'All'
      if (selectedCategory !== 'All') {
        params.sector = selectedCategory;
      }
      
      // Add search parameters if provided
      if (activeSearchTerm.trim()) {
        params.search = activeSearchTerm.trim();
      }
      
      if (activeLocationTerm.trim()) {
        params.location = activeLocationTerm.trim();
      }

      // Fetch jobs from API and update state
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
    setSearching(false);
  }, [selectedCategory, activeSearchTerm, activeLocationTerm, currentPage, limit]);

  // Fetch jobs when dependencies change
  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  // Reset to first page when category or search changes
  useEffect(() => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [selectedCategory, activeSearchTerm, activeLocationTerm]);

  // Filter jobs on frontend if backend search is not implemented
  const displayJobs = React.useMemo(() => {
    if (!activeSearchTerm.trim() && !activeLocationTerm.trim()) {
      return jobs;
    }
    
    // Only filter on frontend if backend search is not implemented
    const searchLower = activeSearchTerm.toLowerCase();
    const locationLower = activeLocationTerm.toLowerCase();
    
    return jobs.filter(job => {
      const title = job.title || '';
      const location = job.location || '';
      const company = job.company || '';
      
      const matchesSearch = !activeSearchTerm.trim() || 
        title.toLowerCase().includes(searchLower) || 
        company.toLowerCase().includes(searchLower);
      
      const matchesLocation = !activeLocationTerm.trim() || 
        location.toLowerCase().includes(locationLower);
      
      return matchesSearch && matchesLocation;
    });
  }, [jobs, activeSearchTerm, activeLocationTerm]);

  // Handle category selection change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Handle search button click - activates the search filters
  const handleSearch = () => {
    setSearching(true);
    setActiveSearchTerm(searchTerm);
    setActiveLocationTerm(locationTerm);
  };

  // Handle Enter key press in search inputs
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Navigate to previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  // Navigate to next page
  const handleNextPage = () => {
    if (hasMore) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <section id="jobs" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with animation */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Discover Your <span className="text-teal-600 dark:text-teal-400">Perfect Job</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Browse through our curated selection of top-tier opportunities across various industries
          </p>
        </motion.div>
        
        {/* Enhanced Search & Filter Section */}
        <motion.div
          className="mb-8 sm:mb-10 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Search Card */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {/* Job Search Input */}
              <div className="xl:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Job Title
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Sales Executive"
                    className="w-full px-4 py-3 pl-10 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-200 shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                    <Briefcase size={18} />
                  </div>
                </div>
              </div>
              
              {/* Location Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Siliguri"
                    className="w-full px-4 py-3 pl-10 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-200 shadow-sm"
                    value={locationTerm}
                    onChange={(e) => setLocationTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                    <MapPin size={18} />
                  </div>
                </div>
              </div>
              
              {/* Search Button */}
              <div className="flex flex-col justify-end">
                <button
                  onClick={handleSearch}
                  disabled={searching}
                  className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 dark:from-emerald-500 dark:to-emerald-600 dark:hover:from-emerald-600 dark:hover:to-emerald-700 text-white font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <div className="flex items-center justify-center gap-2">
                    {searching ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Search size={18} />
                    )}
                    <span className="hidden sm:inline">Search Jobs</span>
                    <span className="sm:hidden">Search</span>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Category Filter - Now below search inputs */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <div className="relative max-w-xs">
                <select
                  className="w-full appearance-none px-4 py-2.5 pl-10 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-200 shadow-sm"
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                >
                  {jobCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                  <Filter size={16} />
                </div>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
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
            className="text-center py-12 sm:py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4">
              <Briefcase className="h-8 w-8 sm:h-10 sm:w-10 text-gray-400 dark:text-gray-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white mb-2">No jobs found</h3>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              Try adjusting your search criteria or check back later for new opportunities.
            </p>
          </motion.div>
        ) : (
          <>
            {/* Results count and active filters */}
            <motion.div 
              className="mb-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-3 inline-block">
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-white">{displayJobs.length}</span> of{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">{totalJobs}</span> jobs found
                  {selectedCategory !== 'All' && (
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                      {selectedCategory}
                    </span>
                  )}
                  {activeSearchTerm && (
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      "{activeSearchTerm}"
                    </span>
                  )}
                  {activeLocationTerm && (
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      📍 {activeLocationTerm}
                    </span>
                  )}
                </p>
              </div>
            </motion.div>

            {/* Job Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
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

            {/* Enhanced Pagination */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center mt-12 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={handlePreviousPage}
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md font-medium"
                >
                  <span className="hidden sm:inline">Previous</span>
                  <span className="sm:hidden">Prev</span>
                </button>
                
                <div className="px-4 py-2 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 rounded-xl font-medium min-w-[100px] text-center">
                  Page {currentPage}
                </div>
                
                <button
                  onClick={handleNextPage}
                  disabled={!hasMore}
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md font-medium"
                >
                  Next
                </button>
              </div>
              
              {totalJobs > limit && (
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                  {Math.min(currentPage * limit, totalJobs)} of {totalJobs} jobs
                </p>
              )}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default memo(JobListings);