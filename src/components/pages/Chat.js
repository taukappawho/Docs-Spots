import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import TextField from '@material-ui/core/TextField';
import {Container} from 'reactstrap';
import '../../App.css'
import '../Chat.css'

//Making the connection to the server
const socket = io('http://localhost:4000');

function Chat({location}){
  //initializing use state to hold empty message and name strings
  const [state, setState] = useState({message: '', name: ''});
  //chat is set to an empty array
  const [chat, setChat] = useState([]);

  //Intilizing the useEffect to populate the chat array
  useEffect(() => {
    socket.on('message', ({name, message}) => {
      setChat([...chat, {name, message}])
    })
  })

  //Populating the useState variable name with the input value from the user
  const text = e => {
    setState({...state, [e.target.name]: e.target.value})
  }

  //Grabbing the data from state and sending that data to the server
  const sendMessage = (e) => {
    e.preventDefault();
    const {name, message} = state
    socket.emit('message', {name, message});
    setState({message: '', name});
  }

  //Using the .map() to quickly traverse throught he chat array and print the data in a readable format using JSX
  const formatChat = () => {
    return chat.map(({name, message}, index) =>(
      <div key={index}>
        <h4>
          {name}: <em>{message}</em>
        </h4>
      </div>
    ))
  }

  //Rendering the webpage
  return(
    <div className="chat">
      <h1 id="title">Send a Chat Below!</h1>
      <form onSubmit={sendMessage}>
        <h3>Send a Message</h3>
        <div>
          <TextField name="name" 
          onChange={e => text(e)} 
          value={state.name} 
          label="Name"/>
        </div>
        <div>
          <TextField name="message" 
          onChange={e => text(e)} 
          value={state.message} 

          label="Message"/>
        </div>
        <button>Send</button>
      </form>
      <div className="formatChat">
        <h3>Chats</h3>
        {formatChat()}
      </div>
    </div>
  );
}
export default Chat;