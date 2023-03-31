import { Router } from 'express';
import TeamController from '../controllers/TeamController';

const teamController = new TeamController();

const router = Router();

router.get('/', teamController.findAllTeam);
router.get('/:id', teamController.findOneTeam);

export default router;
