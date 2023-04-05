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
}
