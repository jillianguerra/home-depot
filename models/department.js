const mongoose = require('mongoose')
const Schema = mongoose.Schema

const departmentSchema = new Schema({
    name: { type: String, required: true },
    categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
})

module.exports = mongoose.model('Department', departmentSchema);