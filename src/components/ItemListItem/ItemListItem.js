import styles from "./ItemListItem.module.scss";
import { useState, useEffect } from "react";
import * as reviewsAPI from "../../utilities/reviews-api";
import { useNavigate, useParams } from 'react-router-dom';
import Heart from "../Heart/Heart";
import StaticStars from "../StaticStars/StaticStars";

export default function ItemListItem({
  itemListItem,
  handleAddToOrder,
  handleAddToWishList,
  handleRemoveFromWishList,
  cart, 
  wishlist
}) {
  const [inCart, setInCart] = useState(false);
  const [rating, setRating] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(function () {
    async function getRating() {
      const reviews = await reviewsAPI.getReviews(itemListItem._id);
      setRating(reviews.mean);
    }
    getRating();
    cart.lineItems.forEach((lineItem) => {
      if (lineItem.item._id === itemListItem._id) {
        setInCart(true)
      }
    })
  }, []);

  const handleImageClick = () => {
    navigate(`/home/${params.depName}/${params.catName}/${itemListItem._id}`);
  }

  return (
    <div className={styles.App}>
      <div className={styles.itemListItem}>
        <div className={styles.heart}>
          <Heart
            handleAddToWishList={handleAddToWishList}
            handleRemoveFromWishList={handleRemoveFromWishList}
            itemListItem={itemListItem} 
            wishlist={wishlist}
          />
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={itemListItem.img.includes('imgur') ? itemListItem.img
              : "https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
            }
            onClick={handleImageClick}
          />
        </div>
        <div className={styles.itemInfoLine1}>
          <div className={styles.name}>
            {itemListItem.name}
          </div>
          <div className={styles.price}>
            ${itemListItem.price}
          </div>
        </div>
        <div className={styles.itemInfoLine2}>
          <div className={styles.rating}>
            <StaticStars rating={rating} />
          </div>
          {inCart ? (
            <button className={styles.btnDisabled}>IN CART</button>
          ) : (
            <button className={styles.btnSm} onClick={() => {
                handleAddToOrder(itemListItem._id);
                setInCart(true);
              }
            }>
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
}