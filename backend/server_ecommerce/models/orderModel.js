const mongoose = require('mongoose');   

const orderSchema= mongoose.Schema({

    name : {type:String, require},
    email:{ type:String, require},
    userid:{ type:String, require},
    orderItems:[],
    shippingAddress:{type :Object},
    orderAmount: {type:Number, require},
    isDelivered:{type:Number, require, default:0 },
    transactionId : {type:String, require}

},{timestamps : true});

const orderModel = mongoose.model('orders', orderSchema);
module.exports = orderModel;