import { Router} from 'express';
import { userController } from '../controllers/users.controllers';
const router = Router();

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.delete('/:id' , userController.deleteUserById);

router.post('/',userController.createUser)

export default router;