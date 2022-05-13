const express = require('express');

const Products= require("./models/productModel");

const db=require('./db')
const app = express();

const ProductsRoute = require('./routes/productRoute')
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Server Miss me "+ port);
})

app.use('/storeAPI/products',ProductsRoute)

const port = process.env.PORT || 8000;

app.listen(port, ()=> "server running on port $port");





{// app.get("/getProd",(req,res)=>{
   
//     Products.find({},(err,docs)=>{
         
//         if(err){
//             console.error(err);return;
//         }
//          else{
//              res.send(docs)
//         }
//     });
// });
}