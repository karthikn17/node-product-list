const product=require('../services/product-services');
describe("test",()=>{   
    it("test it:",()=>{
      const test1=product.all.code[2];
       const mockTest='EE';
       console.log(test1);
       expect(test1).toBe(mockTest)
    })
})