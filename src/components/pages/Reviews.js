import '../../App.css'
import axios from 'axios';
import Review from '../Review';
import AddReview from '../AddReview';
import {Container} from 'reactstrap';
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
        <h3 align="center">Welcome to the Doc's Spots Reviews Page!</h3>
        <AddReview reviewPosts={reviewPosts}/>
        {reviewPosts.map((review,key) => (
            <>
            <div><Review id={review._id}></Review></div>
            <hr/>
            </>
        ))}
      </Container>
    </Container>
  );
}
export default Reviews;