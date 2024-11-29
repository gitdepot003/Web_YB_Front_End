import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getUserIdFromAuth } from "../../Redux/actions/GetSellerIdFromAuthActionCreators";
import { useSelector } from "react-redux";
const register = new URL("../../images/a1_White-01 (1).png", import.meta.url);

const Background = new URL(
  "../../images/Background Advanced.gif",
  import.meta.url
);

const Background2 = new URL(
  "../../images/image-removebg-preview.png",
  import.meta.url
);
const Background3 = new URL(
  "../../images/A new era of LBE XR Gaming.png",
  import.meta.url
);
const joinNow = new URL("../../images/JOIN NOW.png", import.meta.url);

function Rides() {
  const baseUrl = "https://server.youthbuzz.in";
  const baseUrls = "http://localhost:8000";
  const { resetToken } = useParams();
  const navigate=useNavigate('')
  console.log(resetToken);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const [data, setData] = useState([]);
  const [timeSlot, setTimeSlot] = useState("");
  const [amount, setAmont] = useState("");
  const [Status, setStatus] = useState("");
  const handleTime = (e) => {
    e.preventDefault();
    setAmont(timeSlot);
  };
  useEffect(() => {
    handleRide();
  }, []);
  useEffect(() => {
    if (data === undefined || data.length === 0) return;
    setStatus(data[0].Status !== null ? data[0].Status : "");
  }, [data]);
  console.log(Status);
  const id = useSelector((state) => state.get_seller_profile_id.user_id);
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
      navigate("/rides/1184/vr-spaceship");
 // Assuming fetchData is a function you want to call when 'id' is truthy
    }
  }, [navigate, id]);
  const RideBuy = async () => {
    
    try {
      const res = await axios.post(
        `${baseUrl}/api/v1/booking/BookRide/1184`,{
           Coins:amount,
           RideName:"Vr Spaceship",
           Slot:timeSlot
      }
     
      );
      console.log(res,"jkhjkljkl");
      if (res.data.status ==  "Success") {
        alert("your slot is bookedddd");
        buytest()
  


      }
    } catch (error) {
      alert("Booked")
    }
  
};
  const RideStatus = async () => {
    
      try {
        const res = await axios.patch(
          `${baseUrl}/api/v1/ride/updateRideStatus/1184`
        );
        console.log(res);
        if (res.data.status == "Success") {
          alert("your slot is booked");

        }
      } catch (error) {
        alert("Booked Try Again Later")
      }
    
  };
  const buytest = async () => {
  
      try {
        const res = await axios.patch(
          `https://server.youthbuzz.in/api/v1/user/updatecoin/${id}`,
          {
            amount: amount,
          }
        );
        console.log(res);
        if (res.data.status == true) {
          alert("your slot is booked");
          RideStatus()
        }
      }
      catch (error) {
        


      }
    
  }

  const handleRide = async () => {
    try {
      const res = await axios.get(
        "https://server.youthbuzz.in/api/v1/ride/getRide"
      );
      setData(res.data.data.ride);
      console.log(
        res.data.data.ride[0].Gallery[0].slice(0, 500),
        "<----api data"
      );
    } catch (err) {
      console.log(err, "<--- err in api fetching");
    }
  };
  return (
    <>
      {data.map((item) => {
        return (
          <div style={{ position: "absolute", width: "100%" }}>
            <div onSubmit={RideBuy} className="bookslot">
              <img
                width="200px"
                height="200px"
                src="https://ourcadium.s3.ap-south-1.amazonaws.com/Ride%20Thumbnails%20and%20Gallery%20Images/thumbnail-6597d231ae1baa8234a9d881-1704448736153.jpeg"
              ></img>
              <div> Status:{item.Status}</div>
              <div style={{ display: "flex" }}>
                Book for:{" "}
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                >
                  <option value="15">10</option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                  <option value="60">60</option>
                </select>{" "}
                min
                <button onClick={handleTime}>Confirm time</button>
              </div>
              <div style={{ display: "flex" }}>
                cost:
                <input
                  type="text"
                  disabled
                  style={{ color: "black" }}
                  value={amount}
                  onChange={(e) => setAmont(e.target.value)}
                ></input>
              </div>

              <button onClick={RideBuy} className="button-71">
                {" "}
                Book Slot
              </button>
            </div>
          </div>
        );
      })}
      {data.map((item) => {
        return (
          <div>
            <div style={{ height: "auto" }} className="video">
              <div
                style={{
                  position: "fixed",
                  width: "400px",
                  bottom: "30px",
                  width: "100%",
                  zIndex: "99",
                }}
              >
                <div style={{ width: "100%", textAlign: "center" }}>
                  <button style={{ width: "400px" }} className="join-btn">
                    BOOK NOW
                  </button>
                </div>
              </div>

              <div style={{ paddingTop: "100px" }} className="">
                <div className="img-game">
                  <div className="RidePic">
                    <h1>{item.Name}</h1>
                    <img
                      width="100%"
                      src={`https://ourcadium.s3.ap-south-1.amazonaws.com/Ride%20Thumbnails%20and%20Gallery%20Images/thumbnail-6597d231ae1baa8234a9d881-1704448736153.jpeg`}
                    ></img>

                    <h2>Location:{item.Location}</h2>
                    <h2>Rating:{item.Rating}</h2>
                    <h2>ID:{item.RideID}</h2>

                    <Carousel
                      minimumTouchDrag={80}
                      swipeable={true}
                      draggable={true}
                      showDots={false}
                      responsive={responsive}
                      ssr={true} // means to render carousel on server-side.
                      infinite={true}
                      autoPlaySpeed={4000}
                      autoPlay={true}
                      keyBoardControl={true}
                      transitionDuration={500}
                      containerClass="rideSlide"
                    >
                      {item.Gallery.map((item2) => {
                        return (
                          <div>
                            <img
                              width="100%"
                              src={`https://ourcadium.s3.ap-south-1.amazonaws.com/${item2}`}
                            ></img>
                          </div>
                        );
                      })}
                    </Carousel>
                    <p>{item.Description}</p>
                  </div>

                  <div></div>
                  <div></div>
                </div>
                <div className="img-game">
                  <div className="RidePic">
                    <h1>{item.Name}</h1>
                    <img
                      width="50%"
                      src={`https://ourcadium.s3.ap-south-1.amazonaws.com/Ride%20Thumbnails%20and%20Gallery%20Images/thumbnail-6597d231ae1baa8234a9d881-1704448736153.jpeg`}
                    ></img>
                    <h2>Status:{item.Status}</h2>
                    Book for:
                  </div>
                </div>
              </div>
              <video
                src={Background}
                disablePictureInPicture
                autoplay="autoplay"
                muted
                className="video2"
                loop
              ></video>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Rides;
