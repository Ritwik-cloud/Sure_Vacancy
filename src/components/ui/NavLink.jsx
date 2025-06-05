import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to || location.hash === to;

  return (
    <Link
      to={to}
      className={`relative font-medium transition-colors duration-200
        ${isActive
          ? 'text-emerald-600 dark:text-emerald-500'
          : 'text-gray-900 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 group'
        }
      `}
    >
      {children}
      {/* Show underline only on hover and only if not active */}
      {!isActive && (
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-500 transition-all duration-200 group-hover:w-full"></span>
      )}
    </Link>
  );
};

export default NavLink;
