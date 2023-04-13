import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  constructor(private leaderboardService = new LeaderboardService()) {}

  public homeTeamsPoints = async (req: Request, res: Response) => {
    const result = await this.leaderboardService.homeTeamsPoints();
    return res.status(200).json(result);
  };
}
