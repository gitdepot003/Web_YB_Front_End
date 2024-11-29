import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useState } from "react";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import { StyleSheet, css } from "aphrodite";
import { fadeIn } from "react-animations";
import { bounceInDown } from "react-animations";
import { flip } from "react-animations";
import { flipInY } from "react-animations";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
AOS.init();

const styles = StyleSheet.create({
  fadeInAnimation: {
    animationName: bounceInDown,
    animationDuration: "1s",
  },
  Flip: {
    animationName: flip,
    animationDuration: "2s",
  },
  Flip2: {
    animationName: flipInY,
    animationDuration: "1s",
  },
});
const illus = new URL("../../images/Picture2.png", import.meta.url);
const illus2 = new URL("../../images/Picture4.png", import.meta.url);
const illus3 = new URL("../../images/Picture5.png", import.meta.url);
const illus4 = new URL("../../images/Picture6.jpg", import.meta.url);
const illus5 = new URL("../../images/Picture7.jpg", import.meta.url);
const illus6 = new URL("../../images/Picture8.png", import.meta.url);
const illus7 = new URL("../../images/Picture9.jpg", import.meta.url);

const illus8 = new URL("../../images/Picture10.png", import.meta.url);
const illus9 = new URL("../../images/Picture11.jpg", import.meta.url);
const illus10 = new URL("../../images/Picture12.jpg", import.meta.url);
const illus11 = new URL("../../images/Picture13.jpg", import.meta.url);
const flag1 = new URL("../../images/flag1.png", import.meta.url);
const flag2 = new URL("../../images/flag3.png", import.meta.url);
const flag3 = new URL("../../images/flag2.png", import.meta.url);
const flag4 = new URL("../../images/flag4.png", import.meta.url);
const flag5 = new URL("../../images/flag5.png", import.meta.url);
const flag6 = new URL("../../images/flag6.png", import.meta.url);
const flag7 = new URL("../../images/flag7.png", import.meta.url);
const flag8 = new URL("../../images/flag8.jpg", import.meta.url);
const flag9 = new URL("../../images/flag9.png", import.meta.url);
const flag10 = new URL("../../images/flag10.png", import.meta.url);
const flag11 = new URL("../../images/flag11.png", import.meta.url);
const flag12 = new URL("../../images/flag12.png", import.meta.url);

const country1 = new URL("../../images/country1.png", import.meta.url);
const country2 = new URL("../../images/country3.png", import.meta.url);
const country3 = new URL("../../images/country2.jpg", import.meta.url);
const country4 = new URL("../../images/country4.png", import.meta.url);
const country5 = new URL("../../images/country5.png", import.meta.url);
const country6 = new URL("../../images/country6.png", import.meta.url);
const country7 = new URL("../../images/country7.jpg", import.meta.url);
const country8 = new URL("../../images/country8.png", import.meta.url);
const country9 = new URL("../../images/country9.png", import.meta.url);
const country10 = new URL("../../images/country10.png", import.meta.url);
const country11 = new URL("../../images/country11.png", import.meta.url);
const country12 = new URL("../../images/country12.png", import.meta.url);
const country13 = new URL("../../images/country13.png", import.meta.url);
const country14 = new URL("../../images/country14.png", import.meta.url);
const country15 = new URL("../../images/country15.png", import.meta.url);

const korean = new URL("../../images/korean.png", import.meta.url);
const African = new URL("../../images/african.jpg", import.meta.url);

const phone = new URL("../../images/pp.png", import.meta.url);
const email = new URL("../../images/emails.png", import.meta.url);
const website = new URL("../../images/website.png", import.meta.url);
const youtube = new URL("../../images/youtube.png", import.meta.url);
const facebook = new URL("../../images/facebook.png", import.meta.url);
const twitter = new URL("../../images/twitter.png", import.meta.url);
function LandingPage() {
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
  return (
    <div className="landing-grid">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid black",
        }}
        innerStyle={{
          backgroundColor: "black",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            options: {
              innerSize: 12,
              outerSize: 12,
              color: "0, 0, 255",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
        // Add custom styles for the cursor
        customStyle={{
          border: "2px solid blue",
          borderRadius: "50%", // Optional: Make the cursor circular
        }}
      />

      <div className="newgrid newgrid2" style={{margin:"0px"}}>
        <div className="display-flex" >
          <div style={{ textAlign: "center" }} data-aos-duration="2000">
            <img className={css(styles.Flip)} src={illus2}></img>
          </div>
          <div>
            <img src={illus} className={css(styles.fadeInAnimation)}></img>
          </div>
          <div data-aos-duration="2000" style={{ textAlign: "center" }}>
            <img className={css(styles.Flip)} src={illus3}></img>
          </div>
        </div>
      </div>

      <div className="newgrid">
        <div className="display-flex" style={{ margin:"0px auto"}}>
          <div className="who-we1">
            <h1 className="heading-youth">Who we are</h1>
            <p className="description-youth">
              We are a team of technology enthusiasts and developers who love to
              empower services and products by adding the power of innovative
              technologies such as AR, VR, MR, IoT, and AI.
              <br></br>
              <br></br>
              In our journey so far, we are proud to have worked for various
              Government & private agencies globally, where we delivered
              high-end technology solutions, some even never made before.
              <br></br>
              <br></br>We have developed and deployed XR solutions to more than
              50 clients globally, in more than 15 countries across different
              domains such as Training, marketing, gaming, music, devotional,
              etc.
            </p>
          </div>
          <div className="display-pc">
            <div className="who-we2">
              <img width="100%" height="200px" src={illus4}></img>
              <img width="100%" height="200px" src={illus6}></img>
            </div>
            <div className="who-we2">
              <img width="100%" src={illus5}></img>
              <img width="100%" src={illus7}></img>
            </div>
          </div>
          <div className="display-mobile">
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
              containerClass="carousel display-mobile"
            >
              <div style={{ width: "100%" }}>
                <img width="100%" height="200px" src={illus5}></img>
              </div>
              <div style={{ width: "100%" }}>
                <img width="100%" height="200px" src={illus7}></img>
              </div>
              <div style={{ width: "100%" }}>
                <img width="100%" height="200px" src={illus4}></img>
              </div>
              <div style={{ width: "100%" }}>
                <img width="100%" height="200px" src={illus6}></img>
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="newgrid">
        <div className="display-flex" style={{ top: "0px" }}>
          <div style={{ width: "100%" }}>
            <h1 className="heading-youth">Who we do</h1>
            <br></br>
            <br></br>
            <div
              style={{
                display: "flex",
                width: "100%",
                margin: "auto",

                justifyContent: "space-between",
              }}
              className="who-font"
            >
              <div
                style={{
                  width: "50%",
                  marginRight: "20px",
                  textAlign: "right",
                }}
              >
                <div className="description-youth who-font">
                  Augmented reality web and App solutions
                </div>
              </div>

              <div
                style={{ borderLeft: "2px solid black", width: "50%" }}
                className="description-youth"
              >
                <div style={{ marginLeft: "20px" }} className="who-font">
                  Placing a virtual digital interactive replica of your product
                  in your local environment anywhere anytime using your
                  cellphone or a wearable headset without the need of carrying
                  your actual product.
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                margin: "auto",
                justifyContent: "space-between",
              }}
              className="who-font"
            >
              <div
                style={{
                  width: "50%",
                  marginRight: "20px",
                  textAlign: "right",
                  marginTop: "20px",
                }}
              >
                <div className="description-youth who-font">
                  Virtual reality web and App solutions
                </div>
              </div>

              <div
                style={{ borderLeft: "2px solid black", width: "50%" }}
                className="description-youth"
              >
                <div
                  style={{ marginLeft: "20px", marginTop: "20px" }}
                  className="who-font"
                >
                  Taking your clients or your audience on an interactive trip to
                  your location such as factory or resort and install a better
                  understanding. Without the need of actually travelling to the
                  location or the product.
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                margin: "auto",
                justifyContent: "space-between",
              }}
              className="who-font"
            >
              <div
                style={{
                  width: "50%",
                  marginRight: "20px",
                  textAlign: "right",
                  marginTop: "20px",
                }}
              >
                <div className="description-youth who-font" style={{}}>
                  Beyond Immersive tech
                </div>
              </div>

              <div
                style={{ borderLeft: "2px solid black", width: "50%" }}
                className="description-youth"
              >
                <div
                  style={{ marginLeft: "20px", marginTop: "20px" }}
                  className="who-font"
                >
                  Customized controllers, interaction medium, hardware and
                  solutions for your special use case
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="newgrid" >
        <div className="display-flex" >
          <div style={{ width: "100%" }}>
            <h1 className="heading-youth">What have we done so far</h1>

            <div className="company">
              {redata.map((item) => {
                return (
                  <div style={{ marginTop: "20px" }} className="remarkable">
                    <h4>{item.year},</h4>
                    <p className="youth-description">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="newgrid">
        <div className="display-flex">
          <div style={{ width: "100%" }}>
            <h1 className="heading-youth">
              {" "}
              <VisibilitySensor partialVisibility offset={{}}>
                {({ isVisible }) => (
                  <div>
                    For {isVisible ? <CountUp end={50} duration={2} /> : null}+
                    clients
                  </div>
                )}
              </VisibilitySensor>{" "}
            </h1>

            <div className="company">
              {" "}
              <img class="imgWidth" src={flag1}></img>
              <img class="imgWidth" src={flag2}></img>{" "}
              <img class="imgWidth" src={flag3}></img>{" "}
              <img class="imgWidth" src={flag4}></img>
            </div>

            <div className="company ">
              <img className="imgWidth" src={flag5}></img>
              <img className="imgWidth" src={flag6}></img>
              <img className="imgWidth" src={flag7}></img>
              <img className="imgWidth" src={flag8}></img>
            </div>
            <div className="company">
              <img className="imgWidth" src={flag9}></img>
              <img className="imgWidth" src={flag10}></img>
              <img className="imgWidth" src={flag11}></img>
              <img className="imgWidth" src={flag12}></img>
            </div>
            </div>
          
    
        </div>
      </div>

      <div className="newgrid">
        <div className="display-flex">
          <div style={{ width: "100%" }}>
            <h1 className="heading-youth">
              {" "}
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div>
                    For {isVisible ? <CountUp end={15} duration={2} /> : null}+
                    countries
                  </div>
                )}
              </VisibilitySensor>
            </h1>

            <div className="company">
              <div>
                {" "}
                <img className="imgWidth2" src={country1}></img>
              </div>
              <div>
                {" "}
                <img className="imgWidth2" src={country2}></img>
              </div>
              <div>
                {" "}
                <img className="imgWidth2" src={country3}></img>
              </div>
              <div>
                {" "}
                <img className="imgWidth2" src={country4}></img>
              </div>
              <img className="imgWidth2" src={country5}></img>
            </div>

            <div className="company">
              <img className="imgWidth2" src={country6}></img>
              <img className="imgWidth2" src={country7}></img>
              <img className="imgWidth2" src={country8}></img>
              <img className="imgWidth2" src={country9}></img>
              <img className="imgWidth2" src={country10}></img>
            </div>
            <div className="company">
              <img className="imgWidth2" src={country11}></img>
              <img className="imgWidth2" src={country12}></img>
              <img className="imgWidth2" src={country13}></img>
              <img className="imgWidth2" src={country14}></img>
              <img className="imgWidth2" src={country15}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="newgrid">
        <div className="display-flex">
          <div className="background">
            <h1 className="heading-youth">With a feedback</h1>
           <div >
            <div className="flexx">
              <div className="leaf">
                <img width="100%" src={korean}></img>
              </div>
              <div className="feed-width">
                <p className="description-youth feedback">
                  We had the pleasure of working together on multiple projects
                  in Korea during year 2018-19.The company and its resources
                  have worked both on shore and off shore Korean territory to
                  ensure success and has always delivered great results against
                  all odds.
                </p>

                <h3 className="feedback-head1">Joo Won Lee,</h3>
                <h3 className="feedback-head2">South Korea</h3>
              </div>
            </div>
            <div className="flexx" style={{ marginTop: "40px" }}>
              <div className="feed-width">
                <p className="description-youth feedback right2">
                  We went into XR with very basic knowledge on what we wanted.
                  Youth Buzz saw my vision and made it many times better!
                  communication was amazing and not once was their a doubt that
                  they wouldn't come through in the best way! Assisted in
                  deployment process as well
                </p>

                <h3 className="feedback-head1 right2">Chiara Latice ,</h3>
                <h3 className="feedback-head2 right2"> USA</h3>
              </div>
              <div className="leaf">
                <img
                  width="100%"
                  style={{ borderRadius: "25% 0 25% 0" }}
                  src={African}
                ></img>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newgrid">
        <div className="display-flex">
          <div style={{ width: "100%" }}>
            <h1 className="heading-youth">Recognitions</h1>

            <div className="company  reco">
              <img className="imgWidth reco-height" src={illus8}></img>
              <img className="imgWidth reco-height" src={illus9}></img>
            </div>

            <div className="company reco">
             
                <img className="imgWidth reco-height" src={illus10}></img>
             

                <img className="imgWidth reco-height" src={illus11}></img>
           
            </div>
          </div>
        </div>
      </div>

      <div className="newgrid">
        <div className="display-flex">
          <div style={{ width: "100%" }}>
            <h1 className="heading-youth">Through our ideology</h1>

            <div className="company">
              <div style={{ margin: "auto", width: "300px" }}>
                <h1 className="heading-youth">Mission</h1>
                <p className="description-youth">
                  We assist different segments of society in increasing their
                  efficiency using XR technology. We research, develop & deploy
                  XR solutions according to the end user’s need from scratch.
                </p>
              </div>
              <div style={{ margin: "auto", width: "300px" }}>
                <h1 className="heading-youth">Vision</h1>
                <p style={{ margin: "auto" }} className="description-youth">
                  Our vision is to make XR as relevant as possible for different
                  sectors of society and establish ourselves as a key player in
                  doing so.
                </p>
              </div>
              <div style={{ margin: "auto", width: "300px" }}>
                <h1 className="heading-youth">Values</h1>
                <p style={{ margin: "auto" }} className="description-youth">
                  We stand for commitment, excellence, innovation, best in class
                  service, and best in industry technology solutions for our end
                  users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="newgrid">
        <div className="display-flex" >
          <div style={{ width: "100%" }}>
            <h1 className="heading-youth">Contact us</h1>
            <div className="flexx">
              <div className="">
                <div>
                  <h4 className="feedback-head3">
                    <img width="50px" src={phone}></img> +91 9167481883
                  </h4>
                  <h4 className="feedback-head3">
                    {" "}
                    <Link>
                      {" "}
                      <img width="50px" src={email}></img> info@theyouthbuzz.com
                    </Link>
                  </h4>
                  <h4 className="feedback-head3">
                    {" "}
                    <Link to="https://www.TheYouthBuzz.com">
                      {" "}
                      <img width="50px" src={website}></img>www.TheYouthBuzz.com
                    </Link>
                  </h4>
                </div>
              </div>
              <div
                className="footer2"
                style={{ textAlign: "right", marginTop: "100px" }}
              >
                <img src={illus}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="flexx"
            style={{ marginTop: "300px", padding: "10px" }}
          >
            <h4 className="feedback-head3">
              {" "}
              <Link to="https://www.Facebook.com/YouthBuzzOnline">
                <img width="50px" src={facebook}></img>
                Facebook.com/YouthBuzzOnline
              </Link>
            </h4>
            <h4 className="feedback-head3">
              {" "}
              <Link to="https://www.Youtube.com/YouthBuzz">
                {" "}
                <img width="50px" src={youtube}></img>Youtube.com/YouthBuzz
              </Link>
            </h4>
            <h4 className="feedback-head3">
              {" "}
              <Link to="https://www.twitter.com/youthbuzzonline">
                {" "}
                <img width="50px" src={twitter}></img>
                twitter.com/youthbuzzonline
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
