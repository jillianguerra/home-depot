const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema')

const wishlistSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [itemSchema],
})

wishlistSchema.statics.getWishlist = async function (userId) {
    return this.findOneAndUpdate(
        { user: userId }, 
        { user: userId },
        { upsert: true, new: true }
).populate({
    path: 'items',
    populate: {
        path: 'category',
        populate: {
            path: 'department'
        }
    }
}).exec()}

wishlistSchema.methods.addItem = async function (itemId) {
    const wishlist = this
    const item = wishlist.items.find((one) =>
        one._id.equals(itemId)
    )
    if (!item) {
        const newItem = await mongoose.model('Item').findById(itemId)
        wishlist.items.push(newItem)
        return wishlist.save()
    }
}

wishlistSchema.methods.removeItem = function (itemId) {
	const list = this
	const item = list.items.find((one) =>
		one._id.equals(itemId)
        
	)
	if (item) {
        list.items.pull(item)
	}
	return list.save()
}

module.exports = mongoose.model('Wishlist', wishlistSchema)
