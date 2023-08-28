const item = require('./item')
const subItemSchema = require('./subItemSchema')

const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true, unique: true},
  img: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  details: String,
  searchTerms: [String],
  subItems:[subItemSchema],
}, {
  timestamps: true
})



module.exports = itemSchema