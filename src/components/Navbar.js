import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Log from './Log';
import './Navbar.css';

function Navbar(){
    if(sessionStorage.token){
        //Printing the navbar contents if the user is logged in
        return (
            <>
              <nav className="navbar">
                    <div className="navbarGroup">
                        {/* Displaying the title of the webpage */}
                        <Link to="/" className="navbarTitle">
                            Doc's Spots
                        </Link>
                        <ul className="nav-menu">
                            {/* Below are the tabs a user can click on */}
                            <li className="nav-item">
                                <Link to="/reviews" className="nav-links" onClick={closeMobileMenu}>
                                    Reviews
                                </Link>
                            </li>
                            <li className="navbarItem">
                                <Link to="/nearby" className="navbarTab">
                                    Nearby
                                </Link>
                            </li>
                            <li className="navbarItem">
                                <Link to="/chat" className="navbarTab" >
                                    Chat
                                </Link>
                            </li>
                            <li className="navbarItem">
                                <Link to="/profile" className="navbarTab" >
                                    Profile
                                </Link>
                            </li>
                            {/* This is the button used to have a user sign in to the webpage */}
                            <li className="navbarItem">
                                <Log/>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
          )
    }
    else{
        //Printing only the login button if the user is logged out on the nav bar
        return (
            <>
            <nav className="navbar">
                    <div className="navbarGroup">
                        {/* Displaying the title of the webpage */}
                        <Link to="/" className="navbarTitle" >
                            Doc's Spots
                        </Link>
                        <ul className="nav-menu">
                            {/* This is the button used to have a user sign in to the webpage */}
                            <li className="navbarItem">
                                <Log className="navbarTab"/>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
};
export default Navbar;