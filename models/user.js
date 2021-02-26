const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: false,
    } ,
    lastName: {
        type: String,
        lowercase: true,
        trim: true,
        required: false,
    } ,
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true,
    } ,
    password: {
        type: String,
        trim : true,
        min: 8,
        max: 256,
        require: true,
    },
    phone: {
        type: String,
        trim: true,

    } ,
    creationDate: {
        type: Date,
        default: new Date()

    } ,
    role: {
        type: String,
        enum: ['Customer', 'Admin'],
        default: 'Customer'

    } ,
});

var userModel = mongoose.model('user', UserSchema)
module.exports = userModel