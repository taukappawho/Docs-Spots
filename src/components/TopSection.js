import {Button} from './Button';
import './TopSection.css';
import '../App.css';

function TopSection() {
    if(sessionStorage.token){
        return (
            <div className="top">
                <h1>Welcome to Doc's Spots!</h1>
                <p>You've logged in successfully using your Towson account!</p>
            </div>
        )
    }
    else{
        return (
            <div className="top">
                <h1>Welcome to Doc's Spots!</h1>
                <p>Log in with your Towson account to get started</p>
            </div>
        )
    }
}
export default TopSection
