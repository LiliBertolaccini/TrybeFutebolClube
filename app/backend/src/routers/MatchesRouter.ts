import { Router } from 'express';

import MatchController from '../controllers/MatchesController';
import verificaAuthToken from '../middleware/validadeAuthToken';

const matchController = new MatchController();

const router = Router();

router.post('/', verificaAuthToken, matchController.createMatch);
router.get('/', matchController.findAllMatch);
router.patch('/:id', verificaAuthToken, matchController.updateMatchInProgress);
router.patch('/:id/finish', verificaAuthToken, matchController.finishMatch);

export default router;
