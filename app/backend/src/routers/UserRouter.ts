import { Router } from 'express';
import UserController from '../controllers/UserController';
import validadeLogin from '../middleware/validadeLogin';

const userController = new UserController();

const router = Router();

router.post('/', validadeLogin.verificaLogin, userController.findOneLogin);

export default router;
