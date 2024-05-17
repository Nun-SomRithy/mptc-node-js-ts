import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  dateOfBirth: Date,
  password: String,
  followers: [{ type: mongoose.Types.ObjectId, ref: 'users' }],
  followings: [{ type: mongoose.Types.ObjectId, ref: 'users' }],
  tweets: [{ type: mongoose.Types.ObjectId, ref: 'tweets' }] // Reference to TweetModel
});

const UserModel = mongoose.model('users', userSchema);

export default UserModel;
