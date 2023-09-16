const Wishlist = require('../../models/wishlist')
const Item = require('../../models/item')

module.exports = {
    getWishlist,
    addItemToWishlist,
    removeItemFromWishlist
}

async function getWishlist(req, res) {
    try {
        const wishlist = await Wishlist.getWishlist(req.user._id)

        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }

        res.status(200).json(wishlist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function addItemToWishlist(req, res) {
    try {
        const wishlist = await Wishlist.getWishlist(req.user._id)
        await wishlist.addItem(req.params.itemId)
        res.status(200).json(wishlist)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function removeItemFromWishlist(req, res) {
    try {
        const wishlist = await Wishlist.getWishlist(req.user._id)
        await wishlist.removeItem(req.params.itemId)
        res.status(200).json(wishlist)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
