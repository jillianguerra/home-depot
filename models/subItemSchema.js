const item = require('./item')
const subItem = require('./subItem')

const Schema = require('mongoose').Schema;

const subItemSchema = new Schema({
    color: {type: String, required: true},
    gallery: [String],
    size: String,
    weight: String,
    amount: String,
    price: {type: Number, required: true}
   }, {
    timestamps: true
   })

module.exports = subItemSchema