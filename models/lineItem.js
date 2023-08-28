const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./item');

const lineItemSchema = new Schema(
	{
		qty: { type: Number, default: 1 },
		item: itemSchema
	},
	{
		timeStamps: true,
		toJSON: { virtuals: true }
	}
);

lineItemSchema.virtual('extPrice').get(function () {
	return this.qty * this.item.price;
});

module.exports = mongoose.model('lineItem', lineItemSchema);
