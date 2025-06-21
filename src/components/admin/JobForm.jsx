import React, { useState, useEffect } from 'react';
import service from '../../appwrite/database';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { X } from 'lucide-react';

// JobForm: Modal form for creating or editing a job post
export const JobForm = ({ job, onSubmit, onClose }) => {
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    sector: '',
    location: '',
    description: '',
    experience: '',  
    salary: '',
  });

  // Toolbar and formats for rich text editing
  const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],      // removed 'image'
    ['clean']
  ]
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet',
  'link'          // removed 'image'
];


  // Populate form when editing
  useEffect(() => {
    if (job) {
      setFormData({
        title: job.title || '',
        sector: job.sector || '',
        location: job.location || '',
        description: job.description || '',
         experience: job.experience || '', 
        salary: job.salary || '',
      });
    } else {
      setFormData({
        title: '',
        sector: '',
        location: '',
        description: '',
        experience: '',
        salary: '',
      });
    }
  }, [job]);

  // Handle form submission
 
    const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ Validate experience too // Validate required fields
    const requiredFields = ['title','sector','location','salary','experience'];
    for (let key of requiredFields) {
      if (!formData[key].trim()) {
        alert(`Please fill in the ${key} field`);
        return;
      }
    }
    // Pass form data to parent, include job id if editing
    onSubmit(job ? { ...job, ...formData } : formData);
  };


  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {job ? 'Edit Job' : 'Add New Job'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
            type="button"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="overflow-y-auto">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Job Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Job Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
                
              />
            </div>

            {/* Sector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Sector *
              </label>
              <input
                type="text"
                value={formData.sector}
                onChange={(e) => handleInputChange('sector', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
               
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location *
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
               
              />
            </div>

            {/* Salary */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Salary Range *
              </label>
              <input
                type="text"
                value={formData.salary}
                onChange={(e) => handleInputChange('salary', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              
              />
            </div>

             {/* EXPERIENCE Field */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Experience *
            </label>
            <input
              type="text"
              value={formData.experience}
              onChange={e => handleInputChange('experience', e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
              required
           
            />
          </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Job Description
              </label>
              <div className="  dark:border-gray-600rounded-lg overflow-hidden">
                <ReactQuill
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  value={formData.description}
                  onChange={(value) => handleInputChange('description', value)}
                  placeholder="Describe the job responsibilities, requirements, and benefits..."
                  style={{
                    backgroundColor: 'white',
                    minHeight: '150px'
                  }}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {job ? 'Update Job' : 'Add Job'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
