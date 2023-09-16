import styles from './Review.module.scss';
import StaticStars from '../StaticStars/StaticStars'

export default function Reviews({ review, removeReview, user }) {

  return (
    <div className={styles.Review}>
      <span className={styles.name}>{review.user.name}: </span>
      <StaticStars rating={review.rating} />
      <div className={styles.body}>{review.body}</div>
      {user._id === review.user._id ?
        (<button onClick={() => removeReview(review.item)}>DELETE</button>)
        : ''}
    </div>
  )
}