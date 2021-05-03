import React from 'react';
import Image from '../Image';
import {Button,Container,Input,Row,Col} from 'reactstrap';
import '../../App.css';
import image from '../john_profile.jpeg';

function Profile(props){
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
          <Col className='text-center'>Upload a new photo <Button color="warning">Upload</Button></Col>
          <Col className='text-center'></Col>
        </Row>
        <Row>
          <Col className='text-right'>Update Username:</Col>
          <Col className='text-center'><Input placeholder='Doc'></Input></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col className='text-right'>Update Phone:</Col>
          <Col className='text-center'><Input placeholder='(410) 767-6500'></Input></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col className='text-center'><Container>Profile related stuff.</Container></Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Profile;