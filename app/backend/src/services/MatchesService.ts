import { ModelStatic } from 'sequelize';
import Match from '../database/models/MatchesModels';
import Team from '../database/models/TeamModel';

export default class MatchService {
  private model: ModelStatic<Match> = Match;

  public async findAllMatch(): Promise<Match[]> {
    const result = await this.model.findAll({
      include: [
        { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return result;
  }

  public async findInProgress(inProgress: boolean | undefined): Promise<Match[]> {
    const result = await this.model.findAll({
      include: [
        { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
      where: { inProgress },
    });
    return result;
  }

  public async finishMatch(id: number) {
    const result = await this.model.update(
      { inProgress: false },
      { where: { id } },
    );
    return result;
  }

  public async updateMatchInProgress(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    const result = await this.model.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
    return result;
  }

  public async findIdMatch(id: number) {
    const result = await this.model.findByPk(id);
    return result;
  }

  public async createMatch(
    homeTeamId: number,
    homeTeamGoals: number,
    awayTeamId: number,
    awayTeamGoals: number,
  ) {
    const { id } = await this.model.create({
      homeTeamId,
      homeTeamGoals,
      awayTeamId,
      awayTeamGoals,
      inProgress: true });
    return { id, homeTeamId, homeTeamGoals, awayTeamId, awayTeamGoals, inProgress: true };
  }
}
