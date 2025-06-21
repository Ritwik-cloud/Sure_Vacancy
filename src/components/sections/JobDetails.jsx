import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../../appwrite/database";
import LoadingSpinner from "../ui/LoadingSpinner";
import { 
  Briefcase, 
  MapPin, 
  IndianRupee, 
  CalendarDays, 
  Clock, 
  Building,
  Users,
  ArrowRight,
  Award,
  User,
  IdCard
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import DOMPurify from 'dompurify';

const JobDetails = () => {
  // Get the job ID from the URL parameters
  const { id } = useParams();

  // State to store the job data and loading status
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleApply = () => {
    navigate(`/jobs/${job.$id}/apply`);
  };

  // Fetch job details when the component mounts or when the ID changes
  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true);
      try {
        // Fetch job data from Appwrite backend using the job ID
        const data = await service.getPost(id);
        setJob(data);
      } catch (err) {
        console.error('Error fetching job:', err);
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

  // Sanitize the job description HTML
  const sanitizedDescription = DOMPurify.sanitize(job.description || '');

  // Main job details UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-teal-50 dark:from-gray-800 dark:to-gray-800 py-10 sm:py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Card Container */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            {/* Icon Badge */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <IdCard className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
            
            {/* Job Title and Meta */}
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-2 leading-tight">
                {job.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {job.company && (
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Building className="w-5 h-5 mr-2" />
                    <span className="text-lg font-medium">{job.company}</span>
                  </div>
                )}
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                  {job.sector}
                </span>
              </div>
            </div>
          </div>

          {/* Metadata Row */}
          <div className="flex flex-wrap gap-y-4 gap-x-8 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mr-3">
                <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Location</p>
                <p className="font-semibold">{job.location}</p>
              </div>
            </div>
            
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mr-3">
                <IndianRupee className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Salary</p>
                <p className="font-semibold">{job.salary}</p>
              </div>
            </div>
            
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mr-3">
                <CalendarDays className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Posted</p>
                <p className="font-semibold">
                  {job.postedDate
                    ? new Date(job.postedDate).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })
                    : new Date(job.$createdAt).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })}
                </p>
              </div>
            </div>
            
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mr-3">
                <Award className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Experience</p>
                <p className="font-semibold">{job.experience || 'Not specified'}</p>
              </div>
            </div>

            {job.teamSize && (
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Team Size</p>
                  <p className="font-semibold">{job.teamSize}</p>
                </div>
              </div>
            )}
          </div>

          {/* Description Section */}
        <div className="mb-8">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
    <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
      <Briefcase className="w-4 h-4 text-white" />
    </div>
    Job Description
  </h2>
  <div
    className="
      prose prose-lg max-w-none
      prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900
      dark:prose-invert
      dark:prose-headings:text-white dark:prose-p:text-gray-300 dark:prose-li:text-gray-300 dark:prose-strong:text-white
      prose-teal
    "
    dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
  />
</div>


          {/* Apply Button */}
          <div className="flex justify-end">
            <button
              onClick={handleApply}
              className="w-full sm:w-auto px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow transition"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(JobDetails);