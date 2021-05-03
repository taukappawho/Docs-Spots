import '../App.css'
import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {Container} from 'reactstrap';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const AddReview = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const changeOnClick = e => {
        e.preventDefault();
        const reviews = {
            title,
            content,
            authorName
        }
        // setTitle('');
        // setContent('');
        // setAuthorName('');
        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/reviews/add`, reviews)
            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err);
            })
        toggle()
    }

    return (
        <Container>
            <Container>
                <Button className='addReview' color="warning" onClick={toggle}>Add Review</Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Add Review</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={changeOnClick} encType='multipart/form-data'>
                            <FormGroup>
                                <Label htmlFor="authorName">Your Name</Label>
                                <Input value={authorName} onChange={e => setAuthorName(e.target.value)} type="text" className="form-control" placeholder="Your Name Here" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="title" for="title">Title</Label>
                                <Input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" placeholder="Review Title Here" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="content" for="content">Your Review Goes Here:</Label>
                                <Input value={content} onChange={e => setContent(e.target.value)} type="textarea" className="form-control" bsSize='lg'/>
                            </FormGroup>
                            <Button type="submit" color="warning">Submit Review</Button>
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </Container>
        </Container>
    )
}

export default AddReview;