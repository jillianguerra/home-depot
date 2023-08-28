const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wishlistSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
})

module.exports = mongoose.model('Wishlist', wishlistSchema);