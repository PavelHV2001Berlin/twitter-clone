import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please provide an username"],
        unique: true
    },
    displayname:{
        type: String,
        required: [true, "Please provide a display-name"],
        unique: true
    },
    email:{
        type: String,
        required: [true, "Please provide an email"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Please provide a password"]
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: ()=> Date.now(),
    },
    forgotPasswordToken: String,
    forgoPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;