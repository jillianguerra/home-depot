import styles from "./SearchResultsItem.module.scss";
import { useState, useEffect } from "react";
import * as ordersAPI from "../../utilities/orders-api";
import * as reviewsAPI from "../../utilities/reviews-api";
import { useNavigate } from 'react-router-dom';
import Heart from "../Heart/Heart";
import StaticStars from "../StaticStars/StaticStars";

export default function ItemListItem({
    searchResultsItem,
    handleAddToOrder,
    handleAddToWishList,
    handleRemoveFromWishList,
    cart,
    wishlist
}) {
    const [inCart, setInCart] = useState(false);
    const [rating, setRating] = useState(null);
    const [wishListItem, setWishListItem] = useState(false);
    const [filledHeart, setFilledHeart] = useState(false);
    const navigate = useNavigate();

    useEffect(function () {
        async function getRating() {
            const reviews = await reviewsAPI.getReviews(searchResultsItem._id);
            setRating(reviews.mean);
        }
        getRating();
        cart.lineItems.forEach((lineItem) => {
            if (lineItem.item._id === searchResultsItem._id) {
                setInCart(true)
            }
        })
        wishlist.items.forEach((item) => {
            if (item._id === searchResultsItem._id) {
                setWishListItem(true)
            }
        })
    }, []);

    const handleHeartHover = () => {
        setFilledHeart(!filledHeart);
    };

    const handleHeartClick = () => {
        if (!wishListItem) {
            handleAddToWishList(searchResultsItem._id);
            setWishListItem(true);
        } else {
            handleRemoveFromWishList(searchResultsItem._id);
            setWishListItem(false);
        }
    };

    const handleImageClick = () => {
        navigate(`/home/${searchResultsItem.category.department.name}/${searchResultsItem.category.name}/${searchResultsItem._id}`);
    }

    return (
        <div className={styles.App}>
            <div className={styles.searchResultsItem}>
                <div className={styles.heart}>
                    <div
                        onMouseEnter={handleHeartHover}
                        onMouseLeave={handleHeartHover}
                        onClick={handleHeartClick}
                    >
                        {filledHeart || wishListItem ? "♥" : "♡"}
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img
                        className={styles.image}
                        src={searchResultsItem.img.includes('imgur') ? searchResultsItem.img
                            : "https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
                        }
                        onClick={handleImageClick}
                    />
                </div>
                <div className={styles.itemInfoLine1}>
                    <div className={styles.name}>
                        {searchResultsItem.name}
                    </div>
                    <div className={styles.price}>
                        ${searchResultsItem.price}
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
                            handleAddToOrder(searchResultsItem._id);
                            setInCart(true);
                        }}>
                            ADD TO CART
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}