import styles from './ItemDetail.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ItemDetail({
	params,
	item,
	handleAddToOrder,
	handleAddToWishList,
	handleRemoveFromWishList,
	cart,
	wishlist
}) {
	const [inCart, setInCart] = useState(false);
	const [wishListItem, setWishListItem] = useState(false);
	const [filledHeart, setFilledHeart] = useState(false);

	useEffect(function () {
		cart.lineItems.forEach((lineItem) => {
			if (lineItem.item._id === item._id) {
				setInCart(true)
			}
		})
		wishlist.items.forEach((wishItem) => {
			if (wishItem._id === item._id) {
				setWishListItem(true)
			}
		})
	}, []);

	const handleHeartHover = () => {
		setFilledHeart(!filledHeart);
	};

	const handleHeartClick = () => {
		if (!wishListItem) {
			handleAddToWishList(item._id);
			setWishListItem(true);
		} else {
			handleRemoveFromWishList(item._id);
			setWishListItem(false);
		}
	};

	return (
		<div className={styles.ItemDetail}>
			<header>
				<div className={styles.name}>
					{item.name}
					<span
						className={styles.heart}
						onMouseEnter={handleHeartHover}
						onMouseLeave={handleHeartHover}
						onClick={handleHeartClick}
					>
						{filledHeart || wishListItem ? "♥" : "♡"}
					</span>
				</div>
			</header>
			<aside>
				<img src={item.img} className={styles.img} />
				{/* <div>
					<Link
						to={`/home/${params.depName}/${params.catName}/items`}
					>
						BACK
					</Link>
				</div> */}
			</aside>
			<main>
				<div className={styles.category}>{params.catName}</div>
				<div className={styles.details}>{item.details}</div>
				<div className={styles.price}>${item.price}</div>
				<div className={styles.buy}>
					{inCart ? (
						<button className={styles.btnDisabled}>IN CART</button>
					) : (
						<button className={styles.btnBuy} onClick={() => {
							handleAddToOrder(item._id)
							setInCart(true)
						}}>
							ADD TO CART
						</button>
					)}
				</div>
			</main>
		</div>
	);
}