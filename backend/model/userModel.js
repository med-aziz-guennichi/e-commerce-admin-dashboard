import mongoose from "mongoose";

//Create table for User
const UserSchema = new mongoose.Schema({

    username: { type: String, required: true, unique: true }, //only one username
    email: { type: String, required: true },
    password: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    image: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false }

}, {
    timestamps: true //for date
});

const User = mongoose.model('User', UserSchema);
export default User;