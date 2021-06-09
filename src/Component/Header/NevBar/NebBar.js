import React, { useState } from "react";
import "./NabBar.css";
import myLogo from "../../../image/my logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

const NebBar = () => {
  const [Style, setStyle] = useState(true);
  return (
    <div className="header">
      <div className="container d-flex justify-content-between">
        <div as={Link} to="/" className="titel-logo">
          <img src={myLogo} style={{ width: "60px", height: "55px" }} alt="" />
          Shoman
        </div>
        <div>
          <div className={!Style && "showNavBar"} id="sideNav">
            <ul className="navber">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/project">Project</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <FontAwesomeIcon
            onClick={() => setStyle(!Style)}
            icon={faAlignJustify}
            id="menuBtn"
          />
        </div>
      </div>
    </div>
  );
};

export default NebBar;
