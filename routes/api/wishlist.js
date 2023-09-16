const express = require('express')
const router = express.Router()

const wishlistController = require('../../controllers/api/wishlist')

// Get wishlist by user ID
router.get('/', wishlistController.getWishlist)

// Add an item to the wishlist
router.post('/add/:itemId', wishlistController.addItemToWishlist)

// Remove an item from the wishlist
router.put('/remove/:itemId', wishlistController.removeItemFromWishlist)


module.exports = router
