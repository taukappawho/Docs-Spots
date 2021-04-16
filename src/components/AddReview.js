import React, {useState} from 'react';
import {Container} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../App.css'
import axios from 'axios';

const AddReview = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorName, setAuthorName] = useState('');

    const changeOnClick = e => {
        e.preventDefault();

        const reviews = {
            title,
            content,
            authorName
        }

        setTitle('');
        setContent('');
        setAuthorName('');

        axios.post('https://docs-spots.herokuapp.com/api/reviews/add', reviews)
            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <Container>
            <h1>Add a New Review</h1>
            <Container>
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
                    <Button type="submit" className="btn btn-primary my-1">Submit Review</Button>
                </Form>
            </Container>
        </Container>
    )
}

export default AddReview;