import { Router } from 'express';
import UserController from '../controllers/UserController';
import validadeLogin from '../middleware/validadeLogin';
import validadeAuthToken from '../middleware/validadeAuthToken';

const userController = new UserController();

const router = Router();

router.post('/', validadeLogin.verificaLogin, userController.findOneLogin);
router.get('/role', validadeAuthToken, userController.findOneRole);

export default router;
