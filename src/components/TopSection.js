import './TopSection.css';
import '../App.css';

function TopSection() {
    if(sessionStorage.token){
        // Printing the contents of the home page if the user is logged in
        return (
            <div className="top">
                <h1>Welcome to Doc's Spots!</h1>
                <p>You've logged in successfully using your Towson account!</p>
            </div>
        )
    }
    else{
        // Printing the contents of the home page if the user is logged out
        return (
            <div className="top">
                <h1>Welcome to Doc's Spots!</h1>
                <p>Log in with your Towson account to get started</p>
            </div>
        )
    }
}
export default TopSection
