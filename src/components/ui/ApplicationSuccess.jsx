import React from "react";

function ApplicationSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900 px-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 sm:p-12 max-w-md w-full flex flex-col items-center">
        {/* Checkmark Icon */}
        <div className="bg-emerald-100 dark:bg-emerald-900/40 rounded-full p-4 mb-6">
         <svg
  className="w-12 h-12 text-emerald-600 dark:text-emerald-400 animate-draw"
  fill="none"
  stroke="currentColor"
  strokeWidth={2.5}
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M5 13l4 4L19 7"
    strokeDasharray="100"
    strokeDashoffset="100"
  >
    <animate
      attributeName="stroke-dashoffset"
      from="100"
      to="0"
      dur="0.6s"
      fill="freeze"
      begin="0.2s"
    />
  </path>
</svg>

        </div>
        {/* Thank You Text */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-2 text-center">
          Application Submitted Successfully!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
          
          We  will get back to you soon.
        </p>
        {/* Back to Home Button */}
        <a
          href="/jobs"
          className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold shadow hover:bg-emerald-700 transition-colors duration-200"
        >
          Back to Job Listings
        </a>
      </div>
    </div>
  );
}

export default ApplicationSuccess;
