import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserIdFromAuth } from "../../Redux/actions/GetSellerIdFromAuthActionCreators";

import OtpInput from "react-otp-input";
import ImageUploading from "react-images-uploading";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import toast, { Toaster } from "react-hot-toast";
function Edit() {
  const baseUrl = "https://server.youthbuzz.in";
  const baseUrls = "http://localhost:8000";
  const id = useSelector((state) => state.get_seller_profile_id.user_id);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const [show, setShow] = useState("case1");
  const [show3, setShow3] = useState(true);
  const [name, setfirstName] = useState("");
  const [sign, setSign] = useState("signup");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setCPassword] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const [token, setToken] = useState("");
  const [cookie, setCookie] = useState("  ");
  const [gender, setGender] = useState("");
  const [OTP, setOTP] = useState("");
  const [showupdate, setupdate] = useState(true);
  const [showdelete, setdelete] = useState(false);
  const [dob, setDob] = useState();
  const [number, setNumber] = useState("");
  const [lastname, setLastname] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showUpload, setUpload] = useState(false);
  const [current, setcurrent] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    if (!id) {
      navigate("/signup", {
        replace: true,
        state: {
          signIn: true,
        },
      });
    } else {
      toast.error("You are not allowed to open this URL");
      navigate("/edit");
      fetchData(); // Assuming fetchData is a function you want to call when 'id' is truthy
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
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `${baseUrl}/api/v1/user/updatepass/${id}`,
        {
          // lastname:lastname,
          passwordCurrent: current,
          password: password,

          // isEmailVerified: isEmailVerified
        }
      );

      if (response.data.statusbar === "success") {
        toast.success("Password Updated");

        console.log(response);
      }
      // if (response.data.statusbar === "success") {
      //   dispatch(getUserIdFromAuth(response.data.data.user._id, response.data.data.user.lastname, response.data.data.user.name, response.data.data.user.email));
      //   navigate("/home")
      // }
    } catch (error) {
      console.log(error);
      toast.error("Current password is wrong");
      // if (error.message === "Request failed with status code 403") {
      //   setsign("OTP")

      // }
    }
  };
  const handledelete = async (e) => {
    e.preventDefault();

    navigate("/signup");
    try {
      const response = await axios.delete(
        `${baseUrl}/api/v1/user/delete/${id}`
      );
      console.log("hi");

      if (response.status === "success") {
        toast.success("user deleted");

        console.log(response);
      }
      // if (response.data.statusbar === "success") {
      //   dispatch(getUserIdFromAuth(response.data.data.user._id, response.data.data.user.lastname, response.data.data.user.name, response.data.data.user.email));
      //   navigate("/home")
      // }
    } catch (error) {
      console.log(error);
      // if (error.message === "Request failed with status code 403") {
      //   setsign("OTP")

      // }
    }
  };

  return (
    <div style={{ background: "#4481eb", height: "130vh" }}>
      {data.length != 0 ? (
        data.map((item) => {
          return (
            <div key={item._id} className="edit-main2">
              <h2 className="">EDIT PROFILE </h2>

              <hr></hr>
              <div>
                {showupdate ? (
                  <button
                    onClick={() => setupdate(false)}
                    className="button-71"
                  >
                    {" "}
                    Update password
                  </button>
                ) : (
                  <button onClick={() => setupdate(true)} className="button-71">
                    {" "}
                    cancel
                  </button>
                )}
              </div>
              <div>
                {showupdate ? (
                  <div></div>
                ) : (
                  <form onSubmit={handleLogin}>
                    <input
                      type="password"
                      value={current}
                      onChange={(e) => setcurrent(e.target.value)}
                      className="edit-form password"
                      placeholder="Current password"
                    ></input>
                    <br></br>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="edit-form password"
                      placeholder="New password"
                    ></input>
                    <br></br>

                    <button type="submit" className="button-71">
                      Save
                    </button>
                  </form>
                )}
              </div>
              <h3>or</h3>
              <button onClick={() => setdelete(true)} className="button-71">
                {" "}
                Deactivate account
              </button>
              {showdelete && (
                <div style={{ fontSize: "20px" }} className="head">
                  Do you want to delete your account?<br></br>
                  <button onClick={handledelete} className="button-71">
                    yes
                  </button>{" "}
                  <br></br>{" "}
                  <button
                    style={{ marginTop: "10px" }}
                    onClick={() => setdelete(false)}
                    className="button-71"
                  >
                    No
                  </button>
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
export default Edit;
