const mongoose = require('mongoose');
require('mongoose-type-url');
var arrayValidator = require('mongoose-array-validator');

const projectSchema = new mongoose.Schema({
    featured:Boolean,
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    tools:[{
        type:String,
        minItems:2,
        maxItems:6,
        uniqueItems:{
            value:true
        }
        
    }],
    gitHubLink:mongoose.SchemaTypes.Url,
    demoLink:mongoose.SchemaTypes.Url
    ,
    alignment:{
        type:String,
        required:true
    },
    image:{
        data:Buffer,
        contentType:String
    }

})

// function arrayLimit(val){
//     return val.length >=6;
// }
projectSchema.plugin(arrayValidator);
module.exports = mongoose.model('Project', projectSchema)