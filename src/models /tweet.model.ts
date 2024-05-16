import mongoose from "mongoose";
import userModel from "./users.models";

const Schema = mongoose.Schema;
const tweetSchema = new Schema({
   text:{type:String,require: true},
   createdAt: {type:Date , require: true},
   byUser:{ userModel }
});

const tweetModel = mongoose.model("tweetModel", tweetSchema);

export default tweetSchema;
