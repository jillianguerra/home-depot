import { useState, useEffect } from "react";
import styles from "./SearchResultsPage.module.scss";
import { searchItems } from "../../utilities/items-api";
import * as itemsAPI from "../../utilities/items-api";
import { useParams, useNavigate } from 'react-router-dom';
import ItemListItem from '../../components/ItemListItem/ItemListItem';
import SearchResults from "../../components/SearchResults/SearchResults";

export default function SearchResultsPage({ 
  handleAddToOrder, 
  onSearch, 
  handleAddToWishList, 
  handleRemoveFromWishList, 
  cart, 
  wishlist 
}) {

  const [searchResultsItems, setSearchResultsItems] = useState([]); // State to store search results
  const params = useParams();

  // Function to update search results
  
  async function getSearchResults(searchQuery) {
    const items = await itemsAPI.searchItems(searchQuery);
    setSearchResultsItems(items.items);
  }

  useEffect(() => {
    getSearchResults(params.term);
  },[params.term])

  /* const items = searchResults.map(item => {
    <ItemListItem key={item._id} />
  }) */

  return (
    <div>
      <div className={styles.searchResultsContainer}>
        <h1>SEARCH RESULTS FOR "{params.term}"</h1>
      </div>
      <div className={styles.itemList}>
        {/* {items} */}
        <SearchResults 
          searchResultsItems={searchResultsItems}
          setSearchResultsItems={setSearchResultsItems} 
          handleAddToOrder={handleAddToOrder}
          onSearch={onSearch}
          handleAddToWishList={handleAddToWishList}
          handleRemoveFromWishList={handleRemoveFromWishList}
          cart={cart}
          wishlist={wishlist}
        />
      </div>
    </div>
  );
};