import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Container} from 'reactstrap';
import '../../App.css'
import '../Join.css'

function Join(props){
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return(
        // <Container>
        // <h1>Join</h1>
        // <Container>
        //     <p align="center">This website is under construction! Check in later for updates!</p>
        // </Container>
        // </Container>
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) =>setName(event.target.value)}/></div>
                <div><input placeholder="Room" className="joinInput" type="text" onChange={(event) =>setRoom(event.target.value)}/></div>
                <Link onClick={event => (!name || !room) ? event.preventDeafult() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    );
}
export default Join;