import styles from './WishList.module.scss';
import WishListItem from '../WishListItem/WishListItem';

export default function WishList({ wishlist, handleAddToOrder, handleRemoveFromWishList, handleSelectItem }) {
  const showListItems = () => {
    return wishlist.items.map(listItem =>
      <WishListItem
        item={listItem}
        key={listItem._id}
        handleAddToOrder={handleAddToOrder}
        handleRemoveFromWishList={handleRemoveFromWishList}
        handleSelectItem={handleSelectItem}
      />
    )
  }
  const emptyList = () => (
    <div className={styles.message}>Add some items to your wishlist!</div>
  )

  return (
    <div className={styles.WishList}>
      { 
        wishlist.items && wishlist.items.length ?
        showListItems() : emptyList()
      }
    </div>
  );
}