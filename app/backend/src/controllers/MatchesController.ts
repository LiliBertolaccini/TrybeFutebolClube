import { Request, Response } from 'express';
import MatchService from '../services/MatchesService';

export default class MatchController {
  constructor(private matchService = new MatchService()) {}

  public findAllMatch = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    if (inProgress === undefined) {
      const result = await this.matchService.findAllMatch();
      return res.status(200).json(result);
    }
    const progress = await this.matchService.findInProgress(inProgress === 'true');
    return res.status(200).json(progress);
  };

  public finishMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.matchService.finishMatch(Number(id));
    return res.status(200).json({ message: 'Finished' });
  };

  public updateMatchInProgress = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this.matchService.updateMatchInProgress(Number(id), homeTeamGoals, awayTeamGoals);
    return res.status(200).json({ message: 'Updated' });
  };
}
