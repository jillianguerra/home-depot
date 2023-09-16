import Review from '../Review/Review'
import Stars from '../StaticStars/StaticStars'
import styles from './ReviewList.module.scss'

export default function ReviewList({ reviewData, removeReview, user, updateReview }) {
    const showReviews = () => (
        <main className={styles.ReviewList}>
            <div>{reviewData.count === 1 ? `1 review!` : `${reviewData.count} reviews!`}</div>
            <Stars rating={reviewData.mean} /> 
            {reviewData.reviews.map(review =>
                <Review
                    key={review._id}
                    removeReview={removeReview}
                    updateReview={updateReview}
                    review={review}
                    user={user}
                />)}
        </main>
    )
    const noReviews = () => (
        <main className={styles.ReviewList}>
            <h3>No reviews yet!</h3>
        </main>
    )
    return reviewData && reviewData.mean ? showReviews() : noReviews()
}