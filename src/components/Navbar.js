import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";
// import Signup from "./Signup";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Kenzie Entertainment APP <i className="fab fa-typo3" />
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/movies"
                activeStyle={{ color: "yellow" }}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Movies
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/my-watchlist"
                activeStyle={{ color: "yellow" }}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                My Watchlist
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <NavLink
                to="/movies"
                activeStyle={{ color: "yellow" }}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Movies
              </NavLink>
            </li> */}

            <li className="nav-item">
              <NavLink
                to="/signup"
                activeStyle={{ color: "yellow" }}
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign up
              </NavLink>
            </li>
          </ul>
          <NavLink to="/signup">
            {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
          </NavLink>
        </div>
      </nav>
    </>
  );
}
