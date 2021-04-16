import {Button} from './Button';
import './TopSection.css';
import '../App.css';

function TopSection() {
    return (
        //This js file is used to display some of the contents of the homepage.
        //Such as a welcome message and a get started button 
        <div className="top">
            <h1>Welcome to Doc's Spots!</h1>
            <p>Let's get started</p>
            <div className="button">
                {/* <Button className="theButton" 
                buttonStyle="btn--outline" 
                buttonSize="btn--large">
                    START HERE
                </Button> */}
            </div>
        </div>
    )
}
export default TopSection
