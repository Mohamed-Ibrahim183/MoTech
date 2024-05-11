import React from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="HEADER">
      <div className="container1">
        <div className="logo">
          {/* <img src="./Images/bg.jpg" alt="" /> */}
          <span>
            {" "}
            <span className="Pre">MO</span>TECH
          </span>
        </div>
        <div className="Links">
          <span>
            <a href="/Home" className="nav-link active-link">
              Home
            </a>
          </span>
          <span>
            <a href="/OurTeam" className="nav-link">
              Our Team
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
