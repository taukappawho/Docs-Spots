import React, {useState, useEffect} from 'react'
import Image from '../Image';
import {Button,Container,Input,Row,Col,Form} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../../App.css';
import axios from 'axios';

function Profile(props){

  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [oldUsername, setOldUsername] = useState('');
  const [oldPhone, setOldPhone] = useState('');
  const user = {
    email: sessionStorage.email,
    username: username,
    phone: phone
  }

  // useEffect(() => {
  // axios.get(`http://localhost:5000/api/users/getByEmail`, user)
  //     .then(res => [
  //       setUsername(res.data.username),
  //       setPhone(res.data.phone),
  //       ])
  //     .catch(error => console.log(error));
  //   })

  const changeOnClick = e => {
    e.preventDefault();

    axios.put(`${process.env.REACT_APP_SERVER_URL}/api/users/update`, user)
        .then(res => console.log(res.data)).then(alert(`Success! User information updated.\nusername: ${username}\nphone: ${phone}`))
        .catch(err => {
            console.log(err);
        })
  }



  return(
    <Container>
      <h1>{sessionStorage.name}'s Profile</h1>
      <Container>
        <Row>
          <Col className='text-center'></Col>
          <Col className='text-center'><Image pic={sessionStorage.image}/></Col>
          <Col className='text-center'></Col>
        </Row>
        <Row>
          <Col className='text-center'></Col>
          <Col className='text-center'>Upload a new photo <Button color="warning" href="https://myaccount.google.com/personal-info" target="_blank" rel="noopener noreferrer" className="btn btn-warning">Upload</Button></Col>
          <Col className='text-center'></Col>
        </Row>
        <Form onSubmit={changeOnClick} encType='multipart/form-data'>
          <Row>
            <Col className='text-right'>Username:</Col>
            <Col className='text-center'><Input placeholder='username' value={username} onChange={e => setUsername(e.target.value)}></Input></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col className='text-right'>Phone:</Col>
            <Col className='text-center'><Input type='tel' placeholder='(###) ###-####' value={phone} onChange={e => setPhone(e.target.value)}></Input></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col className='text-right'></Col>
            <Col className='text-center'><Button type="submit" color="warning">Update Profile</Button></Col>
            <Col></Col>
          </Row>
          
        </Form>
        <Row>
          <Col className='text-center'><Container>Profile related stuff.</Container></Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Profile;