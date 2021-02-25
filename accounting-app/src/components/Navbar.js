import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import logo from "./logo.png";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  var user = auth.currentUser;
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h1>{user}</h1>
          <Link to="/home" className="navbar-logo">
            <img
              className="img"
              src={logo}
              alt="logo"
              style={{ scale: "5px" }}
            ></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/home" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-links">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-links">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/manager" className="nav-links">
                Manager
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/User" className="nav-links">
                User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
