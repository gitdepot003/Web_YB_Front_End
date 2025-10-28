

import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { createRoom, listRooms } from './api';

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000' || 'https://server.youthbuzz.in';

export default function AdminDashboard() {
  const [rooms, setRooms] = useState([]);
  const [newName, setNewName] = useState('');
  const [newToken, setNewToken] = useState('');
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [logs, setLogs] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem('isAdmin') !== 'true') {
      window.location.href = '/controlroomadmin';
      return;
    }
    refreshRooms();
    const s = io(SOCKET_URL);
    socketRef.current = s;
    s.on('connect', () => {
      console.log('admin socket connected');
    });
    s.on('initial-logs', (initial) => {
      setLogs(initial.reverse());
    });
    s.on('button-pressed', (payload) => {
      if (!selectedRoom || payload.roomToken !== selectedRoom.token) return;
      setLogs(prev => [{ ...payload }, ...prev].slice(0, 500));
    });
    return () => s.disconnect();
  }, [selectedRoom?.token]);

  async function refreshRooms() {
    const res = await listRooms();
    setRooms(res.data.rooms || []);
  }

  async function createNewRoom() {
    const res = await createRoom({ name: newName, token: newToken || undefined });
    setNewName(''); setNewToken('');
    refreshRooms();
  }

  function selectRoom(room) {
    setSelectedRoom(room);
    setLogs([]);
    socketRef.current.emit('join-room', { token: room.token, role: 'admin' });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 p-8 bg-white rounded-3xl shadow-2xl border border-gray-300">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Real-time room monitoring and management</p>
          </div>
          <button
            onClick={() => { localStorage.removeItem('isAdmin'); window.location.href = '/' }}
            className="px-6 py-3 bg-red-700 hover:bg-red-800 text-white rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
          >
            Logout
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Panel - Room Management */}
          <div className="lg:w-2/5 space-y-8">
            {/* Create Room Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-300">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Create New Room</h3>
              <div className="space-y-6">
                <div>
                  <input
                    value={newName}
                    placeholder="Enter room name"
                    onChange={e => setNewName(e.target.value)}
                    className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div>
                  <input
                    value={newToken}
                    placeholder="Leave blank for auto-generation"
                    onChange={e => setNewToken(e.target.value)}
                    className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={createNewRoom}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-gray-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Create Room
                  </button>
                  <button
                    onClick={refreshRooms}
                    className="px-6 py-4 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-xl font-medium transition-all duration-200 text-gray-700"
                  >
                    Refresh
                  </button>
                </div>
              </div>
            </div>

            {/* Rooms List Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Active Rooms</h3>
                <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 border border-gray-300 font-medium">
                  {rooms.length} rooms
                </span>
              </div>
              <div className="space-y-4 h-80 overflow-y-auto pr-2 custom-scrollbar">
                {rooms.map(r => (
                  <div
                    key={r._id}
                    className={`p-6 rounded-xl border transition-all duration-200 cursor-pointer hover:scale-[1.02] ${
                      selectedRoom?._id === r._id
                        ? 'bg-red-50 border-red-300 shadow-lg'
                        : 'bg-white border-gray-300 hover:border-gray-400'
                    }`}
                    onClick={() => selectRoom(r)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-3 h-3 rounded-full ${
                            selectedRoom?._id === r._id ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
                          }`} />
                          <h4 className="font-bold text-gray-900 text-lg">{r.name || 'Untitled Room'}</h4>
                        </div>
                        <div className="text-sm text-gray-600 font-mono bg-gray-100 px-4 py-3 rounded-lg border border-gray-300">
                          {r.token}
                        </div>
                      </div>
                      <button className="ml-4 px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-all duration-200">
                        Open
                      </button>
                    </div>
                  </div>
                ))}
                {rooms.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    {/* <div className="text-5xl mb-4">🏢</div> */}
                    <p className="text-lg">No rooms created yet</p>
                    <p className="text-sm mt-2">Create your first room to get started</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          Right Panel - Live Logs
          <div className="lg:w-3/5 bg-white rounded-3xl shadow-2xl p-8 border border-gray-300">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Live Activity Logs</h3>
                {selectedRoom && (
                  <p className="text-gray-600 text-sm mt-2">
                    Monitoring: <span className="font-mono text-red-700 font-bold">{selectedRoom.token}</span>
                  </p>
                )}
              </div>
              {selectedRoom && (
                <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full border border-green-300">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-700 text-sm font-bold">LIVE</span>
                </div>
              )}
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-300 p-6 h-[calc(100%-120px)] overflow-y-auto custom-scrollbar">
              {!selectedRoom ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <div className="text-6xl mb-6">📊</div>
                  <p className="text-lg font-medium">Select a room to view live activity</p>
                  <p className="text-sm mt-3">Real-time button presses will appear here</p>
                </div>
              ) : logs.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <div className="text-5xl mb-6">⏳</div>
                  <p className="text-lg font-medium">Waiting for activity...</p>
                  <p className="text-sm mt-3">No button presses recorded yet</p>
                </div>
              ) : (

                <div className="space-y-4">
                  {logs.map((l, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-white rounded-xl border border-gray-300 hover:border-gray-400 transition-all duration-200 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center border border-red-300">
                            <span className="text-red-700 font-bold">#{idx + 1}</span>
                          </div>
                          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-bold border border-purple-300">
                            {l.buttonId}
                          </span>
                        </div>
                        <span className="text-gray-600 font-medium">
                          {new Date(l.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span className="font-mono">Socket: {l.userSocketId}</span>
                        <span>{new Date(l.timestamp).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {selectedRoom && logs.length > 0 && (
              <div className="mt-4 text-center">
                <span className="text-gray-600 text-sm font-medium">
                  Showing {logs.length} most recent events • Auto-updating in real-time
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}