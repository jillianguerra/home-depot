import { useState } from 'react';
import styles from './LineItem.module.scss';

export default function LineItem({ user, item, handleAddToWishlist, handleChangeQty }) {
  const [qty, setQty] = useState(item.qty)
  const handleChange = (e) => {
    setQty(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    handleChangeQty(item.item._id, qty)
  }
  return (
    <div className={styles.lineItem}>
      <div className={styles.leftSide}>
        <div className={styles.itemImage}>
          <img className={styles.image} src={item.item.img} alt={item.item.name} />
        </div>
        <div className={styles.name}>
          <h2>{item.item.name}</h2>
        </div>
      </div>
      <div className={styles.rightSide}>
        <p className={styles.price}>${item.extPrice.toFixed(2)}</p>
        {user.isGuest ? '' : (<p className={styles.wishlist} onClick={() => handleAddToWishlist()}>ADD TO WISH LIST</p>)}
        <form className={styles.quantity} onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.changeQty}>
            <input className={styles.quantityWindow} type='number' value={qty} onChange={(e) => handleChange(e)} />
            <input className={styles.quantityBtn} type='submit' value="CHANGE QUANTITY" />
          </div>
          <button className={styles.quantityBtn} onClick={() => handleChangeQty(item.item._id, 0)}>REMOVE FROM CART</button>
        </form>
      </div>
    </div>
  )
}