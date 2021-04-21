import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import {Container} from 'reactstrap';
import '../../App.css'
//let socket;
function Chat({location}){
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'localhost:5000'
  useEffect(() => {
    const {name, room} = queryString.parse(location.search);
    var socket = io(ENDPOINT);
    setName(name);
    setRoom(room);
    console.log(socket);
  },[ENDPOINT, location.search]);

  return(
    <h1>Chat</h1>
    // <Container>
    //   <h1>Chat</h1>
    //   <Container>
    //     <p align="center">This website is under construction! Check in later for updates!</p>
    //   </Container>
    // </Container>
  );
}
export default Chat;