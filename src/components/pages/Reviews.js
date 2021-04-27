import '../../App.css'
import axios from 'axios';
import {Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import Review from '../Review';
import AddReview from '../AddReview';
import React, {useState,useEffect} from 'react';

const Reviews = () => {
  const [reviewPosts, setReviewPosts] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/reviews`)
    .then(res => setReviewPosts(res.data))
    .catch(error => console.log(error));
  });
  return(
    <Container>
      <h1>Reviews</h1>
      <Container>
        <p align="center"><h3>Welcome to the Doc's Spots Reviews Page!</h3></p>
        <AddReview reviewPosts={reviewPosts}/>
        {reviewPosts.map((review) => (
            <p>
              <Review id={review._id}></Review>
              <hr/>
            </p>
        ))}
      </Container>
    </Container>
  );
}
export default Reviews;