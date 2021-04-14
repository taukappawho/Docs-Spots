import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Log from './Log';
import Logout from './Logout';
import verifyId from './verifyId';
import './Navbar.css';

function Navbar(){
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
    if(verifyId()){
        return (
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Doc's Spots <i className="fas fa-university"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
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
                        <li className="nav-item">
                            <Logout/>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
    else{
        return (
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Doc's Spots <i className="fas fa-university"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Log/>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
};
export default Navbar;