import styles from './CartDetail.module.scss';
import LineItem from '../../components/LineItem/LineItem'; 

export default function CartDetail({ user, cart, handleChangeQty, handleAddToWishList }) {
  const items = cart.lineItems.map(item => 
    <LineItem
      user={user}
      key={item._id}
      item={item}
      handleChangeQty={handleChangeQty}
      handleAddToWishList={handleAddToWishList}
    />
  )

  return (
    <div className={styles.lineItems}>{items}</div>
  );
}