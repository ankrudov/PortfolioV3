const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    bodyText: {
        required: true,
        type: String
    },
    language:{
        required:true,
        type: String
    }
})

module.exports = mongoose.model('About', aboutSchema)