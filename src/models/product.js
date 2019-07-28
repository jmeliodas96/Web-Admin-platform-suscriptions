const mongoose = require('mongoose');
const { Schema } = mongoose;

// for insert a new product in BD and validate type data
const ProductSchema = new Schema({
    name:{ type: String, required: true },
    description:{ type: String, required: true },
    startdate:{ type: Date, required: true },
    enddate:{ type: Date, required: true},
    date:{ type: Date, default: Date.now}
});

// pass a name and schema
module.exports = mongoose.model('Product', ProductSchema)