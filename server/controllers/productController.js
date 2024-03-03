const Product = require('./../models/productModel')
exports.sayHi =  async (req,res) => {
    res.status(200).json({
        status: 'success',
        error:false,
        data:{
            message: 'Hello to the bakend of foodiee app, this place makes it work'
        }
    });
};
exports.getAllProducts = async (req,res) =>{
    try{
        const products =  await Product.find();
        return res.status(200).json({
            status:'success',
            error:false,
            products
        })
    }
    catch(err){
        return res.status(400).json({
            status:'fail',
            error:true,
            message:err.message
        })
    }
}
exports.searchProducts = async (req,res) =>{
    try{
        const searchTermRegex = new RegExp(req.query.q, 'i');
        const products  = await Product.find({ name: { $regex: searchTermRegex } }).exec();
        
        return res.status(200).json({
            status:'success',
            error:false,
            products
        })
    }
    catch(err){
        return res.status(400).json({
            status:'fail',
            error:true,
            message:err.message
        })
    }
}
