const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = mongoose.Schema({
    category: {
        type: String,
    }
    ,subcategory: {
        type: String

    }
    ,name: {
        type: String
    }
    ,level: {
        type: Number

    }
    
})

const Content=mongoose.model('Content',contentSchema)
module.exports={Content}