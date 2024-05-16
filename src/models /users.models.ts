import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    dateOfBirth: Date,
    password: String,
    followers: [],
    followings: [],
    tweets: []
});

const userModel = mongoose.model("userModel", userSchema);

export default userModel;
