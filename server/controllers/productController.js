const Product = require('./../models/productModel')
exports.sayHi =  async (req,res) => {
    res.status(200).json({
        status: 'success',
        error:false,
        data:{
            message: 'Hello to the bakend of pokemon app, this place makes it work'
        }
    });
};
