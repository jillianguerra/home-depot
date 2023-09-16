import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as reviewAPI from '../../utilities/reviews-api';
import styles from './ItemDetailPage.module.scss';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import ReviewList from '../../components/ReviewList/ReviewList';
import Modal from '../../components/Modal/Modal';
/* import Modal from '../../components/Modal/Modal';  */

export default function ItemDetailPage({
	user,
	handleAddToOrder,
	handleAddToWishList,
	handleRemoveFromWishList, 
  	cart, 
  	wishlist
}) {
	const [item, setItem] = useState({});
	const [reviews, setReviews] = useState({});
	/* 	const [isModalOpen, setIsModalOpen] = useState(false); */
	const params = useParams();

	useEffect(
		function () {
			async function getItem() {
				const data = await itemsAPI.getById(params.id);
				setItem(data);
				getAllReviews(params.id);
			}
			getItem();
		},
		[params.id]
	);

	async function getAllReviews(itemId) {
		const data = await reviewAPI.getReviews(itemId);
		setReviews(data);
	}
	async function addAReview(itemId, content) {
		await reviewAPI.addReview(itemId, content);
		getAllReviews();
	}
	async function removeReview(itemId) {
		await reviewAPI.deleteReview(itemId);
		getAllReviews();
	}
	/* const openModal = () => {
		setIsModalOpen(true);
		setTimeout(() => {
			closeModal();
		}, 2000);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	}; */

	return (
		<main className={styles.ItemDetailPage}>
			{/* <header>
                <Link to={`/home/${params.depName}/${params.catName}/items`} className="button btn-sm" >back</Link>
            </header> */}
			<main className={styles.ItemDetail}>
				<ItemDetail
					params={params}
					item={item}
					handleAddToOrder={handleAddToOrder}
					handleAddToWishList={handleAddToWishList}
					handleRemoveFromWishList={handleRemoveFromWishList}
         			cart={cart}
          			wishlist={wishlist}
				/>
				{/* <Modal
				isOpen={isModalOpen}
				isClose={closeModal}
				title="CART"
				body="Added to Cart!"
				/> */}
			</main>
			<footer className={styles.footer}>
				<ReviewForm itemId={item._id} addReview={addAReview} user={user} />
				<ReviewList
					reviewData={reviews}
					removeReview={removeReview}
					addReview={addAReview}
					user={user}
				/>
			</footer>
		</main>
	);
}