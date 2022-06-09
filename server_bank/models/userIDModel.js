const mongoose = require('mongoose')


const schema= mongoose.Schema({

    bankUID: String,
    password : String,
    email :String,
})

const userIDmodel=mongoose.model('uid',schema);
module.exports= userIDmodel;