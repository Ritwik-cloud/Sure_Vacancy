import React from 'react';
import { Pencil, Trash2, MapPin, Calendar, Briefcase, IndianRupee } from 'lucide-react';

// JobList: Modern, beautiful table component with enhanced UI
export const JobList = ({ jobs, onEdit, onDelete }) => {
  // Helper function to strip HTML tags from description
  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return '—';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (error) {
      return '—';
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Job Listings</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">{jobs.length} positions available</p>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-max divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
              <tr>
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider min-w-[200px]">
                  Position
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider min-w-[120px]">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Sector
                  </div>
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider min-w-[120px]">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Location
                  </div>
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider min-w-[100px]">
                  Experience
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider min-w-[120px]">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" />
                    Salary
                  </div>
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider min-w-[100px]">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Posted
                  </div>
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider min-w-[250px]">
                  Description
                </th>
                <th className="px-4 py-4 text-center text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider min-w-[100px] sticky right-0 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {jobs.map((job, index) => (
                <tr 
                  key={job.$id || index} 
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {/* Job Title */}
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {job.title || 'Untitled Position'}
                      </div>
                    </div>
                  </td>
                  
                  {/* Sector */}
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {job.sector || 'N/A'}
                    </span>
                  </td>
                  
                  {/* Location */}
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {job.location || 'Not specified'}
                      </span>
                    </div>
                  </td>
                  
                  {/* Experience */}
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      {job.experience || 'Not specified'}
                    </span>
                  </td>
                  
                  {/* Salary */}
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                      {job.salary || 'Not disclosed'}
                    </span>
                  </td>
                  
                  {/* Date Posted */}
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(job.datePosted || job.$createdAt)}
                  </td>
                  
                  {/* Description */}
                  <td className="px-4 py-4">
                    <div className="max-w-xs">
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2" title={stripHtml(job.description || '')}>
                        {job.description ? stripHtml(job.description).substring(0, 100) + (stripHtml(job.description).length > 100 ? '...' : '') : 'No description available'}
                      </p>
                    </div>
                  </td>
                  
                  {/* Actions */}
                  <td className="px-4 py-4 whitespace-nowrap sticky right-0 bg-white dark:bg-gray-900">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => onEdit(job)}
                        className="inline-flex items-center justify-center w-8 h-8 text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-500 dark:bg-blue-900/20 dark:hover:bg-blue-500 rounded-lg transition-colors duration-200"
                        title="Edit Job"
                        type="button"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => onDelete(job.$id)}
                        className="inline-flex items-center justify-center w-8 h-8 text-red-600 hover:text-white bg-red-50 hover:bg-red-500 dark:bg-red-900/20 dark:hover:bg-red-500 rounded-lg transition-colors duration-200"
                        title="Delete Job"
                        type="button"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {jobs.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
              <Briefcase className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No jobs found</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
              Get started by creating your first job listing.
            </p>
          </div>
        )}
      </div>

      {/* Footer Stats */}
      {jobs.length > 0 && (
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-xl px-6 py-4">
          <span>Showing {jobs.length} job{jobs.length !== 1 ? 's' : ''}</span>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Active Listings
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobList;