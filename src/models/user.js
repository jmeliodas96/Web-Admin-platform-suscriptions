const mongoose = require('mongoose');
const { Schema } = mongoose;

// for insert a new user in BD and validate type data

const UserSchema = new Schema({
    name:{type:String, required: true},
    email:{type:String, required: true},
    password:{type:String, required: true},
    date:{type:Date, default:Date.now}
    
})
// pass a name and schema
module.exports = mongoose.model('User', UserSchema)