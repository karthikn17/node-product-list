const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/product',{
    useMongoCLient:true
}).then(
    ()=>{
        console.log("DB connected")
    },err=>{
        console.log("DB Error")
    }
);

const productSchema = mongoose.Schema (
    {
        code: String,
        productName: String
    },{collection:'product'}
);
module.exports = mongoose.model('Product',productSchema)


const productModel= mongoose.model('Product', productSchema);

//fetch all Products
const findAll = (callback)=>{
    productModel.find({},(err,rows)=>{
        callback(err,rows)
    })
}

const findByCode = (code, callback) =>{
    productModel.find({code :code},{code:0,_id:0},(err,rows)=>{
           callback(err,rows)
        })
}

module.exports ={
    all : findAll,
    byCode:findByCode
}
