import React, { useState, useCallback } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { getUserIdFromAuth } from "../../Redux/actions/GetSellerIdFromAuthActionCreators";
import toast, { Toaster } from "react-hot-toast";
import OtpInput from "react-otp-input";
import ImageUploading from "react-images-uploading";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import QrScanner
 from "react-qr-scanner";
import jsQR from "jsqr";

const scanner = new URL("../../images/frame (4).png", import.meta.url);
function Profile() {
  const [scanneropen, setopenScan] = useState(false);
  const videoRef = useRef(null);
  const [result, setResult] = useState("");

  // Start the scanner

  // Cleanup when the component is unmounted

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };
    if (scanneropen) {
      startCamera();
    }
    return () => {
      const video = videoRef.current;

      if (video) {
        const stream = video.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach((track) => track.stop());
        }
      }
    };
  }, []);

  const navigate = useNavigate('');
  const dispatch = useDispatch();
  const baseUrl = "https://server.youthbuzz.in";
  const baseUrls = "http://localhost:8000";
  const id = useSelector((state) => state.get_seller_profile_id.user_id);
  console.log(id);
  const [data, setData] = useState([]);
  const [test, setTest] = useState(false);

  const buytest = async () => {
    try {
      const res = await axios.patch(
        `http://localhost:8000/api/v1/user/updatecoin/${id}`,
        {
          amount: 5,
        }
      );
      console.log(res);
      if (res.data.status == true) {
        navigate("/personalitytest");
      }
    } catch (error) {}
  };
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
      const response = await axios.get(
        `${baseUrl}/api/v1/user/getOneuser/${id}`
      );
      setData([response.data.data.user]);

      console.log(response);
    } catch (error) {}
  };
  const handleScan = (result) => {
    if (result) {
      console.log("qr folund");
      console.log(result, "hhhhj");
      // Use a regex to check if the result is a valid URL

      if (result) {
        // Navigate to the detected URL

        window.location.href = result.text;
      } else {
        console.error("Invalid URL format");
      }
    }
  };

  const handleError = (error) => {
    console.error("Error accessing camera:", error);
  };
  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`${baseUrl}/api/v1/user/logout`, {
        withCredentials: true,
      });
      if (res.data.status === "success") {
        dispatch(getUserIdFromAuth(""));
        toast.success("You logged Out Successfully");
        navigate("/signup");
      }
    } catch (err) {
      console.error(err);
      toast.error("There may be some internal server error");
    }
  };
  const handleLogout2 = async (e) => {
    e.preventDefault();

    dispatch(getUserIdFromAuth(""));
    toast.success("You logged Out Successfully");
    navigate("/portal");
  };
  const [flashOn, setFlashOn] = useState(false);
  const toggleFlash = () => {
    setFlashOn(!flashOn);
  };
  return (
    <div className={`profile-b ${scanneropen ? "blurred-background" : ""}`}>
      {data.length != 0 ? (
        data.map((item) => {
          return (
            <div key={item._id} className="profile-main">
            
              <div className="profile-child1">
              <div className="scanner-div">
                <div className="scanner-container-main pcbtn">
                  {scanneropen && (
                    <div className={`scanner-container ${scanneropen ? "visible" : ""}`}>
                      <QrScanner
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ width: "100%",zIndex:"99" }}
                        facingMode="environment"
                        facingModeChanged={(value) => {
                          if (value === "user") {
                            // Flash is not supported when using the front camera
                            setFlashOn(false);
                          }
                        }}
                        constraints={{
                          video: {
                            facingMode: "environment",
                            torch: flashOn,
                          },
                        }}
                      />
                      <button
                    onClick={() => {
                      setopenScan(false);
                    }}
                    style={{position:"relative" ,margin:"auto",width:"50%"}}
                    className="button-86"
                  >
                    close
                  </button>
                    </div>
                  )}
                </div>
              </div>
                <div className="profile-pic">
                  <img
                    width="100%"
                    height="240px"
                    src={`https://youthbuzzdata.s3.ap-south-1.amazonaws.com/${item.photo}`}
                  ></img>
                </div>
                <div className="profile-name">
                  <h1 className="profile-namee" style={{}}>
                    {item.name} {item.lastname}
                  </h1>
                
                  <h1>My Coin:{item.yourCoin}</h1>
                  <div className="mobilebtn">
                  {scanneropen && (
                    <div className={`scanner-container ${scanneropen ? "visible" : ""}`}>
                      <QrScanner
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ width: "100%",zIndex:"99" }}
                        facingMode="environment"
                        facingModeChanged={(value) => {
                          if (value === "user") {
                            // Flash is not supported when using the front camera
                            setFlashOn(false);
                          }
                        }}
                        constraints={{
                          video: {
                            facingMode: "environment",
                            torch: flashOn,
                          },
                        }}
                      />
                      <button
                    onClick={() => {
                      setopenScan(false);
                    }}
                    style={{position:"relative" ,margin:"auto",width:"50%"}}
                    className="button-86"
                  >
                    close
                  </button><br></br>
                    </div>
                  )}
                  </div>
                  <div >
                <button
                    onClick={() => {
                      setopenScan(true);
                    }}
                    style={{position:"relative" ,margin:"auto",width:"100%"}}
                    className="button-86 mobilebtn"
                  >
                    Scanner
                  </button><br></br>
                  <Link to="/myWallet">
                  <button className="button-86 mobilebtn"  style={{position:"relative" ,margin:"auto",width:"100%"}}>My Wallet</button>
                </Link>
                </div>
                </div>
             
              
              </div>
              <div className="profile-child2">
                <Link to="/edit">
                  <button className="button-85">edit</button>
                </Link>
                <Link to="/myWallet">
                  <button className="button-85  btnpos pcbtn">My Wallet</button>
                </Link>

               
               
                  <button
                    onClick={() => {
                      setopenScan(true);
                    }}
                    className="button-85  btnpos2 pcbtn"
                  >
                    Scanner
                  </button>
              

                <button
                  onClick={handleLogout2}
                  style={{ position: "absolute", bottom: "10px" }}
                  className="button-85 display-pc"
                >
                  Logout
                </button>
                <div style={{ flexBasis: "50%" }}>
                  <h4 style={{ marginTop: "20px" }}>
                    About <span style={{ color: "#4481eb" }}>me</span>
                  </h4>
                  <p className="para">
                    Hello! I’m Alex Smith. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Aenean fermentum ullamcorper
                    sem, at placerat dolor volutpat ac. Duis nulla enim,
                    condimentum nec ultricies.
                  </p>

                  <Link to="/personalitytest">
                    {" "}
                    <button
                      style={{ position: "relative", marginTop: "10px" }}
                      className="button-85 "
                    >
                      Take test
                    </button>
                  </Link>
                </div>
                <div style={{}} className="profile-child3">
                  <div style={{ margin: "auto" }}>
                    <h6 className="head">Name:</h6>
                    <h6 className="head"> Email:</h6>
                    <h6 className="head">Gender:</h6>
                    <h6 className="head"> Phone Number:</h6>
                    <h6 className="head">Date of Birth:</h6>
                  </div>
                  <div style={{ margin: "auto" }}>
                    <h6 className="content-profile">{item.name}</h6>
                    <h6 className="content-profile">{item.email}</h6>
                    <h6 className="content-profile">{item.gender}</h6>
                    <h6 className="content-profile">{item.phoneNumber}</h6>
                    <h6 className="content-profile">
                      {item.DOB.split("T00:00:00.000Z")}
                    </h6>
                  </div>
                </div>
                <button
                  onClick={handleLogout2}
                  style={{ position: "relative", marginTop: "30px" }}
                  className="button-85 display-mobile display-mobile"
                >
                  Logout
                </button>
              </div>

              {/* <div style={{width:"100%"}}>
                                <div>
                                <  button style={{position:"relative",margin:"auto"}} className="button-85">edit</button>
                                    </div>
                           
                      
                            </div> */}
              {test && (
                <div className="taketest">
                  <div
                    style={{
                      position: "absolute",
                      top: "200px",
                      background: "white",
                      width: "80%",
                      padding: "20px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                      borderRadius: "20px",
                    }}
                  >
                    <h1 style={{ textAlign: "center" }}>
                      {" "}
                      Test cost is 5 coin, do you want to buy ??
                    </h1>
                    <div style={{ textAlign: "center" }}>
                      <button onClick={buytest} className="button-71">
                        Yes
                      </button>
                      <br></br>
                      <h1>or</h1>
                      <button className="button-71">No</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default Profile;
