import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

// JobList: Renders a table of job posts with edit and delete actions
export const JobList = ({ jobs, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Title</th>
            <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Sector</th>
            <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Location</th>
            <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Salary</th>
            <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Posted</th>
            <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Description</th>
            <th className="px-4 py-3 border-b text-center text-sm font-semibold text-gray-700 dark:text-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.$id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <td className="px-4 py-3 border-b">{job.title}</td>
              <td className="px-4 py-3 border-b">{job.sector}</td>
              <td className="px-4 py-3 border-b">{job.location}</td>
              <td className="px-4 py-3 border-b">{job.salary}</td>
              <td className="px-4 py-3 border-b">
                {job.datePosted ? new Date(job.datePosted).toLocaleDateString() : ''}
              </td>
              <td className="px-4 py-3 border-b max-w-xs truncate" title={job.description}>
                {job.description}
              </td>
              <td className="px-4 py-3 border-b text-center">
                <button
                  onClick={() => onEdit(job)}
                  className="text-emerald-600 hover:text-emerald-900 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 mr-2"
                  title="Edit"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onDelete(job.$id)}
                  className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  title="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
          {jobs.length === 0 && (
            <tr>
              <td colSpan={7} className="text-center py-8 text-gray-500 dark:text-gray-400">
                No jobs found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
