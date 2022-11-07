import express from "express";
import Product from './Product.js'

const app = express();

app.get("/api/products", async(req,res) =>{
   res.send(Product.products);
})

app.get("/api/products/slug/:slug", async(req,res) =>{
    const product = Product.products.find((x) => x.slug === req.params.slug);
    if(product){
        res.send(product)
    }else{
        res.status(404).send({message:'Product Not Found'});
    }
    
 })


const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`server at http://localhost:${port}`);
})