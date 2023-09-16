import { useState, useEffect } from 'react'
import styles from './OrderPage.module.scss';
import CartDetail from '../../components/CartDetail/CartDetail';
import * as ordersAPI from '../../utilities/orders-api'

export default function OrderPage({ user, handleAddToWishList }) {
  const [cart, setCart] = useState({})
  useEffect(function () {
    async function getCart() {
    const data = await ordersAPI.getCart()
    setCart(data)
  }
  getCart()
}, [])
async function handleCheckout() {
  await ordersAPI.checkout();
  const newCart = await ordersAPI.getCart()
  setCart(newCart)
  navigate('/orders');
}
async function handleChangeQty(itemId, newQty) {
  const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty)
  setCart(updatedCart)
}
  const showOrder = () => (
    <div className={styles.container}>
        <CartDetail
          user={user}
          cart={cart}
          handleChangeQty={handleChangeQty}
          handleAddToWishList={handleAddToWishList}
        />
        <div className={styles.total}>TOTAL: ${cart.orderTotal.toFixed(2)}</div>
        <button className={styles.checkoutBtn} onClick={() => handleCheckout()}>
          CHECKOUT
        </button>
    </div>
  )
  const emptyCart = () => (
    <p>YOUR CART IS EMPTY.</p>
  )

  return (
    <div className={styles.container}>
      <h1>Your Cart</h1>
      {cart.lineItems && cart.lineItems.length ? showOrder() : emptyCart()}
    </div>
  )
}