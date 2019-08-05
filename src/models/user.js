const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');
// for insert a new user in BD and validate type data

const UserSchema = new Schema({
    name:{type:String, required: true},
    email:{type:String, required: true},
    telephone:{type:Number, required:true},
    password:{type:String, required: true},
    date:{type:Date, default:Date.now}
});

// encrypt password > async function
UserSchema.methods.encryptPassword = async (password) => {
    // genSalt create a hash > apply 10 times
    const salt = await bcrypt.genSalt(10); 
    const hash = bcrypt.hash(password, salt); 
    return hash;
};   

// make reference to element in schema > password > EMS5
UserSchema.methods.matchPassword = async function (password) {
    // compare password incoming vs password in schema
    return await bcrypt.compare(password, this.password);
};

// pass a name and schema
module.exports = mongoose.model('User', UserSchema)