import { Request, Response } from 'express';
import TeamService from '../services/TeamService';

export default class TeamController {
  constructor(private teamService = new TeamService()) {}

  public findAllTeam = async (req: Request, res: Response) => {
    const result = await this.teamService.findAllTeam();
    return res.status(200).json(result);
  };
}
