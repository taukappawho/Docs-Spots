//Import CSS styling, React and Link 
import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
      //Div tag used to contain all the contents within the footer
      <div className="footer-container">
          {/* Displaying the title of the website as a link */}
            <div className="docSpotsTitle">
                <Link to="/" className="docSpotsTitleLogo">
                    Doc's Spots
                </Link>
            </div>
            {/* Displaying Towson University as a link to the towson university website */}
            <div className="towson"><a href="https://www.towson.edu">Towson Univeristy</a></div>
            <div className="socialMedia">
                {/* Displaying the twitter logo and when clicked goes to twitter's website */}
                <Link className="media" target=" ">
                <a href="https://twitter.com/"><i className="fab fa-twitter"/></a>
                </Link>
                {/* Displaying the instagram logo and when clicked goes to instagram's website */}
                <Link className="media" target=" ">
                <a href="https://www.instagram.com/"><i className="fab fa-instagram"/></a>
                </Link>
                {/* Displaying the facebook logo and when clicked goes to facebook's website */}
                <Link className="media" target=" ">
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"/></a>
                </Link>
                
            </div>
            {/* Printing the group members of the project */}
            <p>Group Members: Arun Kulkarni, John Richard, Benjamin King, James Naurot, Neal Bhalodia </p>
      </div>
  )
}
export default Footer

