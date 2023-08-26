const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  pokemon: {type: Schema.Types.ObjectId, ref: 'Pokemon'},
  rating: {type: Number, required: true},
  body: {type: String, required: true}
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

module.exports = mongoose.model('Review', reviewSchema)