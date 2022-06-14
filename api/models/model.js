const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    bodyText:{
        required:true,
        type:String
    },
    url:{
        required:false,
        type:String
    }
})

module.exports = mongoose.model('Data', projectSchema)