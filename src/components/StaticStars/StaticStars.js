import styles from './StaticStars.module.scss'

export default function Star({ rating }) {
    return (
      <div className={styles.StarStatic}>
        {[...Array(5)].map((star, idx) => {
          idx += 1;
          return (
            <span
              key={`star-static-idx-${idx}`}
              name="static-rating"
              className={idx <= (rating) ? `${styles.on}` : `${styles.off}`}
            >
              &#9733;
            </span>
          )
        })}
      </div>
    )
  }