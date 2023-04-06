import mongoose from "mongoose";

//Create table for Order
const OrderSchema = new mongoose.Schema({

    userId: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    products: { type: Object, required: true },
    total: { type: Number, required: true },
    quantity: {type: Number, required: true}
}, {
    timestamps: true //for date
});

const Order = mongoose.model('Order', OrderSchema);
export default Order;