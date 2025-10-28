import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyToken } from './api';

export default function TokenEntry() {
  const [token, setToken] = useState('');
  const [err, setErr] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();

  async function submit() {
    if (!token.trim()) {
      setErr('Please enter a token');
      return;
    }
    
    setIsLoading(true);
    setErr('');
    
    try {
      const res = await verifyToken(token.trim());
      if (res.data.ok) {
        nav(`/gkp/controlroom/${token.trim()}`);
      }
    } catch (e) {
      setErr(e?.response?.data?.message || 'Invalid token');
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      submit();
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Header Section */}
          <div className="bg-gray-900 p-8 text-center">
            
            <h1 className="text-2xl font-bold text-white mb-2">Join Control Room</h1>
            <p className="text-gray-300 text-sm">
              Enter your room token to access the control panel
            </p>
          </div>

          {/* Form Section */}
          <div className="p-8">
            {/* Token Input Field */}
            <div className="mb-6">
              
              <div className="relative">
               
                <input
                  id="token-input"
                  type="text"
                  value={token}
                  onChange={e => setToken(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your room access token"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-colors duration-200"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Error Message */}
            {err && (
              <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
                <span className="text-red-500">⚠</span>
                <span className="text-red-700 text-sm">{err}</span>
              </div>
            )}

            {/* Submit Button */}
            <button 
              onClick={submit} 
              disabled={isLoading || !token.trim()}
              className="w-full bg-gray-800 hover:bg-gray-900 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Joining...
                </>
              ) : (
                <>
                  Join Control Room
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>

            {/* Help Text */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Don't have a token? Contact the room administrator for access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
