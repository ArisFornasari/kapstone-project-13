// import Signup from "./Signup";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
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
            <img
              src="https://fontmeme.com/permalink/210423/15f191de4ea6a30dd7d5b26cb9880614.png"
              alt="navbar"
            ></img>{" "}
            <i className="fab fa-typo3" />
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
            {/* creating logout button */}
            <li className="nav-item">
              <NavLink
                to="/logout"
                activeStyle={{ color: "yellow" }}
                className="nav-links"
                onClick={logout}
                href="#!"
              >
                Logout
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
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
