import React, { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Briefcase, Moon, Sun, Phone } from 'lucide-react';
import NavLink from '../ui/NavLink';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../../assets/surevacancylogo.webp'

// import { LoginModal } from '../auth/LoginModal';
// import { SignupModal } from '../auth/SignupModal';

// Navbar component for site navigation and theme toggling
 const Navbar = () => {
  // State for mobile menu, scroll effect, and modal visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isSignupOpen, setIsSignupOpen] = useState(false);

  // Listen for window scroll to apply shadow and background to navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main header/navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white dark:bg-gray-900 shadow-md py-2'
            : 'bg-transparent dark:bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo and brand name */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                   <img src={logo} alt="Logo" className="h-8 w-9 object-contain rounded-full" />

            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'}`}>Sure Vacancy</span>
              </Link>
            </div>

            {/* Desktop navigation links */}
            <nav className="hidden md:flex space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/jobs" >Job Listings</NavLink>
              <NavLink to="/services" >Services</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>

            {/* Desktop theme toggle and auth buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme toggle button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>
              {/* Login and Signup buttons */}
              {/* <button
                onClick={() => setIsLoginOpen(true)}
                className="px-4 py-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                Login
              </button> */}


                  <a
            href="tel:+919876543210"
           className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors shadow-sm"
            >
           <Phone className="w-5 h-4" />
           Call Now
          </a>

            </div>

            {/* Mobile menu and theme toggle */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Theme toggle for mobile */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>
              {/* Hamburger menu button */}
              <button
                className={`${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-gray-900 dark:text-white'} hover:text-emerald-600 dark:hover:text-emerald-500 focus:outline-none`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile slide-out menu */}
        <div
          className={`fixed inset-0 z-40 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
          style={{ top: '60px' }}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {/* Mobile navigation links */}
            <Link
              to="/"
              className="py-3 text-lg font-medium text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-3 text-lg font-medium text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/jobs"
              className="py-3 text-lg font-medium text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Job Listings
            </Link>
            <Link
              to="/services"
              className="py-3 text-lg font-medium text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="py-3 text-lg font-medium text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {/* Mobile auth buttons */}
            <div className="pt-6 space-y-4">
              {/* <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsLoginOpen(true);
                }}
                className="w-full py-3 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
              >
                Login
              </button> */}

                             <a
            href="tel:+919876543210"
           className="w-full flex items-center justify-center gap-2 py-3 px-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors shadow-sm"
            >
           <Phone className="w-5 h-4" />
           Call Now
          </a>

            </div>
          </div>
        </div>
      </header>

      {/* Login and Signup modals */}
      {/* <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToSignup={() => {
          setIsLoginOpen(false);
          setIsSignupOpen(true);
        }}
      />

      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        onSwitchToLogin={() => {
          setIsSignupOpen(false);
          setIsLoginOpen(true);
        }}
      /> */}



    </>
  );
};

export default memo(Navbar);