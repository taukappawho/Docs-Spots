import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Log from './Log';
import './Navbar.css';

function Navbar(){
    //Below handles the click of each tab and the menu feature
  const [click, setClick] = useState(false);

    const menu = () => setClick(false);
    if(sessionStorage.token){
        return (
            <>
              <nav className="navbar">
                    <div className="navbarGroup">
                        {/* Displaying the title of the webpage */}
                        <Link to="/" className="navbarTitle">
                            Doc's Spots
                        </Link>
                       
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            {/* Below are the tabs a user can click on */}
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
        return (
            <>
            <nav className="navbar">
                    <div className="navbarGroup">
                        {/* Displaying the title of the webpage */}
                        <Link to="/" className="navbarTitle" >
                            Doc's Spots
                        </Link>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
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