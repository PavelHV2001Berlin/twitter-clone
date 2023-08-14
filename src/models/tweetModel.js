import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    userId:{
        type: String,
        ref: "users",
        required: true,
    },
    tweetContent:{
        type: String,
        required: true,
    },
    numberOfLikes:{
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: ()=> Date.now(),
    },
})

const Tweet = mongoose.models.tweets || mongoose.model("tweets", tweetSchema);

export default Tweet;