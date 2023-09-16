import styles from "./ItemList.module.scss";
import ItemListItem from "../ItemListItem/ItemListItem";

export default function ItemList({
  handleAddToOrder,
  setItemListItems,
  itemListItems,
  handleAddToWishList,
  handleRemoveFromWishList,
  cart, 
  wishlist
}) {
  const items = itemListItems.map(item =>
    <ItemListItem
      key={item._id}
      handleAddToOrder={handleAddToOrder}
      itemListItem={item}
      setItemListItems={setItemListItems}
      itemListItems={itemListItems}
      handleAddToWishList={handleAddToWishList} 
      handleRemoveFromWishList={handleRemoveFromWishList} 
      cart={cart} 
      wishlist={wishlist}
    />
  );

  return (
    <div className={styles.itemList}>
      {items}
    </div>
  );
}