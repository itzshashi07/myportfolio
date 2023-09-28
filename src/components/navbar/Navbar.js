import React from "react";
import "./Navbar.css";
import logo from "../../files/logo2.png";
import { Link } from "react-scroll"; // Import the Link component
import SongButton from "../songButton/SongButton";

function Navbar() {
  const handleClick = () => {
    const email = "officialshashi2023@gmail.com";
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="navbar">
      <img className="navbar-logo-img" src={logo} alt="" />

      <div className="navbar-links">
        <ul className="navbar-links-ul"> 
          <li className="navbar-links-li">
            <Link
              activeClass="active"
              to="aboutMe" // Use the same value as the ID in LandingPages
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              About me{" "}
            </Link>
          </li>
          <li className="navbar-links-li">
            <Link
              activeClass="active"
              to="aboutMe" // Use the same value as the ID in LandingPages
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              Fetures{" "}
            </Link>
          </li>
          <li className="navbar-links-li">
            {" "}
            <Link
              activeClass="active"
              to="myProjects" // Use the same value as the ID in LandingPages
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              {" "}
              My Projects
            </Link>
          </li>
          <li className="navbar-links-li">
         
           <a href="https://blogproject-a042e.web.app/" style={{color : "white" ,textDecoration: "none"}}>  Blog{" "}</a>
           
          </li>
          <li className="navbar-links-li">
            {" "}
            <button type="" onClick={handleClick} className="navbar-links-btn">
              Contact me
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
