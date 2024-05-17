import { Router} from 'express';
import { userController } from '../controllers/users.controllers';
import {body} from 'express-validator'


const router = Router();

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.delete('/:id' , userController.deleteUserById);

router.post('/' , userController.createUser)

router.put('/:id',userController.updateUserById)

router.get('/:id/tweet',userController.getTweetByUserId)

export default router;