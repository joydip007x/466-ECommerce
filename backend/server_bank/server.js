const express= require('express');
const app= express();
const db=require('./db');

const UIDRoute = require('./routes/userIDRoute');

app.use(express.json());

app.use('/bankAPI/users',UIDRoute);

app.get("/",(req,res)=>{
    res.send("Hello from the Bank server side");
})

const port= process.env.port || 9000;

app.listen(port, ()=> 'BANK SERVER');