

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import { getRoom } from './api';

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000' || 'https://server.youthbuzz.in';

export default function RoomView() {
  const { token } = useParams();
  const [socket, setSocket] = useState(null);
  const [room, setRoom] = useState(null);
  const [status, setStatus] = useState('');
  const [pressedButton, setPressedButton] = useState(null);

  useEffect(() => {
    getRoom(token).then(r => setRoom(r.data.room)).catch(() => setRoom(null));
    const s = io(SOCKET_URL);
    setSocket(s);
    s.on('connect', () => {
      s.emit('join-room', { token, role: 'user' });
    });
    s.on('disconnect', () => {});
    return () => s.disconnect();
  }, [token]);

  function pressButton(groupIdx, btnIdx) {
    if (!socket) return;
    const buttonId = `g${groupIdx + 1}-b${btnIdx + 1}`;
    socket.emit('press-button', { token, buttonId });
    setPressedButton({ groupIdx, btnIdx });
    setStatus(`Pressed ${buttonId}`);
    setTimeout(() => {
      setStatus('');
      setPressedButton(null);
    }, 1500);
  }

  if (!room) return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl px-12 py-8 border border-gray-700 shadow-xl">
        <div className="text-white text-2xl font-semibold flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-600 rounded-full animate-spin"></div>
          Loading room...
        </div>
      </div>
    </div>
  );

  // Professional color schemes using valid Tailwind grays with subtle variations
  const groupColors = [
    { 
      bg: 'bg-gray-700', 
      hover: 'hover:bg-gray-600', 
      active: 'active:bg-gray-800', 
      border: 'border-gray-600',
      accent: 'bg-gray-600',
      pressed: 'bg-gray-500 ring-2 ring-gray-400 ring-opacity-50 shadow-lg',
      text: 'text-gray-100',
      groupBg: 'bg-gray-800',
      shadow: 'shadow-xl'
    },
    { 
      bg: 'bg-gray-600', 
      hover: 'hover:bg-gray-500', 
      active: 'active:bg-gray-700', 
      border: 'border-gray-500',
      accent: 'bg-gray-500',
      pressed: 'bg-gray-400 ring-2 ring-gray-300 ring-opacity-50 shadow-lg',
      text: 'text-gray-50',
      groupBg: 'bg-gray-700',
      shadow: 'shadow-xl'
    },
    { 
      bg: 'bg-gray-500', 
      hover: 'hover:bg-gray-400', 
      active: 'active:bg-gray-600', 
      border: 'border-gray-400',
      accent: 'bg-gray-400',
      pressed: 'bg-gray-300 ring-2 ring-gray-200 ring-opacity-50 shadow-lg',
      text: 'text-gray-900',
      groupBg: 'bg-gray-600',
      shadow: 'shadow-xl'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="bg-gray-800 rounded-3xl px-6 py-8 border border-gray-700 shadow-2xl">
            <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
              {room.name || 'Control Panel'}
            </h1>
            <div className="bg-gray-700 rounded-xl px-6 py-3 border border-gray-600 inline-block">
              <span className="text-gray-300 font-mono text-xl font-semibold tracking-wide">
                Token: {room.token}
              </span>
            </div>
          </div>
        </header>

        {/* Status Message */}
        {status && (
          <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-gray-700 text-white px-8 py-4 rounded-2xl shadow-2xl font-semibold border border-gray-600 animate-in slide-in-from-top-2 duration-300">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
              {status}
            </div>
          </div>
        )}

        {/* Control Panel */}
        <main className="space-y-4">
          {[0, 1, 2].map((groupIdx) => {
            const colors = groupColors[groupIdx];
            return (
              <section 
                key={groupIdx}
                className={`${colors.groupBg} rounded-3xl p-6 border border-gray-700 ${colors.shadow} hover:shadow-2xl transition-all duration-300 group/section`}
                aria-labelledby={`group-header-${groupIdx}`}
              >
                {/* Group Header */}
                <header className="text-center mb-6">
                  <div 
                    className={`${colors.accent} inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-4 shadow-2xl border-2 ${colors.border} transform group-hover/section:scale-110 transition-transform duration-300`}
                    role="img"
                    aria-label={`Group ${groupIdx + 1} indicator`}
                  >
                    <span className={`${colors.text} text-3xl font-bold drop-shadow-lg`}>
                      {groupIdx + 1}
                    </span>
                  </div>
                  <h2 
                    id={`group-header-${groupIdx}`}
                    className="text-2xl font-bold ${colors.text} tracking-tight mb-1"
                  >
                    Group {groupIdx + 1}
                  </h2>
                  <div className="w-20 h-0.5 ${colors.accent} mx-auto rounded-full"></div>
                </header>

                {/* Button Grid */}
                <div 
                  className="grid grid-cols-3 sm:grid-cols-4 gap-2 justify-items-center"
                  role="grid"
                  aria-label={`Buttons for Group ${groupIdx + 1}`}
                >
                  {Array.from({ length: 12 }).map((_, btnIdx) => {
                    const isPressed = pressedButton && pressedButton.groupIdx === groupIdx && pressedButton.btnIdx === btnIdx;
                    const buttonLabel = `Button ${btnIdx + 1} in Group ${groupIdx + 1}`;
                    return (
                      <button
                        key={btnIdx}
                        onClick={() => pressButton(groupIdx, btnIdx)}
                        aria-label={buttonLabel}
                        className={`
                          relative group/button ${colors.bg} 
                          ${colors.hover}
                          ${colors.active}
                          ${colors.text}
                          w-16 h-16 sm:w-20 sm:h-20 rounded-2xl
                          transition-all duration-300 ease-out
                          transform hover:scale-105 focus:scale-105 group-hover/section:scale-102
                          focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-25
                          active:scale-95 active:translate-y-0.5
                          flex items-center justify-center
                          font-bold text-lg sm:text-xl tracking-tight
                          ${colors.shadow} hover:shadow-xl
                          border-2 ${colors.border}
                          hover:border-gray-400
                          ${isPressed ? colors.pressed : ''}
                        `}
                        role="gridcell"
                      >
                        <span 
                          className="relative z-10 drop-shadow-md"
                        >
                          {btnIdx + 1}
                        </span>
                        {isPressed && (
                          <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse"></div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </main>
      </div>
    </div>
  );
}