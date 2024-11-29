import React, { useState, useEffect } from "react";
import axios from "axios";
import BackToUp from "@uiw/react-back-to-top";
import { Link } from "react-router-dom";

import Footer from "./footer";
import Header from "./header";
const shape1 = new URL("../../images/shape1.png", import.meta.url);
const shape2 = new URL("../../images/shape2.png", import.meta.url);
const shape3 = new URL("../../images/shape3.png", import.meta.url);
const shape4 = new URL("../../images/shape4.png", import.meta.url);
const shape5 = new URL("../../images/shape5.png", import.meta.url);
function ContactUs() {
  const [Loader, setLoader] = useState(true);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [message, setmessage] = useState("");
  const [subject, setsubject] = useState("");
  const baseUrl = "https://server.youthbuzz.in";
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/api/v1/contact/contactus`, {
        NameOfContact: name,
        EmailOfContact: email,
        PhoneOfContact: contact,
        MessageOfContact: message,
        SubjectOfContact: subject,

        // isEmailVerified: isEmailVerified
      });
      console.log(response);

      // dispatch(getUserIdFromAuth(response.data.data.user._id, response.data.data.user.name, response.data.data.user.email));
      if (response.data.status == "Success") {
        alert("Thanks for contacting us.We will get back to you soon. ");

        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Code to run after 2 seconds
      setLoader(false);
    }, 1000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <>
      {Loader ? (
        <div class="preloader">
          <div class="spinner"></div>
        </div>
      ) : (
        <div>
          {/* head */}
          <Header />

          <div class="page-title-area vr-mobile">
            <div class="d-table">
              <div class="d-table-cell">
                <div class="contain">
                  <h2>Contact Us</h2>
                </div>
              </div>
            </div>

            <div class="shape-box1">
              <img src={shape1} alt="shape" />
            </div>
            <div class="shape-box2 rotateme">
              <img width="20px" src={shape2} alt="shape" />
            </div>
            <div class="shape-box3">
              <img width="30px" src={shape3} alt="shape" />
            </div>
            <div class="shape-box4">
              <img width="20px" src={shape4} alt="shape" />
            </div>
            <div class="shape-box5">
              <img src={shape5} alt="shape" />
            </div>
            <div class="shape-box6 rotateme">
              <img width="20px" src={shape4} alt="shape" />
            </div>
            <div class="shape-box7">
              <img width="20px" src={shape4} alt="shape" />
            </div>
            <div class="shape-box8 rotateme">
              <img width="20px" src={shape2} alt="shape" />
            </div>
          </div>

          <section class="contact-area ptb-120">
            <div class="contain">
              <div class="row">
                <div class="col-lg-5 col-md-12">
                  <div
                    style={{ height: "auto", marginBottom: "20px" }}
                    class="contact-info"
                  >
                    <div class="title">
                      <span>Contact Now</span>
                      <h2>Speak with our consultant</h2>
                    </div>

                    <ul class="contact-info-list">
                      <li>
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Address</span>
                        2nd Floor, Academic Block -2 ,<br></br> GLBCRI, Plot
                        No.2, APJ Abdul Kalam Road, <br></br>Knowledge Park 3,
                        Greater Noida,
                        <br></br>
                        Uttar Pradesh, India<br></br>
                        Pin-201306<br></br>
                      </li>

                      <li>
                        <i class="fas fa-envelope-open-text"></i>
                        <span>Email</span>
                        <a href="#">info@theyouthbuzz.com </a>
                      </li>
                    </ul>

                    <ul
                      style={{ textAlign: "left", display: "block" }}
                      class="social"
                    >
                      <li>
                        <a
                          href="https://www.facebook.com/youthbuzzonline/"
                          target="_blank"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/youthbuzzonline"
                          target="_blank"
                        >
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://in.linkedin.com/company/youthbuzz"
                          target="_blank"
                        >
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/youthbuzz/"
                          target="_blank"
                        >
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="col-lg-7 col-md-12">
                  <form onSubmit={handleSubmit}>
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            placeholder="Your name"
                            id="name"
                            required
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            data-error="Please enter your name"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>

                      <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control margintop"
                            name="email"
                            id="email"
                            placeholder="Email address"
                            required
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            data-error="Please enter your email"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>

                      <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="msg_subject"
                            placeholder="Subject"
                            id="msg_subject"
                            required
                            style={{ marginTop: "20px" }}
                            value={subject}
                            onChange={(e) => setsubject(e.target.value)}
                            data-error="Please enter your subject"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>

                      <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="phone_number"
                            id="phone_number"
                            placeholder="Phone number"
                            style={{ marginTop: "20px" }}
                            required
                            value={contact}
                            onChange={(e) => {
                              // Allow only numeric characters in the phone input
                              const numericValue = e.target.value.replace(
                                /[^0-9]/g,
                                ""
                              );
                              setcontact(numericValue);
                            }}
                            data-error="Please enter your number"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>

                      <div class="col-lg-12 col-md-12">
                        <div class="form-group">
                          <textarea
                            name="message"
                            value={message}
                            onChange={(e) => setmessage(e.target.value)}
                            class="form-control"
                            id="message"
                            placeholder="Write message"
                            cols="30"
                            rows="7"
                            style={{ marginTop: "20px" }}
                            required
                            data-error="Write your message"
                          ></textarea>
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>

                      <div class="col-lg-12 col-md-12">
                        <button
                          type="submit"
                          class=" btn btn-primary"
                          style={{ width: "auto", marginTop: "20px" }}
                        >
                          Send Message
                        </button>
                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                        <div class="clearfix"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3507.1969177135916!2d77.48339237535241!3d28.47361577575191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s2nd%20Floor%2C%20Academic%20Block%20-2%2C%20GLBCRI%2C%20Plot%20No.2%2C%20%20APJ%20Abdul%20Kalam%20Road%2C%20Knowledge%20Park%203%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%2C%20India%2C%20Pin-201306%2C!5e0!3m2!1sen!2sin!4v1715235416587!5m2!1sen!2sin"
              className="foot-map"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <Footer />
          <BackToUp style={{ zIndex: "999" }}>
            {" "}
            <i class="fas fa-arrow-up"></i>
          </BackToUp>
        </div>
      )}
    </>
  );
}

export default ContactUs;
