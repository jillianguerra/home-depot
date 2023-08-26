const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose
require('./category')
require('./subItem')


const itemSchema = require('./itemSchema')
module.exports = mongoose.model('Item', itemSchema)