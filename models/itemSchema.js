require('./item')
const Schema = require('mongoose').Schema

const itemSchema = new Schema(
	{
		name: { type: String, required: true },
		img: String,
		category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
		details: String,
		searchTerms: [String],
		color: String,
   		size: String,
    	weight: String,
    	amount: String,
    	price: {type: Number, required: true},
		featured: { type: Boolean, default: false }
	},
	{
		timestamps: true
	}
)

module.exports = itemSchema
