import React from "react";
import Header from "./header";
import Footer from "./footer";

function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="privacy-pic"></div>
      <h1 className="privacy-head">Privacy Policy</h1>
      <div className="content-policy">
        <div className="content-main">
          <h2 className="sub-heading">1. Personal Information</h2>
          <p className="para-policy">
            The app does not collect, store, or use any user’s personally
            identifiable information either while visiting, downloading,
            installing, playing, upgrading, or uninstalling our game.
          </p>
        </div>

        <div className="content-main">
          <h2 className="sub-heading">2. External links</h2>
          <p className="para-policy">
            There may be some external links in the game that users may visit if
            they wish. Content on those external links is not our
            responsibility. 
          </p>
        </div>

   

        <div className="content-main">
          <h2 className="sub-heading">3. Contact us</h2>
          <p className="para-policy">
            If you have any questions about the Privacy of our products or
            services, please contact us through the email
            youthbuzzrevolution@gmail.com
          </p>
        </div>

        <div className="content-main">
          <h2 className="sub-heading">4. Age limit:</h2>
          <p className="para-policy">Applicable as per Meta’s policy</p>
        </div>

        <div className="content-main">
          <h2 className="sub-heading">5. Updates to the Privacy Policy</h2>
          <p className="para-policy">We reserve the right to update this policy from time to time; please keep checking this page for any updates in the future.</p>
        </div>

        <div className="content-main">
          <h2 className="sub-heading">Last updated: 5th of May 2024</h2>
          

        </div>
     
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer/>
    </>
  );
}
export default PrivacyPolicy;
