import React from 'react';
import {Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../../App.css'
//import styled from 'styles-components';
//import { Button } from '../Button';
import AddReview from '../AddReview';

const Reviews = ({reviewPosts}) => {
  return(
    <Container>
      <h1>Reviews</h1>
      <Container>
        <p align="center"><h3>Welcome to the Doc's Spots Reviews Page!</h3></p>
        <p><a href='/reviews/add-review' className='btn btn-outline-primary'>Add New Review</a></p>
        {reviewPosts.map((review, key) => (
            <p>
                <Link
                    to={{
                        pathname: `/reviews/${review._id}`
                    }}>
                    <h2>{review.title}</h2>
                </Link>
                <p>{review.content}</p>
                <span className="badge badge-secondary p-2">{review.authorName}</span>
                {/* <div className='row mx-1 my-5'>
                    <div className='col-sm-2'>
                        <a href='/reviews/edit-review' className='btn btn-outline-success'>Edit Review</a>
                    </div>
                    <div className='col-sm-2'>
                        <a href='/reviews/delete-review' className='btn btn-outline-danger'>Delete Review</a>
                    </div>
                </div> */}
                <hr/>
            </p>
        ))}
      </Container>
    </Container>
  );
}
export default Reviews;