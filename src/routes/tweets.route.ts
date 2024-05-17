import { Router} from 'express';
import { tweetController } from '../controllers/tweets.controller';

const router = Router();


router.get('/:id/tweet',tweetController.getTweetById)

export default router;