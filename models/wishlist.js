const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wishlistSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item'}]
})

module.exports = mongoose.model('Wishlist', wishlistSchema)