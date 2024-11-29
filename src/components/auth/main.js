import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserIdFromAuth2 } from "../../Redux/actions/GetSellerIdFromAuthActionCreators2";
import toast, { Toaster } from "react-hot-toast";
import OtpInput from "react-otp-input";
import ImageUploading from "react-images-uploading";
import { UseSelector } from "react-redux/es/hooks/useSelector";
const register = new URL("../../images/rEGISTEREDBLACK.png", import.meta.url);
const register2 = new URL("../../images/careerconfusion.png", import.meta.url);
const illus3 = new URL("../../images/logonew512512.png", import.meta.url);
function Presonality() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const baseUrls = "http://localhost:8000";
  const baseUrl = "https://server.youthbuzz.in";
  const id = useSelector((state) => state.get_seller_profile_id.user_id);

  const [data, setData] = useState("");
  // useEffect(() => {
  //     if (!id) {

  //       navigate('/signup', {
  //         replace: true,
  //         state: {
  //           signIn: true,
  //         },
  //       }

  //       );
  //     } else {
  //       toast.error('You are not allowed to open this URL');
  //       navigate('/');
  //       fetchData(); // Assuming fetchData is a function you want to call when 'id' is truthy
  //     }
  //   }, [navigate,id]);
  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/v1/test/signup3`, {
        username: data,
      });

      console.log(response);
      if (response.data.statusbar === "true") {
        const dis = dispatch(
          getUserIdFromAuth2(response.data.data.newUser2._id)
        );

        navigate("/quiz");
      }
    } catch (error) {
      alert("user name exist");
    }
  };
  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`${baseUrl}/api/v1/user/logout`, {
        withCredentials: true,
      });
      if (res.data.status === "success") {
        dispatch(getUserIdFromAuth2(""));
        toast.success("You logged Out Successfully");
        navigate("/signup");
      }
    } catch (err) {
      console.error(err);
      toast.error("There may be some internal server error");
    }
  };

  return (
    <div>
      <div class="header">
        <p>
          <a href="https://theyouthbuzz.com/" target="_blank">
            <img
              src={register}
              className="head-p"
              alt="Youth Buzz - Career counselling & assessment"
            />
          </a>
        </p>

        <div>
          <div id="Recapta-Verify" className="Recapta-Verify"></div>
        </div>
      </div>
      <div>
        <div class="main">
          <section class="signup">
            <div class="container">
              <div class="signup-content">
                <div style={{textAlign:"left"}} class="signup-form">
                  <h2 class="form-title">Welcome  aspirant</h2>
                  <form
                    onSubmit={fetchData}
                    class="register-form"
                    name="welcome_form"
                    id="register-form"
                  >
                    <div style={{textAlign:"left"}} class="form-group">
                      <div for="name">
                        <i class="zmdi zmdi-account material-icons-name"></i>
                      </div>
                      <div style={{textAlign:"left"}}>
                      <input
                        type="text"
                        id="name"
                        value={data}
                        className="input-fieldd"
                        onChange={(e) => setData(e.target.value)}
                        placeholder="Enter Your Name to begin"
                      />
                        
                      </div>
                     
                    </div>
                    <div class="form-group form-button">
                      <input
                        type="submit"
                        name="signup"
                        value="Begin the test"
                        id="signup"
                        class="form-submit"
                      />
                    </div>
                    <p class="signup-image-link">
                      Please read information below.
                    </p>
                  </form>
                </div>
                <div class="signup-image">
                  <figure>
                    <img
                    style={{marginBottom:"45px"}}
                      src={register2}
                      alt="Youth Buzz Career assesment sign up"
                    />
                  </figure>
                  <p class="signup-image-link">
                    Identify your career potentials
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="signup">
            <div class="container">
              <div class="signup-content">
                <div class="signup-form">
                  <h2 class="form-title">About & Instructions</h2>
                  <ul>
                    <li>
                      This test analyses a person's occupational interest.
                    </li>
                    <li>
                      It identifies the strengths and weaknesses of a person.
                    </li>
                    <li>
                      It, therefore, helps in identifying career options one is
                      suitable for.
                    </li>
                    <li>
                      It also helps in identifying the scope of improvement.
                    </li>
                    <li>There is no time limit.</li>
                    <li>Please answer as truthfully as possible.</li>
                  </ul>
                </div>
                <div class="signup-image">
                  <figure>
                    <img width="90%" src={illus3} alt="Youth Buzz Career assesment logo" />
                  </figure>
                  <a
                    href="https://www.theyouthbuzz.com"
                    target="_blank"
                    class="signup-image-link"
                  >
                    made in India by Youth Buzz
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section class="signup">
            <div class="container">
              <br></br>
              <a
                style={{ marginTop: "10px" }}
                className="footerr"
                href="https://theyouthbuzz.com/social/"
                target="_blank"
                class="signup-image-link"
              >
                Contact us
              </a>
              <p className="footerr">Copyrights Youth Buzz educom LLP 2021</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Presonality;
