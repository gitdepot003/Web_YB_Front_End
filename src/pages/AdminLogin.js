
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminLogin } from './api';

export default function AdminLogin() {
  const [token, setToken] = useState('');
  const [err, setErr] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();

  async function login() {
    if (!token.trim()) {
      setErr('Please enter admin token');
      return;
    }

    setIsLoading(true);
    setErr('');

    try {
      await adminLogin(token.trim());
      localStorage.setItem('isAdmin', 'true');
      nav('/controlroomadmin/dashboard');
    } catch(err) {
      setErr('Invalid admin token - Access denied');
    } finally {
      setIsLoading(false);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      login();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-300">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-center relative">
           
            
            <div className="relative z-10">
              
              <h1 className="text-2xl font-bold text-white mb-2">Admin Portal</h1>
              <p className="text-gray-300 text-sm">
                Secure access to control room dashboard
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8">
            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 mb-6 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
             
              <span className="text-yellow-700 text-sm font-medium">Restricted Access Area</span>
            </div>

            {/* Token Input */}
            <div className="mb-6">
              
              <div className="relative">
                
                <input
                  id="admin-token"
                  type="password"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your secure admin token"
                  className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 text-lg font-mono"
                  disabled={isLoading}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                This token provides access to sensitive administrative controls
              </p>
            </div>

            {/* Error Message */}
            {err && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-500 text-sm">⚠️</span>
                </div>
                <div>
                  <p className="text-red-700 font-medium text-sm">{err}</p>
                  <p className="text-red-600 text-xs mt-1">Please verify your credentials and try again</p>
                </div>
              </div>
            )}

            {/* Login Button */}
            <button
              onClick={login}
              disabled={isLoading || !token.trim()}
              className="w-full bg-gradient-to-r from-gray-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Authenticating...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-3">
                 
                  <span>Access Admin Dashboard</span>
                </div>
              )}
            </button>

           
          </div>
        </div>

        
      </div>
    </div>
  );
}