import { ModelStatic } from 'sequelize';
import Match from '../database/models/MatchesModels';
import Team from '../database/models/TeamModel';
import { ITeamMatch } from '../intefaces/ILeaderboard';
import homeService from './utils/homeTeamUtil';
import oredenaMatches from './utils/sort';

export default class LeaderboardService {
  private model: ModelStatic<Match> = Match;

  public async homeTeamsPoints() {
    const home = await this.model.findAll({
      include: [{ model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } }],
      where: { inProgress: false },
    });
    const team = homeService(home as unknown as ITeamMatch[]);
    const result = oredenaMatches(team);
    return result;
  }
}
