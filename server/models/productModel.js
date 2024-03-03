const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    imgurl: 
    {
        type: String,
        required: true,
        default:'https://via.placeholder.com/200'
    },
    name: {
        type: String,
        required: [true,'Name Can not be empty'],
    },
    price: {type: Number},
    veg: {type: Boolean},
    discount: {type: Number},
    category: {type: String}

})
const Product = mongoose.model('Product', productSchema);
module.exports = Product;