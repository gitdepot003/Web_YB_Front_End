import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getUserIdFromAuth } from "../../Redux/actions/GetSellerIdFromAuthActionCreators";
import toast, { Toaster } from "react-hot-toast";
import QrScanner from "react-qr-scanner";
import {
  ArrowRight,
  CreditCard as Edit,
  Wallet,
  LogOut,
  User,
  Mail,
  Phone,
  Calendar,
  Coins,
  QrCode,
  X,
} from "lucide-react";

export default function Profile() {
  // ---- State & Refs ----
  const [scannerOpen, setScannerOpen] = useState(false);
  const [testModalOpen, setTestModalOpen] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const [data, setData] = useState([]);
  const videoRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const baseUrl = "https://server.youthbuzz.in";
  const id = useSelector((state) => state.get_seller_profile_id.user_id);

  // ---- Camera / Scanner ----
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    if (scannerOpen) startCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, [scannerOpen]);



   useEffect(() => {
    if (!id) {
      navigate("/portal", {
        replace: true,
        state: {
          signIn: true,
        },
      });
    } else {
      toast.error("You are not allowed to open this URL");
      navigate("/profile");
      fetchData()
 // Assuming fetchData is a function you want to call when 'id' is truthy
    }
  }, [navigate, id]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/v1/user/getOneuser/${id}`);
      setData([res.data.data.user]);
    } catch (error) {
      console.error(error);
    }
  };

  // ---- QR Scan Handlers ----
  const handleScan = (res) => {
    if (res) window.location.href = res.text;
  };

  const handleError = (error) => console.error("QR Scanner Error:", error);

  const toggleFlash = () => setFlashOn(!flashOn);

  // ---- Logout Handlers ----
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${baseUrl}/api/v1/user/logout`, { withCredentials: true });
      if (res.data.status === "success") {
        dispatch(getUserIdFromAuth(""));
        toast.success("Logged Out Successfully");
        navigate("/signup");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error during logout");
    }
  };

  // ---- Purchase Test ----
  const buyTest = async () => {
    try {
      // const res = await axios.patch(`http://localhost:8000/api/v1/user/updatecoin/${id}`, { amount: 5 });
      const res = await axios.patch(`${baseUrl}/api/v1/user/updatecoin/${id}`, { amount: 5 });
      
      if (res.data.status === true) navigate("/personalitytest");
    } catch (error) {
      console.error(error);
    }
  };

  // ---- Helpers ----
  const formatDOB = (dob) => {
    if (!dob) return "-";
    return dob.split("T")[0];
  };

  // ---- Loading Placeholder ----
  if (data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Toaster />
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading profile...</p>
        </div>
      </div>
    );
  }

  // ---- Main Render ----
  return (
    <div className="min-h-screen bg-white">
      <Toaster />

      {/* QR Scanner Modal */}
      {scannerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="bg-gray-900 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">QR Scanner</h2>
              <button onClick={() => setScannerOpen(false)} className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="p-6">
              <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
                <QrScanner delay={300} onError={handleError} onScan={handleScan} style={{ width: "100%" }} />
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={toggleFlash} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors">
                  {flashOn ? "Turn Flash Off" : "Turn Flash On"}
                </button>
                <button onClick={() => setScannerOpen(false)} className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Close Scanner
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Test Confirmation Modal */}
      {testModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="bg-gray-900 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Confirm Purchase</h2>
              <button onClick={() => setTestModalOpen(false)} className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="p-8 text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coins className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Purchase Personality Test</h3>
              <p className="text-gray-600 mb-8">
                This test costs <span className="font-bold text-gray-800">5 coins</span>. Do you want to proceed?
              </p>
              <div className="space-y-3">
                <button onClick={buyTest} className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Yes, Purchase Test
                </button>
                <button onClick={() => setTestModalOpen(false)} className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {data.map((item) => (
          <div key={item._id} className="space-y-8">
            {/* Profile Header */}
            <div className="text-center">
              <div className="w-24 h-24 rounded-full border-4 border-gray-200 overflow-hidden bg-gray-100 mx-auto mb-4">
                <img
                  src={`https://youthbuzzdata.s3.ap-south-1.amazonaws.com/${item.photo}`}
                  alt={`${item.name} ${item.lastname}`}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/150/6B7280/FFFFFF?text=User")}
                />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{item.name} {item.lastname}</h1>
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-6">
                <Coins className="w-5 h-5" />
                <span className="font-semibold">{item.yourCoin} Coins</span>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Link to="/edit">
                  <button className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-6 rounded-lg flex items-center gap-2 transition-colors">
                    <Edit className="w-4 h-4" /> Edit Profile
                  </button>
                </Link>
                <Link to="/myWallet">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-lg flex items-center gap-2 transition-colors">
                    <Wallet className="w-4 h-4" /> My Wallet
                  </button>
                </Link>
                <button onClick={() => setScannerOpen(true)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-lg flex items-center gap-2 transition-colors">
                  <QrCode className="w-4 h-4" /> Scan QR
                </button>
                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg flex items-center gap-2 transition-colors">
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            </div>

            {/* About & Personal Info */}
            <div className="border-t border-gray-200 pt-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Hello! I'm {item.name} {item.lastname}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button onClick={() => setTestModalOpen(true)} className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
                  Take Personality Test <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
                <div className="space-y-6">
                  {[
                    { icon: User, label: "Name", value: item.name },
                    { icon: Mail, label: "Email", value: item.email },
                    { icon: User, label: "Gender", value: item.gender },
                    { icon: Phone, label: "Phone", value: item.phoneNumber },
                    { icon: Calendar, label: "Date of Birth", value: formatDOB(item.DOB) },
                  ].map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <info.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 font-medium mb-1">{info.label}</p>
                        <p className="text-gray-900 font-semibold">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
