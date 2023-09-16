import React from 'react';
import OrderListItem from '../OrderListItem/OrderListItem'; // Import OrderListItem
import styles from './OrderList.module.scss'

export default function OrderList({ orders }) {
  const orderItems = orders.map(order =>
    <OrderListItem
      order={order}
      key={order._id}
    />
  );
  
  return (
    <main className={styles.OrderList}>
      {orderItems.length ?
        orderItems
        :
        <span className={styles.noOrders}>No Previous Orders</span>
      }
    </main>
  );
}