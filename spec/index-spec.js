const request=require('request');
const url="http://localhost:3000"
const product=require('../services/product-services');
describe("Validate Product retreival by code",()=>{   
    it("should return product name as Fan",()=>{
        request.get(url+'/products/code'+'/EE', (err,res,body)=>{
              expect(body).toBe('{"productName":"Fan"}');
            }
        )})
    });
  
