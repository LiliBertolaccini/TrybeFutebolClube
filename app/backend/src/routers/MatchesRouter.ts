import { Router } from 'express';

import MatchController from '../controllers/MatchesController';

const matchController = new MatchController();

const router = Router();

router.get('/', matchController.findAllMatch);

export default router;
