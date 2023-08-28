const Order = require('../../models/order');

module.exports = {
	cart,
	addToCart,
	setItemQtyInCart,
	checkout,
	history
};

// Cart unpaid order
async function cart(req, res) {
	try {
		const cart = await Order.getCart(req.user._id);
		res.status(200).json(cart);
	} catch (error) {
		res.status(200).json({ message: error.message });
	}
}

// Add an item to the cart
async function addToCart(req, res) {
	try {
		const cart = await Order.getCart(req.user._id);
		await cart.addItemToCart(req.params.id);
		res.status(200).json(cart);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

// Update an item's qty in the cart
async function setItemQtyInCart(req, res) {
	try {
		const cart = await Order.getCart(req.user._id);
		await cart.setItemQty(req.body.itemId, req.body.newQty);
		res.status(200).json(cart);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

// Update isPaid property
async function checkout(req, res) {
	try {
		const cart = await Order.getCart(req.user._id);
		cart.isPaid = true;
		await cart.save();
		res.status(200).json(cart);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

// so users paid order history
async function history(req, res) {
	try {
		const orders = await Order.find({ user: req.user._id, isPaid: true })
			.sort('-updateAt')
			.exec();
		res.status(200).json(orders);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}
