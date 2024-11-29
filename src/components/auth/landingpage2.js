import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackToUp from "@uiw/react-back-to-top";
import jQuery from "jquery";
import axios from "axios";
import $ from "jquery";
import { StyleSheet, css } from "aphrodite";
import { Parallax } from "react-parallax";
import { fadeInUp } from "react-animations";
import AOS from "aos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "aos/dist/aos.css";
import Footer from "./footer";

const headset2 = new URL(
  "../../images/a132ab6f-c081-475e-bedd-e86a440dbf21-removebg-preview.png",
  import.meta.url
);



const india = new URL(
  "../../images/th.jpeg",
  import.meta.url
);
const illus = new URL("../../images/Picture2.png", import.meta.url);
const cube = new URL("../../images/2.png", import.meta.url);
const headset = new URL("../../images/1.png", import.meta.url);
const round1 = new URL("../../images/3.png", import.meta.url);
const round2 = new URL("../../images/3.png", import.meta.url);
const illus3 = new URL("../../images/Picture5.png", import.meta.url);
const map = new URL("../../images/map.png", import.meta.url);
const illus4 = new URL("../../images/Picture6.jpg", import.meta.url);
const illus5 = new URL("../../images/Picture7.jpg", import.meta.url);
const illus6 = new URL("../../images/Picture8.png", import.meta.url);
const pixel_2 = new URL("../../images/pixel_2.png", import.meta.url);
const vrAbout = new URL("../../images/vr-about-img1.png", import.meta.url);
const illus7 = new URL("../../images/Picture9.jpg", import.meta.url);
const vrImg = new URL("../../images/vr-img.png", import.meta.url);
const img1 = new URL("../../images/1.jpg", import.meta.url);
const img2 = new URL("../../images/2.jpg", import.meta.url);
const img3 = new URL("../../images/3.jpg", import.meta.url);
const African = new URL("../../images/USA.webp", import.meta.url);
const country1 = new URL("../../images/country1.png", import.meta.url);
const country2 = new URL("../../images/country3.png", import.meta.url);
const country3 = new URL("../../images/country2.jpg", import.meta.url);
const country4 = new URL("../../images/country4.png", import.meta.url);
const country5 = new URL("../../images/country5.png", import.meta.url);
const country6 = new URL("../../images/country6.png", import.meta.url);
const compatibility = new URL(
  "../../images/compatibility-img.png",
  import.meta.url
);
const korean = new URL("../../images/South korea.webp", import.meta.url);
const vrman = new URL("../../images/vr-man-shape.png", import.meta.url);
const water = new URL("../../images/water2.jpg", import.meta.url);
const flag1 = new URL("../../images/flag1.png", import.meta.url);
const flag2 = new URL("../../images/flag3.png", import.meta.url);
const flag3 = new URL("../../images/flag2.png", import.meta.url);
const flag4 = new URL("../../images/flag4.png", import.meta.url);
const flag5 = new URL("../../images/flag5.png", import.meta.url);
const flag6 = new URL("../../images/flag6.png", import.meta.url);
const flag7 = new URL("../../images/flag7.png", import.meta.url);
const flag8 = new URL("../../images/flag8.jpg", import.meta.url);
const flag9 = new URL("../../images/flag9.png", import.meta.url);
const pic1 = new URL("../../images/1.png", import.meta.url);
const pic2 = new URL("../../images/2.png", import.meta.url);
const pic3 = new URL("../../images/3.png", import.meta.url);
const pic4 = new URL("../../images/4.png", import.meta.url);
const pic5 = new URL("../../images/5.png", import.meta.url);
const pic6 = new URL("../../images/6.png", import.meta.url);
const pic7 = new URL("../../images/7.png", import.meta.url);
const pic8 = new URL("../../images/8.png", import.meta.url);
const vrGirl = new URL("../../images/vrGirl.png", import.meta.url);
function LandingPage2() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  const validatePhone = (contact) => {
    // Numeric characters only regex pattern
    const numericRegex = /^[0-9]+$/;
    return numericRegex.test(contact);
  };
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const [scrolled2, setScrolled2] = useState(false);
  const handleScroll2 = () => {
    if (window.scrollY > 50) {
      setScrolled2(true);
      window.addEventListener("scroll", handleScroll2);
      return () => window.removeEventListener("scroll", handleScroll2);
    } else {
      setScrolled2(false);
    }
  };
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const styles = StyleSheet.create({
    fadeInAnimation: {
      animationName: fadeInUp,
      animationDuration: "1s",
    },
  });
  const data = [
    {
      year: "2017",
      description: "Incorporated & Startup India recognized",
    },
    {
      year: "2018",
      description:
        "First immersive Movie for Spherical theater, Gwangju, South Korea",
    },
    {
      year: "2019",
      description: "Live streaming in VR for Golden temple, Amritsar, India",
    },
    {
      year: "2020",
      description: "Photogrammetry preservation of South Korean POWs in AR",
    },
    {
      year: "2021",
      description: "30+ Projects in AR & VR executed in one year    ",
    },
    {
      year: "2022",
      description: "VR app for EU, Education & learning department    ",
    },
    {
      year: "2023",
      description:
        "Loader, roller simulator solution package for Top US construction firm.  ",
    },
    {
      year: "2024",
      description:
        "  Let’s build something remarkable & fill this space together:)",
    },
  ];
  const [redata, setData] = useState(data);
  const [Loader, setLoader] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Code to run after 2 seconds
      setLoader(false);
    }, 1000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array means this effect runs only once after initial render
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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

  return (
    <div>
      {Loader ? (
        <div class="preloader">
          <div class="spinner"></div>
        </div>
      ) : (
        <div>
          <div className={scrolled ? "scrolled" : ""} style={{}}>
            <nav
              style={{ width: "100%", display: "inline" }}
              className={scrolled2 ? "scrolled2" : ""}
            >
              <nav
                style={{ margin: "auto", position: "fixed",backgroundColor:"white" }}
                className="navbar navbar-expand-lg navbar-light pcnav"
              >
                <Link class="navbar-brand" to="/">
                  <img src={illus} width="200px" alt="image" />
                </Link>

                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="#home">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#about">
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#design">
                        Workflow
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#compatibility">
                        Compatibility
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#features">
                        Services
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#review">
                        Review
                      </a>
                    </li>
                  </ul>

                  <div class="others-options">
                    <Link
                      to="/Contactus"
                      className={`${
                        scrolled ? "support-after" : "default-btn"
                      }`}
                    >
                      Contact us
                    </Link>

                    {/* <div class="dark-version-btn">
              <label id="switch" class="switch">
                <input type="checkbox" onchange="toggleTheme()" id="slider" />
                <span class="slider round"></span>
              </label>
            </div> */}
                  </div>
                </div>
              </nav>
            </nav>
          </div>

          <div class="vr-main-banner-two ">
            <div class="contain">
              <div class="row align-items-center">
                <div class="col-lg-5 col-md-12">
                  <div class="hero-content">
                    <span>We Make </span>
                    <h1>Technology that makes sense.</h1>
                    <p>
                      From conceptualization to deployment and data collection,
                      we make tech that fulfills your requirements in a specific
                      way and stays within the budget despite being
                      cutting-edge, and top-of-the-line.
                    </p>

                    <a href="#" class="btn btn-primary">
                      Explore More
                    </a>
                  </div>
                </div>

                <div class="col-lg-7 col-md-12">
                  <div class="banner-image">
                    <img src={vrGirl} alt="image" />
                  </div>
                </div>
              </div>
            </div>

            <div class="shape1">
              <img src={pic1} alt="image" />
            </div>
            <div class="shape2">
              <img src={pic2} alt="image" />
            </div>
            <div class="shape3">
              <img src={pic3} alt="image" />
            </div>
            <div class="shape4">
              <img src={pic4} alt="image" />
            </div>
            <div class="shape5">
              <img src={pic5} alt="image" />
            </div>
            <div class="shape6">
              <img src={pic6} alt="image" />
            </div>
            <div class="shape7">
              <img src={pic7} alt="image" />
            </div>
            <div class="shape8">
              <img src={pic8} class="rotateme" alt="image" />
            </div>
          </div>

          <section id="about" class="about-area ptb-120">
            <div class="contain">
              <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                  <div class="vr-about-image">
                    <img src={vrAbout} alt="image" />
                  </div>
                </div>

                <div class="col-lg-6 col-md-12">
                  <div class="vr-about-content">
                    <h2>Who we are</h2>
                    <p>
                      Established in 2017, we are A team of technology lovers
                      who love to do better every day. We implement technology
                      in the most sensible and efficient manner through our
                      diverse R&D expertise.
                    </p>

                    <div class="about-features">
                      <div class="row m-0">
                        <div class="col-lg-4 col-6 col-md-4 p-0">
                          <div class="features-box">
                            <i class="flaticon-vr-glasses"></i>
                            <h3>7+ years</h3>
                          </div>
                        </div>

                        <div class="col-lg-4 col-6 col-md-4 p-0">
                          <div class="features-box">
                            <i class="flaticon-layers"></i>
                            <h3>50+ projects</h3>
                          </div>
                        </div>

                        <div class="col-lg-4 col-6 col-md-4 p-0">
                          <div class="features-box">
                            <i class="flaticon-remote-control"></i>
                            <h3>15+ countries</h3>
                          </div>
                        </div>

                        <div class="col-lg-4 col-6 col-md-4 p-0">
                          <div class="features-box">
                            <i class="flaticon-tap"></i>
                            <h3>Industry Agnostic</h3>
                          </div>
                        </div>

                        <div class="col-lg-4 col-6 col-md-4 p-0">
                          <div class="features-box">
                            <i class="flaticon-3d-camera"></i>
                            <h3>5 Star rating</h3>
                          </div>
                        </div>

                        <div class="col-lg-4 col-6 col-md-4 p-0">
                          <div class="features-box">
                            <i class="flaticon-virtual-reality"></i>
                            <h3>Certfied & Recognized</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="design" class="virtual-reality-design-area">
            <div class="contain">
              <div class="section-title">
                <h2>
                  One-stop solution for all your AR VR MR IOT requirements
                </h2>
                <p>
                  From conceptualization to development and to deployment, we
                  provide complete in-house Content-Software-Hardware-Operations
                  services for all your requirements and make the process flow
                  smoothly. By doing so, we share our own expertise and learning
                  of 7+ years in the field and fulfill your requirements in the
                  best feasible way. Just tell us about your requirements in a
                  few words and let everything else be on us till we deliver you
                  the outcome you expect.
                </p>
              </div>

              <div
                class="vr-image"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <img src={vrImg} alt="image" />
              </div>
            </div>

            <div class="vr-design-image">
              <div class="row align-items-center m-0">
                <div class="col-lg-4 col-md-4 col-sm-6 p-0">
                  <div class="single-design-image">
                    <img src={img1} alt="image" />

                    <a
                      href="assets/img/vr-design-image/1.jpg"
                      class="popup-btn"
                    ></a>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 p-0">
                  <div class="single-design-image">
                    <img src={img2} alt="image" />

                    <a
                      href="assets/img/vr-design-image/2.jpg"
                      class="popup-btn"
                    ></a>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 p-0">
                  <div class="single-design-image">
                    <img src={img3} alt="image" />

                    <a
                      href="assets/img/vr-design-image/3.jpg"
                      class="popup-btn"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="compatibility" class="compatibility-area ptb-120 pb-0">
            <div class="contain">
              <div class="row">
                <div class="col-lg-6 col-md-12">
                  <div class="compatibility-content">
                    <h2>
                      Unparalleled immersion via customised VR hardware
                      solution.
                    </h2>
                    <p>
                      Enhance your immersion with our expertise in designing and
                      deploying customised VR hardware dedicated for your
                      special use case because we understand that every
                      requirement is unique and deserves a unique approach.
                    </p>
                    <a href="#" class="btn btn-light" style={{ width: "auto" }}>
                      View More
                    </a>
                  </div>
                </div>

                <div class="col-lg-6 col-md-12">
                  <div class="compatibility-image">
                    <img src={compatibility} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="discover-with-phone ptb-120 bg-f4faff">
            <div class="contain">
              <div class="section-title">
                <p>Contact now</p>
                <h2> Speak with our consultant</h2>
              </div>

              <div class="discover-phone-content">
                <div class="all-phone" style={{ justifyContent: "center" }}>
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
                                const numericValue = e.target.value.replace(/[^0-9]/g, "");
                                setcontact(numericValue);
                              }}
                            
                           
                            ></input>
                              
                          
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
                          <div
                            id="msgSubmit"
                            class="h3 text-center hidden"
                          ></div>
                          <div class="clearfix"></div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" class="vr-specifications-area ptb-120 pb-0">
            <div class="contain">
              <div class="section-title">
                <h2>What we do</h2>
              </div>

              <div class="row">
                <div class="vr-specifications-content">
                  <h4>VR storytelling </h4>
                  <span>
                    360 <sup>o</sup>, 160 <sup>o</sup> videos and images
                  </span>
                  {/* <span>The littlest, big screen</span> */}

                  <h4>VR interactive</h4>
                  <span>user input based content</span>

                  <h4>Mixed Reality</h4>
                  <span> Environment-blended content</span>

                  <h4>Phygital-IOT</h4>
                  <span>Enhancing XR perception</span>
                </div>

                <div class="vr-specifications-image">
                  <img
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    src={vrman}
                    alt="image"
                  />
                </div>

                <div class="vr-specifications-content">
                  <h4>Augmented Reality</h4>
                  <span>image, floor, object, location tracked </span>

                  <h4>Face tracked AR</h4>
                  <span>Snapchat, insta, fb promotions </span>

                  <h4>Process enhancement</h4>
                  <span>Training, simulation, product visualization </span>

                  <h4>R&D</h4>
                  <span>Making impossible, possible</span>
                </div>
              </div>
            </div>
          </section>

          <Parallax
            blur={0}
            bgImage={water}
            bgImageAlt="the cat"
            style={{ height: "100vh" }}
            strength={700}
          >
            <div class="contain">
              <div style={{ marginTop: "350px" }} class="explore-content">
                <h2>Explore This World And Beyond</h2>
                <p></p>
              </div>
            </div>
          </Parallax>

          <section id="review" class="feedback-area ptb-120">
            <div class="contain">
              <div class="section-title">
                <h2>
                  User Ratings Are A Confirmation <br />
                  Of Our Quality
                </h2>
                <p>
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. */}
                </p>
              </div>

              <div class="row">
                <Carousel
                  minimumTouchDrag={80}
                  swipeable={true}
                  draggable={true}
                  showDots={false}
                  responsive={responsive}
                  arrows={false}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlaySpeed={4000}
                  autoPlay={true}
                  keyBoardControl={true}
                  transitionDuration={500}
                  containerClass=""
                >
                  <div class="col-lg-12 col-md-12 landingslider">
                    <div class="feedback-item">
                      <div class="client-profile">
                        <img
                          style={{ borderRadius: "0px", height: "40px" }}
                          src={korean}
                          alt="image"
                        />

                        <div class="rating">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                      </div>

                      <p>
                        We had the pleasure of working together on multiple
                        projects in Korea during year 2018-19.The company and
                        its resources have worked both on shore and off shore
                        Korean territory to ensure success and has always
                        delivered great results against all odds.
                      </p>

                      <div class="client-info">
                        <h4>Joo Won Lee,South Korea</h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12 landingslider">
                    <div class="feedback-item">
                      <div class="client-profile">
                        <img
                          style={{ borderRadius: "0px", height: "40px" }}
                          src={African}
                          alt="image"
                        />

                        <div class="rating">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                      </div>

                      <p>
                        We went into XR with very basic knowledge on what we
                        wanted. Youth Buzz saw my vision and made it many times
                        better! communication was amazing and not once was their
                        a doubt that they wouldn't come through in the best way!
                        Assisted in deployment process as well Chiara
                      </p>

                      <div class="client-info">
                        <h4>Chiara Latice , USA</h4>
                      </div>
                    </div>
                  </div>
             
                </Carousel>
                <div class="feedback-slides owl-carousel owl-theme"></div>
              </div>
            </div>
          </section>

          <section class="our-clients-area ptb-120 bg-f4faff">
            <div class="contain">
              <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                  <div class="our-clients-content">
                    <h2>For 50+ clients</h2>
                    <p>
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis. */}
                    </p>
                  </div>
                </div>

                <div class="col-lg-6 col-md-12">
                  <div class="our-clients-list">
                    <div class="row">
                      <div class="col-lg-4 col-md-4 col-6">
                        <div class="single-clients">
                          <a href="#">
                            <img width="100px" src={flag1} alt="image" />
                          </a>
                        </div>

                        <div class="single-clients">
                          <a href="#">
                            <img width="100px" src={flag2} alt="image" />
                          </a>
                        </div>
                      </div>

                      <div class="col-lg-4 col-md-4 col-6">
                        <div class="single-clients">
                          <a href="#">
                            <img width="100px" src={flag3} alt="image" />
                          </a>
                        </div>

                        <div class="single-clients">
                          <a href="#">
                            <img width="100px" src={flag4} alt="image" />
                          </a>
                        </div>
                      </div>

                      <div class="col-lg-4 col-md-4 col-12">
                        <div class="single-clients">
                          <a href="#">
                            <img width="100px" src={flag5} alt="image" />
                          </a>
                        </div>

                        <div class="single-clients">
                          <a href="#">
                            <img width="100px" src={flag7} alt="image" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="map-box">
              <img src={map} alt="image" />
            </div>
          </section>

          <Footer />
          <div class="go-top">
            <i class="fas fa-arrow-up"></i>
          </div>
          <BackToUp style={{ zIndex: "999" }}>
            {" "}
            <i class="fas fa-arrow-up"></i>
          </BackToUp>
        </div>
      )}
    </div>
  );
}

export default LandingPage2;
