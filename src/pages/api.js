import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000/api' || 'https://server.youthbuzz.in';

export const adminLogin = (token) => axios.post(`${API_BASE}/admin/login`, { token });
export const createRoom = (data) => axios.post(`${API_BASE}/admin/rooms`, data);
export const listRooms = () => axios.get(`${API_BASE}/admin/rooms`);
export const verifyToken = (token) => axios.post(`${API_BASE}/room/verify`, { token });
export const getRoom = (token) => axios.get(`${API_BASE}/room/${token}`);
