import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../appwrite/auth';
import config from '../../config/config'; // Import your config

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
console.log(error);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.logIn({ email, password });
      // Use config.adminEmail for comparison!
      if (email === config.adminEmail) {
        navigate('/dashboard');
      } else {
        await authService.logOut();
        setError('Unauthorized access');
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-white to-emerald-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
  <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
    <h2 className="text-2xl font-bold text-center text-emerald-700 dark:text-emerald-400 mb-4">Admin Login</h2>
    {error && (
      <p className="bg-red-100 text-red-700 px-4 py-2 rounded text-center text-sm mb-2">
        {error}
      </p>
    )}
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-1 text-sm font-medium">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-1 text-sm font-medium">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none dark:bg-gray-700 dark:text-white"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
      >
        Login
      </button>
    </form>
  </div>
</div>

  );
}
