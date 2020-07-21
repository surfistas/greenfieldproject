const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        unique:true
    },
    price:Number,
    amount : Number,
    types :[String],
    imgUrl: String 
});
 
var product = new mongoose.model("product", productSchema);
 
module.exports = product;
