const mongoose = require("mongoose")
const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    size: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountedPrice: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    deliveryDate: {
        type: mongoose.Schema.Types.ObjectId,
    }
})

const orderItemModel = mongoose.model("orderItem", orderItemSchema)
module.exports = orderItemModel;