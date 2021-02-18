import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import "./style.css";
import LogOutBtn from "../LogOutBtn/LogOutBtn";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        Fridge For All
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          {/* {loggedIn === false && (
              <> */}

          <Link
            to="/Login"
            className={
              window.location.pathname === "/Login"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Login
          </Link>

          <Link
            to="/Register"
            className={
              window.location.pathname === "/Register"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Register
          </Link>

          {/* </>
            )} */}

          {/* {loggedIn === true && (
              <> */}

          <Link
            to="/Fridge"
            className={
              window.location.pathname === "/Fridge"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Check The Fridge
          </Link>

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

          <Link
            to=""
            className={
              window.location.pathname === "" ? "nav-link active" : "nav-link"
            }
          >
            <LogOutBtn />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
