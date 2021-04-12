import React, {useState} from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css";
import {Button} from "./Button"

export default function Navbar() {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else { 
            setButton(true);
        }
    };

    window.addEventListener("resize", showButton)

    return (
<>

<nav className="navbar">
   <div className="navbar-container">
       <Link to="/" className="navbar-logo">
       Kenzie Entertainment APP <i className="fab fa-typo3"/>  
       </Link>
       <div className="menu-icon" onClick={handleClick}>
       <i className={click ? "fas fa-times" : "fas fa-bars"}/>
    </div>
    <ul className={click ? "nav-menu active" : "nav-menu"}>
    <li className="nav-item">
        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
        </Link>
    </li>
    <li className="nav-item">
        <Link to="/my-watchlist" className="nav-links" onClick={closeMobileMenu}>
            My Watchlist
        </Link>
    </li>
    <li className="nav-item">
        <Link to="/movies" className="nav-links" onClick={closeMobileMenu}>
            Movies
        </Link>
    </li>
    <li className="nav-item">
        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
            Sign Up
        </Link>
    </li>
    </ul>
    {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
  </div>
</nav>
     
</>
    )
}