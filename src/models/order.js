// ORM
const mongoose = require('mongoose');
const { Schema } = mongoose;

// for insert a new order in BD and validate type data
const OrderSchema = new Schema({
    quantity:{ type: String, required: true },
    description:{ type: String, required: true },
    date:{ type: Date, default: Date.now}
});

// pass a name and schema
module.exports = mongoose.model('Order', OrderSchema)