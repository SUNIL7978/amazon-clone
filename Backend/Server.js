import express from "express";
import Product from './Product.js'

const app = express();

app.get("/api/products", async(req,res) =>{
   res.send(Product.products);
})



const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`server at http://localhost:${port}`);
})