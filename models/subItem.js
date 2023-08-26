const mongoose = require('mongoose');

const subItemSchema = require('./subItemSchema')
module.exports = mongoose.model('SubItem', subItemSchema)