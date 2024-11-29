import "./App.css";

import React, { useEffect, useRef, useState } from "react";

import { Route, Routes } from "react-router-dom";

import Signup2 from "./components/auth/siginupBecome";
import Profile from "./components/auth/profile";
import Edit from "./components/auth/edit";
import PasswordReset from "./components/auth/reset";
import PhoneAuth from "./components/auth/fire";
import PhoneVerification from "./components/auth/fire";
import Presonality from "./components/auth/main";
import End from "./components/auth/end";
import Quiz from "./components/auth/quiz";
import Index from "./components/auth";
import Credential from "./components/auth/credential";
import Example from "./components/auth/fire";
import RadarChart from "./components/auth/fire";
import RadarChartComponent from "./components/auth/fire";
import ChartsPage from "./components/auth/fire";
import Rides from "./components/auth/rides";
import LandingPage from "./components/auth/landingPage";
import LandingPage2 from "./components/auth/landingpage2";
import ContactUs from "./components/auth/contact";
import BLOG from "./components/auth/blog";
import PrivacyPolicy from "./components/auth/privacypolicy";
import ArAPP from "./components/auth/Arapps/arApp";
import PrivacyPolicy2 from "./components/auth/privacypolicy2";
import ArApp2 from "./components/auth/Arapps/araps2";
import ArApp3 from "./components/auth/Arapps/arapp3";
import ArApp4 from "./components/auth/Arapps/arapp4";
import ArApp6 from "./components/auth/Arapps/arapp6";
import Face from "./components/auth/Arapps/face";
import ARComponent from "./components/auth/Arapps/face2";
import ArApp7 from "./components/auth/Arapps/face2";
import Heart from "./components/auth/Arapps/bio";
import Snow from "./components/auth/Arapps/snow";
import PrivacyPolicy3 from "./components/auth/k12privacy";
import Bombay from "./components/auth/Arapps/bombay";
import ArApp from "./components/auth/Arapps/arApp";
import ArApp8 from "./components/auth/Arapps/vcarder2";
import ARcomp from "./components/auth/imageCompiler";
import Bombay2 from "./components/auth/Arapps/bombay2";
import Bombay3 from "./components/auth/Arapps/bombay3";
import Bombay4 from "./components/auth/Arapps/bombay4";

// importing service creation pages

// importing static pages

// ReactPixel.init('390972365769622',  options);

// ReactPixel.pageView();

function App() {
  return (
    <div>
      <div className="" style={{ background: "" }}>
        <Routes>
          {/* header routing */}
          <Route path="/" element={<LandingPage2 />}></Route>
          <Route path="/portal" element={<Signup2 />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/reset/:resetToken" element={<PasswordReset />} />
          <Route path="/auth" element={<ChartsPage />}></Route>
          <Route path="/personalitytest" element={<Presonality />}></Route>
          <Route path="/end" element={<End />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/credential" element={<Credential />}></Route>

          <Route path="/rides/1184/vr-spaceship" element={<Rides />}></Route>
          <Route path="/landingpage" element={<LandingPage />}></Route>
          <Route path="/interactive" element={<ArAPP />}></Route>
          <Route path="/dino" element={<ArApp2 />}></Route>
          <Route path="/earth" element={<ArApp3 />}></Route>
          <Route path="/hello" element={<ArApp4 />}></Route>
          <Route path="/multitarget" element={<ArApp6 />}></Route>
          <Route path="/facedetection" element={<Face />}></Route>
          <Route path="/interactive2" element={<ArApp7 />}></Route>
          <Route path="/vcardar" element={<ArApp8 />}></Route>
          <Route path="/tree" element={<Heart />}></Route>
          <Route path="/snowfall" element={<Snow />}></Route>
          <Route path="/bombay1" element={<Bombay />}></Route>
          <Route path="/Contactus" element={<ContactUs />}></Route>
          <Route path="/Ar" element={<ARcomp />}></Route>
          <Route

            path="/pewpewprivacypolicy"
            element={<PrivacyPolicy />}
          ></Route>
           <Route
            path="/Labappprivacypolicy"
            element={<PrivacyPolicy3 />}
          ></Route>
          <Route path="/Blog" element={<BLOG />}></Route>
          <Route
            path="/AppLabPrivacyPolicy"
            element={<PrivacyPolicy2/>}
          ></Route>
          <Route path="/bombay2" element={<Bombay2/>}></Route>
          <Route path="/bombay3" element={<Bombay3/>}></Route>
          <Route path="/bombay4" element={<Bombay4/>}></Route>

        </Routes>
       
        
      </div>
    </div>
  );
}

export default App;
