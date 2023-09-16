/* import styles from './Heart.module.scss'; */
import { useState, useEffect } from "react";

export default function Heart({ handleAddToWishList, handleRemoveFromWishList, itemListItem, searchResultsItem, wishlist }) {
    const [wishListItem, setWishListItem] = useState(false);
    const [filledHeart, setFilledHeart] = useState(false);

    useEffect(function () {
        wishlist.items.forEach((item) => {
            if (item._id === itemListItem._id) {
              setWishListItem(true)
            }
          })
       
      }, []);

    const handleHeartHover = () => {
        setFilledHeart(!filledHeart);
    };

    const handleHeartClick = () => {
        if (!wishListItem) {
            handleAddToWishList(itemListItem._id);
            setWishListItem(true);
        } else {
            handleRemoveFromWishList(itemListItem._id);
            setWishListItem(false);
        }
    };

    return (
        <div
            onMouseEnter={handleHeartHover}
            onMouseLeave={handleHeartHover}
            onClick={handleHeartClick}
        >
            {filledHeart || wishListItem ? "♥" : "♡"}
        </div>
    );
}