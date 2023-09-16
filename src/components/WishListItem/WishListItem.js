import styles from './WishListItem.module.scss';

export default function WishListItem({ item, handleAddToOrder, handleRemoveFromWishList, handleSelectItem }) {
    return (
        <div className={styles.WishListItem}>
            <img src={item.img}
                className={styles.img + ' ' + 'flex-ctr-ctr'}
                onClick={() => handleSelectItem(
                    item._id,
                    item.category.name,
                    item.category.department.name
                )} />
            <div className={styles.name}
                onClick={() => handleSelectItem(
                    item._id, 
                    item.category.name,
                    item.category.department.name
                )}>
                {item.name}
            </div>
            <div className={styles.buy}>
                <span>${item.price.toFixed(2)}</span>
                <button className="btn-sm" onClick={() => handleAddToOrder(item._id)}>
                    add to cart
                </button>
                <button className="btn-sm" onClick={() => handleRemoveFromWishList(item._id)}>
                    remove from list
                </button>
            </div>
        </div>
    );
}