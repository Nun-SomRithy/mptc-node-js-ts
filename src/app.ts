import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './routes';
import mongoose from 'mongoose';
import { middleware } from './middleware/auth.middleware';
import { userModel } from './models /users.models';
import { tweetModel } from './models /tweet.model';

dotenv.config();
const app = express();
const port = process.env['APP_PORT'] || 3000; 
const env = process.env['APP_ENV'] || 'dev'; 
const mongo_url = process.env['MONGO_URL'] || 'MONGO_URL';


// Express configuration
app.use(cors());
app.use(helmet()); 
app.use(morgan(env));
app.use(express.json());
// Use routes
app.use('/api', middleware.auth, router);


async function  createTweet(){
  const user = await userModel.findById('6646c527a49a273799859ef2')
  const newTweet = await new tweetModel({
    byUser: user?._id,
    text: "Hello papa",
    createdAt: new Date()
  })

  newTweet.save().then(result =>{
    console.log(result);
    
  })  
}

mongoose.connect(mongo_url).then(() => {
  app.listen(port);
  console.log("you have Been Login with Database => ", {port});
  
})


// Export Express app
export default app;