///design 1 black simple

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { verifyToken } from './api';

// export default function TokenEntry() {
//   const [token, setToken] = useState('');
//   const [err, setErr] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const nav = useNavigate();

//   async function submit() {
//     if (!token.trim()) {
//       setErr('Please enter a token');
//       return;
//     }
    
//     setIsLoading(true);
//     setErr('');
    
//     try {
//       const res = await verifyToken(token.trim());
//       if (res.data.ok) {
//         nav(`/gkp/controlroom/${token.trim()}`);
//       }
//     } catch (e) {
//       setErr(e?.response?.data?.message || 'Invalid token');
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   function handleKeyPress(e) {
//     if (e.key === 'Enter') {
//       submit();
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 w-full max-w-md">
//         <h1 className="text-xl font-semibold text-gray-900 text-center mb-3">
//           Join Room
//         </h1>
//         <p className="text-gray-600 text-center mb-6 text-sm">
//           Enter your room token to join the conversation
//         </p>
        
//         <div className="mb-6">
         
//           <input
//             id="token-input"
//             type="text"
//             value={token}
//             onChange={e => setToken(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Enter token"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
//             disabled={isLoading}
//           />
//         </div>
        
//         <button 
//           onClick={submit} 
//           className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed text-sm"
//           disabled={isLoading}
//         >
//           {isLoading ? (
//             <>
//               <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               Joining...
//             </>
//           ) : (
//             <>
//               Join Room
//               <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//               </svg>
//             </>
//           )}
//         </button>
        
//         {err && (
//           <div className="mt-4 p-2 bg-red-50 border border-red-200 rounded-md">
//             <p className="text-red-700 text-xs flex items-center">
//               <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//               </svg>
//               {err}
//             </p>
//           </div>
//         )}
        
//         <div className="mt-6 pt-5 border-t border-gray-200">
//           <p className="text-gray-500 text-xs text-center">
//             Don't have a token? Contact the room administrator for access.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// // }



///design 2 colorfull 
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { verifyToken } from './api';

// export default function TokenEntry() {
//   const [token, setToken] = useState('');
//   const [err, setErr] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);
//   const nav = useNavigate();

//   async function submit() {
//     if (!token.trim()) {
//       setErr('Please enter a token');
//       return;
//     }
    
//     setIsLoading(true);
//     setErr('');
    
//     try {
//       const res = await verifyToken(token.trim());
//       if (res.data.ok) {
//         nav(`/gkp/controlroom/${token.trim()}`);
//       }
//     } catch (e) {
//       setErr(e?.response?.data?.message || 'Invalid token');
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   function handleKeyPress(e) {
//     if (e.key === 'Enter') {
//       submit();
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
//       </div>

//       <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 w-full max-w-md relative z-10 transform transition-all duration-300 hover:shadow-3xl">
//         {/* Header with icon */}
//         <div className="text-center mb-8">
//           <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
//             </svg>
//           </div>
//           <h1 className="text-2xl font-bold text-black mb-2">
//             Join Room
//           </h1>
//           <p className="text-blue-100/80 text-sm">
//             Enter your room token to join the conversation
//           </p>
//         </div>
        
//         {/* Token Input */}
//         <div className="mb-6">
          
//           <div className={`relative transition-all duration-300 ${isFocused ? 'transform scale-105' : ''}`}>
//             <input
//               id="token-input"
//               type="text"
//               value={token}
//               onChange={e => setToken(e.target.value)}
//               onKeyPress={handleKeyPress}
//               onFocus={() => setIsFocused(true)}
//               onBlur={() => setIsFocused(false)}
//               placeholder="Paste your access token here"
//               className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
//               disabled={isLoading}
//             />
//             <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 pointer-events-none"></div>
//           </div>
//         </div>
        
//         {/* Submit Button */}
//         <button 
//           onClick={submit} 
//           className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none group relative overflow-hidden"
//           disabled={isLoading}
//         >
//           {/* Animated background */}
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
//           <span className="relative flex items-center justify-center">
//             {isLoading ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Verifying...
//               </>
//             ) : (
//               <>
//                 Join Room
//                 <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </>
//             )}
//           </span>
//         </button>
        
//         {/* Error Message */}
//         {err && (
//           <div className="mt-4 p-3 bg-red-500/20 border border-red-400/30 rounded-lg backdrop-blur-sm animate-shake">
//             <p className="text-red-200 text-sm flex items-center">
//               <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//               </svg>
//               {err}
//             </p>
//           </div>
//         )}
        
//         {/* Help Text */}
//         <div className="mt-6 pt-5 border-t border-white/20">
//           <p className="text-blue-100/60 text-xs text-center">
//             Don't have a token? <span className="text-blue-300 hover:text-blue-200 cursor-pointer transition-colors duration-200">Contact the room administrator</span> for access.
//           </p>
//         </div>
//       </div>

//       {/* Add custom animation for shake */}
//       <style jsx>{`
//         @keyframes shake {
//           0%, 100% { transform: translateX(0); }
//           25% { transform: translateX(-5px); }
//           75% { transform: translateX(5px); }
//         }
//         .animate-shake {
//           animation: shake 0.5s ease-in-out;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </div>
//   );
// }

//design 3 black and white 3d 

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