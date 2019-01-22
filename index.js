const express=require('express');
const bodyParser=require('body-parser');

const app = express();
const productService=require('./services/product-services');

var port = process.env.PORT || 3000;

app.get('/',(req,res) =>{
  res.send('Started')
});

app.listen(
    port,function(){
        console.log('Server is up and running')
    }
);


//fetch all products from mongo by emp id
app.get('/products',(rq,rs)=>{
    rs.setHeader('content-type','application/json')
    // fetch all products from mongo
    productService.all((err,rows)=>{
        if(err) {rs.end('Error Occured')}
        else{
            rs.end(JSON.stringify(rows))
        }
    })    
});

app.get('/products/code/:code',(rq,rs)=>{
    rs.setHeader('content-type','application/json')
    const code=rq.params.code
    // fetch all products from mongo by code
    
    productService.byCode(code,(err,rows)=>{
        if(err) {rs.end('Error Occured')}
        else{
            rs.end(JSON.stringify(rows))
        }
    })    
});
