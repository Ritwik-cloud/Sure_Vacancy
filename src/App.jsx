import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './components/contexts/ThemeContext';
import config from './config/config';
import Loading from './components/ui/Loading';

// ✅ Lazy load pages/components
const Navbar = lazy(() => import('./components/layout/Navbar'));
const Footer = lazy(() => import('./components/layout/Footer'));
const WhatsAppButton = lazy(() => import('./components/ui/WatsAppButton'));
const HomePage = lazy(() => import('./components/pages/HomePage'));
const JobListingsPage = lazy(() => import('./components/pages/JobListingsPage'));
const AdminLogin = lazy(() => import('./components/admin/AdminLogin'));
const Dashboard = lazy(() => import('./components/admin/Dashboard'));
const JobDetails = lazy(() => import('./components/sections/JobDetails'));
const ThankYou = lazy(() => import('./components/ui/ThankYou'));
const JobAplicationForm = lazy(() => import('./components/ui/JobAplicationForm'));
const ApplicationSuccess = lazy(() => import('./components/ui/ApplicationSuccess'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const ServicesPage = lazy(() => import('./components/pages/ServicesPage'));
const Contact = lazy(() => import('./components/sections/Contact'));

import AuthService from './appwrite/auth';

function App() {
  // ✅ Protected Route with admin check
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

    // ✅ Loading while checking admin
    if (isAdmin === null) {
      return <Loading />;
    }

    return isAdmin ? children : <Navigate to="/login" />;
  };

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <ThemeProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <Routes>
              {/* ✅ Admin routes */}
              <Route path="/login" element={<AdminLogin />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              {/* ✅ Public routes */}
              <Route
                path="/*"
                element={
                  <Suspense fallback={<Loading />}>
                    <>
                      <Navbar />
                      <main className="pt-1">
                        <Routes>
                          <Route path="/" element={<HomePage />} />
                          <Route path="/jobs" element={<JobListingsPage />} />
                          <Route path="/about" element={<AboutPage />} />
                          <Route path="/services" element={<ServicesPage />} />
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
                  </Suspense>
                }
              />
            </Routes>
          </div>
        </ThemeProvider>
      </Router>
    </Suspense>
  );
}

export default App;
