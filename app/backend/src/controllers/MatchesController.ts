import { Request, Response } from 'express';
import MatchService from '../services/MatchesService';
import TeamService from '../services/TeamService';

export default class MatchController {
  constructor(
    private matchService = new MatchService(),
    private teamService = new TeamService(),
  ) {}

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

  public createMatch = async (req: Request, res: Response) => {
    const { homeTeamId, homeTeamGoals, awayTeamId, awayTeamGoals } = req.body;

    if (homeTeamId === awayTeamId) {
      return res.status(422).json(
        { message: 'It is not possible to create a match with two equal teams' },
      );
    }
    const homeTeam = await this.teamService.findOneTeam(homeTeamId);
    const awayTeam = await this.teamService.findOneTeam(awayTeamId);
    if (!homeTeam || !awayTeam) {
      return res.status(404)
        .json({ message: 'There is no team with such id!' });
    }

    const team = await this.matchService
      .createMatch(homeTeamId, homeTeamGoals, awayTeamId, awayTeamGoals);
    return res.status(201).json(team);
  };
}
