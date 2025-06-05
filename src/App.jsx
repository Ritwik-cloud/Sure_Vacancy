import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './components/contexts/ThemeContext';
import  Navbar  from './components/layout/Navbar';
import  Footer  from './components/layout/Footer';
import  WhatsAppButton  from './components/ui/WatsAppButton';
import  HomePage  from './components/pages/HomePage';
import  JobListingsPage  from './components/pages/JobListingsPage';
import AuthService from './appwrite/auth';
import AdminLogin from './components/admin/AdminLogin';
import Dashboard from './components/admin/Dashboard';
import JobDetails from './components/sections/JobDetails';
import config from './config/config';
import './App.css';
import ThankYou from './components/ui/ThankYou';
import JobAplicationForm from './components/ui/JobAplicationForm';
import ApplicationSuccess from './components/ui/ApplicationSuccess'
import About from './components/sections/About';
import Services from './components/sections/Services';
import Sector from './components/sections/Sector';
import Contact from './components/sections/Contact';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';

function App() {
  // Protected Route component for admin authentication
  const ProtectedRoute = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(null);
    
    useEffect(() => {
      const checkAdmin = async () => {
        try {
          const user = await AuthService.getCurrentUser();
          setIsAdmin(user?.email === config.adminEmail);
        } catch {
          setIsAdmin(false);
        }
      };
      checkAdmin();
    }, []);

    // Loading state while checking authentication
    if (isAdmin === null) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center">
            <div className="animate-spin h-8 w-8 border-4 border-emerald-500 border-t-transparent rounded-full mb-2"></div>
            <span className="text-emerald-600 font-medium">Loading...</span>
          </div>
        </div>
      );
    }

    // Redirect to login if not admin
    return isAdmin ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Routes>
            {/* Admin authentication routes */}
            <Route path="/login" element={<AdminLogin />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            
            {/* Public routes with main layout */}
            <Route path="/*" element={
              <>
                <Navbar />
                <main className=' pt-1'>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/jobs" element={<JobListingsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={ <ServicesPage/>  } />
                      <Route path="/contact" element={<Contact />} />

                     <Route path="/jobs/:id" element={<JobDetails />} />
                    <Route path="/thank-you" element={<ThankYou />} />
                    <Route path="/success" element={<ApplicationSuccess />} />

                    <Route path="/jobs/:id/apply" element={<JobAplicationForm />} />


                  </Routes>
                </main>
                <Footer />
                <WhatsAppButton />
              </>
            } />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;