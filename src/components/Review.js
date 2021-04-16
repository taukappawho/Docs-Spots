import React, {useEffect, useState} from 'react';
import {Container} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

const Review = props => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorName, setAuthorName] = useState('');

    useEffect(() => {
        axios.get(`http://docs-spots.herokuapp.com/api/reviews/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setContent(res.data.content),
            setAuthorName(res.data.authorName)
        ])
        .catch(error => console.log(error));
    }, [props])

    return (
        <Container>
            <h1>{title}</h1>
            <Container>
                <p>{content}</p>
                <span className="badge badge-secondary p-2 my-1">{authorName}</span>
            </Container>
        </Container>
    )
}

export default Review;