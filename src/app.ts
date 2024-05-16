import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './routes';
import mongoose from 'mongoose';
import { middleware } from './middleware/auth.middleware';

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

mongoose.connect(mongo_url).then(() => {
  app.listen(port);
  console.log("you have Been Login with Database => ", {port});
  
})

// Export Express app
export default app;