import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar(){
    //Below handles the click of each tab and the menu feature
  const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else{
            setButton(true)
        }
    };
    useEffect(()=>{
        showButton();
    },[]);
    window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
            <div className="navbarGroup">
                {/* Displaying the title of the webpage */}
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Doc's Spots
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {/* Changing the icon from an x to bars to mimic a menu */}
                    <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    {/* Below are the tabs a user can click on */}
                    <li className="nav-item">
                        <Link to="/nearby" className="nav-links" onClick={closeMobileMenu}>
                            Nearby
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-links" onClick={closeMobileMenu}>
                            Profile
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/chat" className="nav-links" onClick={closeMobileMenu}>
                            Chat
                        </Link>
                    </li>
                    
                    {/* This is the button used to have a user sign in to the webpage */}
                    <li className="nav-item">
                        <Link to="/register_login" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Register/Login
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle="btn--outline">Register/Login</Button>}
            </div>
        </nav>
    </>
  )
};
export default Navbar;