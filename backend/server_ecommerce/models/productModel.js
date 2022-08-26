const   mongoose  = require("mongoose");

const productSchema = mongoose.Schema({

    name : { type: String },
    varients :[],
    prices : [],
    category : { type: String},
    image :{ type: String},
    description : { type: String}
});

const productModel= mongoose.model('products', productSchema);

module.exports = productModel;