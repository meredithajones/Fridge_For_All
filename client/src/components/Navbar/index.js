import { faBreadSlice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Fridge For All
        </Link>
        <div>
          <ul className="navbar-nav">
            {loggedIn === false && (
              <>
            <li className="nav-item">
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
            </li>

            <li className="nav-item">
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
            </li>
            </>
            )}

            {loggedIn === true && (
              <>
            <li className="nav-item">
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

            <li className="nav-item">
              <Link
                to=""
                className={
                  window.location.pathname === ""
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <LogOutBtn />
              </Link>
            </li>
            </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
