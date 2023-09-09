import React, { useEffect, useState } from 'react';
import DynamicStars from './DynamicStars';
import styles from './Review.module.scss';
import * as userService from './users-service';

const Review = ({ review, userReview }) => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    // Fetch the currently authenticated user
    const currentUser = userService.getUser();

    if (currentUser && currentUser.email === review.reviewerEmail) {
      // If the currently authenticated user is the author of the review, set the author state
      setAuthor(currentUser);
    }
  }, [review.reviewerEmail]);

  return (
    <div className={styles.review}>
      <h3>{author ? author.firstName : 'Anonymous'}</h3>
      <p>{review.reviewText}</p>
      <DynamicStars rating={review.rating} />

      {userReview && (
        <div className={styles.userReview}>
          <h4>Your Review:</h4>
          <p>{userReview.reviewText}</p>
          <DynamicStars rating={userReview.rating} />
        </div>
      )}
    </div>
  );
};

export default Review;
