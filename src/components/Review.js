import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {Container,Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const Review = props => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/reviews/${props.id}`)
        .then(res => [
            setTitle(res.data.title),
            setContent(res.data.content),
            setAuthorName(res.data.authorName)
        ])
        .catch(error => console.log(error));
    }, [props])

    return (
        <Container>
            <Container>
                <a onClick={toggle}>{title}</a>
            </Container>
            <Container>
                <span className="badge badge-secondary p-2 my-1">{authorName}</span>
            </Container>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    <h5>{title}</h5>
                    <p className="badge badge-secondary p-2 my-1">{authorName}</p>
                </ModalHeader>
                <ModalBody>
                <p>{content}</p>
                </ModalBody>
            </Modal>
        </Container>
    )
}

export default Review;