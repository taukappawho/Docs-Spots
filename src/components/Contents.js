import React from 'react'
import ContentItem from './ContentItem'
import './Contents.css'

function Contents() {
    return (
        <div className="cards">
            <h1>Check out what our site as to offer!</h1>
            <div className="cards_container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <ContentItem 
                        src="pictures/img2.jpg"
                        text="Find out the weather in your area"
                        label="Weather"
                        path="/nearby"
                        />
                        <ContentItem 
                        src="pictures/img_1.jpg"
                        text="Build your profile"
                        label="Profile"
                        path="/profile"
                        />
                        <ContentItem 
                        src="pictures/img_1.jpg"
                        text="Meet your friends"
                        label="Chat"
                        path="/chat"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Contents