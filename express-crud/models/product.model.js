const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    price:{
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})
const Product = mongoose.model('Product', ProductSchema)

module.exports = Product