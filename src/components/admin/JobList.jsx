import React from 'react';
import { Pencil, Trash2, MapPin, Calendar, Briefcase, IndianRupee } from 'lucide-react';

// JobList: Modern, beautiful table component with enhanced UI
export const JobList = ({ jobs, onEdit, onDelete }) => {
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
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider min-w-[150px]">
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
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider min-w-[200px]">
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
                  key={job.$id} 
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {job.title}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {job.sector}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {job.location}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                      {job.salary}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {job.datePosted ? new Date(job.datePosted).toLocaleDateString() : '—'}
                  </td>
                  <td className="px-4 py-4">
                    <div className="max-w-xs">
                      <p className="text-sm text-gray-600 dark:text-gray-400 truncate" title={job.description}>
                        {job.description}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap sticky right-0 bg-white dark:bg-gray-900">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => onEdit(job)}
                        className="inline-flex items-center justify-center w-8 h-8 text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-500 dark:bg-blue-900/20 dark:hover:bg-blue-500 rounded-lg transition-colors duration-200"
                        title="Edit Job"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => onDelete(job.$id)}
                        className="inline-flex items-center justify-center w-8 h-8 text-red-600 hover:text-white bg-red-50 hover:bg-red-500 dark:bg-red-900/20 dark:hover:bg-red-500 rounded-lg transition-colors duration-200"
                        title="Delete Job"
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