import { useNavigate } from 'react-router-dom';
import styles from './WishListPage.module.scss'
import WishList from '../../components/WishList/WishList'

export default function WishlistPage({user, wishlist, handleAddToOrder, handleRemoveFromWishList, handleSelectItem }) {
    const navigate = useNavigate()
    const showUserList = () => (
        <div className={styles.WishListPage}>
            <WishList
                wishlist={wishlist}
                handleSelectItem={handleSelectItem}
                handleAddToOrder={handleAddToOrder}
                handleRemoveFromWishList={handleRemoveFromWishList}
            />
        </div>
    )
    const guestUser = () => (
        <div className={styles.WishListPage}>
            <h3 className={styles.message} onClick={()=> navigate('/auth')}>
                LOGIN or SIGNUP to start a wishlist!
            </h3>
        </div>
    )
    return user && user.isGuest ? guestUser() : showUserList()
}