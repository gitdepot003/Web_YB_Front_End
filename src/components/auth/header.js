import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const illus = new URL("../../images/Picture2.png", import.meta.url);
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return(
  <>
    <div className={scrolled ? "scrolled" : ""} style={{backgroundColor:"blue",zIndex:"9999"}}>
      <nav
        style={{ width: "100%", display: "inline" }}
        className={scrolled2 ? "scrolled2" : ""}
      >
        <nav 
          style={{ margin: "auto", position: "fixed",backgroundColor:"white"}}
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

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" class="nav-link" href="#home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link" href="#about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link" href="#design">
                  Workflow
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link" href="#compatibility">
                  Compatibility
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link" href="#features">
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link" href="#review">
                  Review
                </Link>
              </li>
            </ul>

            <div class="others-options">
              <Link
                to="/Contactus"
                className={`${scrolled ? "support-after" : "default-btn"}`}
              >
                Contact us
              </Link>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  </>
  )
}
export default Header;
