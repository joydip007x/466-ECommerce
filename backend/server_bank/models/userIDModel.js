const mongoose = require('mongoose');


const schema= mongoose.Schema({
    bankUID: String,
    password : String,
    email :String,
    bdt : {type: Number,default:100000000}
});

const userIDmodel=mongoose.model('uid',schema);
module.exports= userIDmodel;