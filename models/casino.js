const mongoose = require('mongoose');

const CasinoShema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    } ,
    affiliationlink: {
        type: String,
        required: true,
    } ,
    description: {
        type: String,
        max: 5000,
        required: false,
    },
    rating: {
        type: Number,
        required: false,
    },
    image: {
        type: String

    },
    
    active: {
        type: Boolean,
        required: true,
        default: true
    }


});

var CasinoModel = mongoose.model('casino', CasinoShema)
module.exports = CasinoModel