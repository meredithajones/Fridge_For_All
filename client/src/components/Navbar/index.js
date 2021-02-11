import React from "react";
import { Link } from "react-router-dom";
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        FridgeForAll
      </Link>
      <div>
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link
              to="/Fridge"
              className={
                window.location.pathname === "/Fridge"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Fridge
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Locations"
              className={
                window.location.pathname === "/Locations"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Locations
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/About"
              className={
                window.location.pathname === "/About"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
