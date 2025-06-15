import React, { memo } from 'react';
import {
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { Link } from 'react-router-dom';
// import { MapPin } from 'lucide-react';

  
const address = "Sure Vacancy, 1st floor - Rani Niwas 39, Lala Lajpat Rai Road, Ashrampara, Siliguri-734001, West Bengal";
const encodedAddress = encodeURIComponent(address);

// With coordinates (more accurate)
const lat = 26.721896478963988;
const lng = 88.4304885999491;
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

const handleLocationClick = () => {
  // For mobile devices, try to open native apps
  if (/Android/i.test(navigator.userAgent)) {
    // Correct Android geo URL with your coordinates
    window.open(`geo:${lat},${lng}?q=${lat},${lng}(Sure Vacancy)`, '_blank');
  } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    // Correct iOS Maps URL
    window.open(`maps://?q=${lat},${lng}`, '_blank');
  } else {
    // Fallback to web version
    window.open(googleMapsUrl, '_blank');
  }
};



// Footer component for site-wide information and navigation
 const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main grid: Company, Quick Links, Services, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info & Social */}
          <div>
            <div className="flex items-center mb-6">
              <Briefcase className="h-8 w-8 text-emerald-400" />
              <span className="ml-2 text-xl font-bold">SureVacancy</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional career guidance to help you navigate your career journey with confidence.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/surevacancy/"  target='_blank'  className="p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/surevacancy/"  target='_blank'  className="p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/surevacancy?igsh=MWxiZDFwODl4c2ZnNA==" target='_blank' className="p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors">Services</a>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Job Listings
               </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Services List */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Resume Building</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Career Coaching</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Skill Assessment</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Interview Preparation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Professional Training</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Career Transition</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              {/* Address */}
             <div 
      className="flex items-start cursor-pointer hover:bg-gray-800 p-3 rounded-lg transition-colors"
      onClick={handleLocationClick}
    >
      <MapPin className="h-10 w-10 text-emerald-400 mr-3 mt-1" />
      <p className="text-gray-400 hover:text-emerald-400 transition-colors">
        Sure Vacancy, 1st floor - Rani Niwas 39, Lala Lajpat Rai Road, Ashrampara, Siliguri-734001, West Bengal
      </p>
    </div>
              {/* Phone */}
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-400 mr-3" />
                <p className="text-gray-400">+91 9332344995</p>
              </div>
              {/* Email */}
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-400 mr-3" />
                <p className="text-gray-400">surevacancy.hr@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer bottom bar: copyright and policies */}
       <div className="border-t border-gray-800 pt-8">
  <div className="flex flex-col md:flex-row justify-between items-center">
    {/* Copyright */}
    <p className="text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} SureVacancy. All rights reserved.
    </p>
    {/* Policy links */}
    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-4 md:mt-0 space-y-2 md:space-y-0">
      <div className="flex space-x-4">
        <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm">Privacy Policy</a>
        <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm">Terms of Service</a>
        <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm">Cookie Policy</a>
      </div>
      {/* Developed by */}
      <div className="mt-2 md:mt-0">
        <span className="text-gray-500 text-sm">
          Developed by{" "}
          <a
            href="https://wa.me/+916295962560" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline font-medium"
          >
            Ritwik
          </a>
        </span>
      </div>
    </div>
  </div>
</div>


      </div>
    </footer>
  );
};
export default memo(Footer)