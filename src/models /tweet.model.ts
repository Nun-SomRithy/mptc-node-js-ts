import mongoose from "mongoose";

const Schema = mongoose.Schema;
const tweetSchema = new Schema({
   byUser:{ type: mongoose.Types.ObjectId, ref: 'users' },
   text:{type:String,require: true},
   createdAt: {type:Date , require: true}
});

const tweetModel = mongoose.model("tweet", tweetSchema);

export {tweetSchema , tweetModel};
