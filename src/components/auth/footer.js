import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="footer-area" style={{ paddingTop: "0px" }}>
      <div className="youth-foot1">
        <div className="address">
          <div className="address-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <div className="address-div">
            <h4 style={{ textAlign: "center" }} className="address-head">
              We are here
            </h4>

            <div className="address-head" style={{ marginTop: "0px" }}>
              2nd Floor, Academic Block -2 ,<br></br> GLBCRI, Plot No.2, APJ
              Abdul Kalam Road, <br></br>Knowledge Park 3, Greater Noida,
              <br></br>
              Uttar Pradesh, India<br></br>
              Pin-201306<br></br>
              Email: info@theyouthbuzz.com<br></br>
              Office Days : Monday to Friday<br></br>
              Working Hours : 10 AM to 8 PM IST
            </div>
            <br></br>
          </div>
        </div>
        <div className="address2">
          <div class="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3507.1969177135916!2d77.48339237535241!3d28.47361577575191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s2nd%20Floor%2C%20Academic%20Block%20-2%2C%20GLBCRI%2C%20Plot%20No.2%2C%20%20APJ%20Abdul%20Kalam%20Road%2C%20Knowledge%20Park%203%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%2C%20India%2C%20Pin-201306%2C!5e0!3m2!1sen!2sin!4v1715235416587!5m2!1sen!2sin"
              className="foot-map"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="youth-foot2">
        <div style={{ alignItems: "center", width: "100%" }}>
          <ul class="social">
            <li className="so-li">
              <a
                className="so-a"
                href="https://www.facebook.com/youthbuzzonline/"
                target="_blank"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="so-li">
              <a
                className="so-a"
                href="https://twitter.com/youthbuzzonline"
                target="_blank"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li className="so-li">
              <a
                className="so-a"
                href="https://in.linkedin.com/company/youthbuzz"
                target="_blank"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="so-li">
              <a
                className="so-a"
                href="https://www.instagram.com/youthbuzz/"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "#6c757d",
              fontSize: "18px",
            }}
          >
            {" "}
            © Youth Buzz Educom LLP
          </h5>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
