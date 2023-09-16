const express = require('express')
const router = express.Router()
const orderContoller = require('../../controllers/api/orders')

// GET /api/orders/cart
router.get('/cart', orderContoller.cart)

// GET /api/orders/history
router.get('/history', orderContoller.history)

// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', orderContoller.addToCart)

// POST /api/orders/cart/checkout
router.post('/cart/checkout', orderContoller.checkout)

// PUT /api/orders/cart/qty
router.put('/cart/qty', orderContoller.setItemQtyInCart)

module.exports = router
