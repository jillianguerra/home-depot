import styles from "./SearchResults.module.scss";
import SearchResultsItem from "../SearchResultsItem/SearchResultsItem";

export default function SearchResults({
  handleAddToOrder,
  setSearchResultsItems,
  searchResultsItems,
  cart,
  wishlist,
  handleAddToWishList,
  handleRemoveFromWishList
}) {
  const items = searchResultsItems.map(item =>
    <SearchResultsItem
      className={styles.item}
      key={item._id}
      handleAddToOrder={handleAddToOrder}
      searchResultsItem={item}
      setSearchResultsItems={setSearchResultsItems}
      searchResultsItems={searchResultsItems}
      cart={cart}
      wishlist={wishlist}
      handleAddToWishList={handleAddToWishList}
      handleRemoveFromWishList={handleRemoveFromWishList}
    />
  );

  return (
    <div className={styles.searchResults}>
      {items}
    </div>
  );
}