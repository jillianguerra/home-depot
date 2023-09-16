import styles from './OrderListItem.module.scss'

export default function OrderListItem({ order }) {
  console.log(order.lineItems)
  return (
    <div className={styles.OrderListItem}>
      <h2>Order ID: {order.OrderId}</h2>
      <p>Date: {new Date(order.updatedAt).toLocaleDateString()}</p>
      <p>Total: {order.orderTotal}</p>
      <ul>
        {order.lineItems.map(item => (
          <li key={item._id}>
            {item.item.name} - Quantity: {item.qty} - Price: {item.extPrice}
          </li>
        ))}
      </ul>
      <p>Total Items: {order.totalQty}</p>
    </div>
  );
}

