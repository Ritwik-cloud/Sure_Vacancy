import React, { useState, useEffect } from 'react';
import { Plus, Briefcase } from 'lucide-react';
import { JobForm } from '../admin/JobForm';
import { JobList } from '../admin/JobList';
import service from '../../appwrite/database'; //  Appwrite service
import { useNavigate } from 'react-router-dom';
import authService from '../../appwrite/auth'; // Adjust the path if needed
import AdminLogin from '../admin/AdminLogin';
export  const Dashboard = () => {
  // State for jobs, modal, editing, loading, and pagination
  const [jobs, setJobs] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sectorFilter, setSectorFilter] = useState('');


     const navigate = useNavigate();

     const handleLogOut = async ()=>{
        try {
            await authService.logOut();
            navigate('/login') // redirect to login
        } catch (error) {
            alert('Logout failed');
        }
     }


  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 20; // Jobs per page

  // Fetch jobs from Appwrite on mount and whenever sector page changes
  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        // Get jobs for the current page, sorted by latest
        const res = await service.getAllPosts({
            sector: sectorFilter || undefined,
          latest: true,
          limit,
          offset: (currentPage - 1) * limit,
        });
        setJobs(res.documents || []);
      } catch (err) {
        setJobs([]);
      }
      setIsLoading(false);
    };
    fetchJobs();
  }, [currentPage, sectorFilter]);




  // Add a new job via Appwrite
  const handleAddJob = async (newJob) => {
    setIsLoading(true);
    try {
      await service.createPost(newJob);
      // Refresh jobs after adding
      const res = await service.getAllPosts({
        latest: true,
        limit,
        offset: (currentPage - 1) * limit,
      });
      setJobs(res.documents || []);
      setIsFormOpen(false);
    } catch (err) {
      alert('Failed to add job');
    }
    setIsLoading(false);
  };

  // Edit an existing job via Appwrite
  const handleEditJob = async (updatedJob) => {
    setIsLoading(true);
    try {
      await service.updatePost(updatedJob.$id, updatedJob);
      // Refresh jobs after editing
      const res = await service.getAllPosts({
        latest: true,
        limit,
        offset: (currentPage - 1) * limit,
      });
      setJobs(res.documents || []);
      setEditingJob(null);
    } catch (err) {
      alert('Failed to update job');
    }
    setIsLoading(false);
  };

  // Delete a job via Appwrite
  const handleDeleteJob = async (jobId) => {
    if (!window.confirm('Delete this job?')) return;
    setIsLoading(true);
    try {
      await service.deletePost(jobId);
      // Refresh jobs after deleting
      const res = await service.getAllPosts({
        latest: true,
        limit,
        offset: (currentPage - 1) * limit,
      });
      setJobs(res.documents || []);
    } catch (err) {
      alert('Failed to delete job');
    }
    setIsLoading(false);
  };

  // Loading spinner
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-10 py-8 mt-10">


   {/* Sector filter */}
      <div className="mb-4 flex items-center gap-4">
        <label className="text-gray-700 dark:text-gray-200 font-medium">Filter by Sector:</label>
        <select
          value={sectorFilter}
          onChange={(e) => {
            setCurrentPage(1);
            setSectorFilter(e.target.value);
          }}
          className="border rounded px-2 py-1 dark:bg-gray-800 dark:text-white"
        >
          <option value="">All</option>
          <option value="Technology">Technology</option>
          <option value="delhiveryBoy">It & Software</option>
          <option value="fmcg">FMCG</option>
          <option value="Hotel">Hotel</option>
          <option value="factory">Factory</option>
          <option value="factory">Textile</option>
          <option value="factory">RealState</option>
          <option value="factory">Hardware</option>
          
        </select>
      </div>



  {/* Header with Logout Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Admin Dashboard</h1>
        <button
          onClick={handleLogOut}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>







      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg px-2 py-2 inline-block">
            <p className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Total Jobs Posted: <span className="text-emerald-600 font-bold text-2xl mr-2">{jobs.length}</span>
            </p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg flex items-center hover:bg-emerald-700 transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add New Job
          </button>
        </div>
      </div>


      {jobs.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
          <Briefcase className="h-12 w-12 mx-auto text-gray-400" />
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">No jobs posted</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Get started by adding a new job posting.</p>
        </div>
      ) : (
        <JobList
          jobs={jobs}
          onEdit={setEditingJob}
          onDelete={handleDeleteJob}
        />
      )}


      {/* Pagination controls */}
      <div className="pagination flex justify-center mt-8 gap-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="self-center">Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={jobs.length < limit}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
      {/* Job Form Modal */}
      {(isFormOpen || editingJob) && (
        <JobForm
          job={editingJob}
          onSubmit={editingJob ? handleEditJob : handleAddJob}
          onClose={() => {
            setIsFormOpen(false);
            setEditingJob(null);
          }}
        />
      )}
    </div>
  );
};


export default Dashboard;