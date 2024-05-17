// tweetModel.ts

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  byUser: { type: mongoose.Types.ObjectId, ref: 'users' },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const tweetModel = mongoose.model('tweets', tweetSchema);

export default tweetModel;
