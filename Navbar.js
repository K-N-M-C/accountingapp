import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home" className="navbar-logo">
            <img className="img" src={"/whitelogo.png"} alt="logo"
                  style={{ scale: "69%" }}
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
              <Link to="/journal" className="nav-links">
                Journal
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ledger" className="nav-links">
                Ledger
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/eventlog" className="nav-links">
                Event Log
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reports" className="nav-links">
                Financial Reports
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/messages" className="nav-links">
                Messages
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
              <Link to="/user" className="nav-links">
                User
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
