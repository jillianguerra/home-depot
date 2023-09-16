const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
	name: { type: String, required: true },
	sortOrder: Number,
	image: { type: String },
	department: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Department',
		required: true
	}
});

module.exports = mongoose.model('Category', categorySchema);
