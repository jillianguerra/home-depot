const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const lineItemSchema = require('./lineItem');

const orderSchema = new Schema(
	{
		user: { type: Schema.Type.ObjectId, ref: 'User' },
		lineItems: [lineItemSchema],
		isPaid: { type: Boolean, default: false }
	},
	{
		timeStamps: true,
		toJSON: { virtuals: true }
	}
);

orderSchema.virtual('orderTotal').get(function () {
	return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function () {
	return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual('orderId').get(function () {
	return this.id.slice(-6).toUpperCase();
});

orderSchema.static.getCart = function (userId) {
	return this.findOneAndUpdate(
		{ user: userId, isPaid: false },
		{ user: userId },
		{ upsert: true, new: true }
	);
};

orderSchema.methods.addItemToCart = async function (itemId) {
	const cart = this;
	const lineItem = cart.lineItems.find((lineItem) =>
		lineItem.item._id.equals(itemId)
	);
	if (lineItem) {
		lineItem.qty += 1;
	} else {
		const item = await mongoose.model('Item').findById(itemId);
		cart.lineItems.push({ item });
	}
	return cart.save();
};

orderSchema.methods.setItemQty = function (itemId, newQty) {
	const cart = this;
	const lineItem = cart.lineItems.find((lineItem) =>
		lineItem.item._id.equals(itemId)
	);
	if (lineItem && newQty <= 0) {
		lineItem.deleteOne();
	} else if (lineItem) {
		lineItem.qty = newQty;
	}
	return cart.save();
};

module.exports = mongoose.model('order', orderSchema);
