import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../../appwrite/database";
import LoadingSpinner from "../ui/LoadingSpinner";
import { Briefcase, MapPin, IndianRupee, CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";

const JobDetails = () => {
  // Get the job ID from the URL parameters
  const { id } = useParams();

  // State to store the job data and loading status
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleApply = () => {
  navigate(`/jobs/${job.$id}/apply`);
}


  // Fetch job details when the component mounts or when the ID changes
  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true);
      try {
        // Fetch job data from Appwrite backend using the job ID
        const data = await service.getPost(id);
        setJob(data);
      } catch (err) {
        setJob(null); // Set job to null if not found or error occurs
      }
      setLoading(false);
    };
    fetchJob();
  }, [id]);

  // Show loading spinner while fetching data
  if (loading) return <LoadingSpinner text="Loading job details..." />;
  // Show error message if job not found
  if (!job) return <div className="text-center py-12 text-red-500">Job not found.</div>;

  // Main job details UI
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-gradient-to-br from-white to-teal-50 dark:from-gray-900 dark:to-gray-950 min-h-screen">
      <div className="container mx-auto px-2 sm:px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
          {/* Header: Job icon, title, and sector badge */}
          <div className="flex flex-col sm:flex-row items-center mb-6">
            <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-teal-100 dark:bg-teal-900/40 mb-4 sm:mb-0 sm:mr-5">
              <Briefcase size={28} className="sm:size-32 text-teal-600 dark:text-teal-400 rounded-lg p-2" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{job.title}</h1>
              <span className="inline-block mt-2 px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs font-semibold rounded-full">
                {job.sector}
              </span>
            </div>
          </div>

          {/* Meta info: Location, Salary, Posted Date */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 mb-8">
            {/* Location */}
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin size={18} className="mr-2 text-gray-400" />
              {job.location}
            </div>
            {/* Salary */}
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <IndianRupee size={18} className="mr-2 text-gray-400" />
              {job.salary}
            </div>
            {/* Posted Date */}
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <CalendarDays size={16} className="mr-2" />
              <span>
             Posted: {job.datePosted ? new Date(job.datePosted).toLocaleDateString('en-GB', {
             day: '2-digit',
             month: '2-digit',
             year: 'numeric' }) : ""}
            </span>

            </div>
          </div>

          {/* Job Description */}
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">Job Description</h2>
           <p className="text-gray-700 dark:text-gray-200 leading-relaxed break-words whitespace-pre-line">
           {job.description}
          </p>

          </div>

          {/* Apply Now Button */}
          <div className="flex justify-end">
            <button onClick={handleApply} className="w-full sm:w-auto px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow transition">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(JobDetails);
