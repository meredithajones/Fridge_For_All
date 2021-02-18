import React, { useContext, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import "./style.css";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
//
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarI() {
  // const { loggedIn } = useContext(AuthContext);
  // console.log(loggedIn);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"> Fridge For All</NavbarBrand>

        <Nav>
          <NavItem>
            <NavLink
              href=""
              className={
                window.location.pathname === "" ? "nav-link active" : "nav-link"
              }
            >
              <LogOutBtn />
            </NavLink>
          </NavItem>
        </Nav>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                href="/Login"
                className={
                  window.location.pathname === "/Login"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/Register"
                className={
                  window.location.pathname === "/Register"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Register
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/Fridge"
                className={
                  window.location.pathname === "/Fridge"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Check The Fridge
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/Locations"
                className={
                  window.location.pathname === "/Locations"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Locations
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink
                href=""
                className={
                  window.location.pathname === ""
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <LogOutBtn />
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    // <nav className="navbar navbar-expand-lg">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/">
    //       Fridge For All
    //     </Link>
    //     <div>
    //       <ul className="navbar-nav">
    //         {/* {loggedIn === false && ( */}
    //           <>
    //         <li className="nav-item">
    //           <Link
    //             to="/Login"
    //             className={
    //               window.location.pathname === "/Login"
    //                 ? "nav-link active"
    //                 : "nav-link"
    //             }
    //           >
    //             Login
    //           </Link>
    //         </li>

    //         <li className="nav-item">
    //           <Link
    //             to="/Register"
    //             className={
    //               window.location.pathname === "/Register"
    //                 ? "nav-link active"
    //                 : "nav-link"
    //             }
    //           >
    //             Register
    //           </Link>
    //         </li>
    //         </>
    //         {/* )} */}

    //         {/* {loggedIn === true && ( */}
    //           <>
    //         <li className="nav-item">
    //           <Link
    //             to="/Fridge"
    //             className={
    //               window.location.pathname === "/Fridge"
    //                 ? "nav-link active"
    //                 : "nav-link"
    //             }
    //           >
    //             Check The Fridge
    //           </Link>
    //         </li>

    //       <Link
    //         to="/Fridge"
    //         className={
    //           window.location.pathname === "/Fridge"
    //             ? "nav-link active"
    //             : "nav-link"
    //         }
    //       >
    //         Check The Fridge
    //       </Link>

    //       <Link
    //         to="/Locations"
    //         className={
    //           window.location.pathname === "/Locations"
    //             ? "nav-link active"
    //             : "nav-link"
    //         }
    //       >
    //         Locations
    //       </Link>

    //         <li className="nav-item">
    //           <Link
    //             to=""
    //             className={
    //               window.location.pathname === ""
    //                 ? "nav-link active"
    //                 : "nav-link"
    //             }
    //           >
    //             <LogOutBtn />
    //           </Link>
    //         </li>
    //         </>
    //         {/* )} */}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default NavbarI;
