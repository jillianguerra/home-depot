import { useState } from 'react'
import styles from './DynamicStars.module.scss'

export default function DynamicStar({ formData, handleChange }) {
    // const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    return (
      <div className={styles.Star}>
        {[...Array(5)].map((star, idx) => {
          idx += 1
          return (
            <span
              key={`star-idx-${idx}`}
              name="rating"
              className={idx <= (hover || formData.rating) ? `${styles.on}` : `${styles.off}`}
              onClick={(e) => handleChange(e, idx)}
              onMouseOver={() => setHover(idx)}
              onMouseLeave={() => setHover(formData.rating)}
            >
              &#9733;
            </span>
          )
        })}
      </div>
    )
  }