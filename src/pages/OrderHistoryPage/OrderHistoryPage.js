import React, { useState, useEffect } from 'react';
import styles from './OrderHistoryPage.module.scss';
import * as ordersAPI from '../../utilities/orders-api'
import OrderList from '../../components/OrderList/OrderList';

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      const data = await ordersAPI.getOrderHistory()
      setOrders(data)
    }
    fetchOrderHistory();
  }, []);
console.log(orders)
  return (
    <div className={styles.container}>
      <h1>Order History</h1>
      {orders && orders.length ? <OrderList orders={orders} /> : <p>NO PREVIOUS ORDERS</p>}
    </div>
  );
}
