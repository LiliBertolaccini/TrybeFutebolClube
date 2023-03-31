import { ModelStatic } from 'sequelize';
import Team from '../database/models/TeamModel';
import { ITeam } from '../intefaces/ITeam';

export default class TeamService {
  private model: ModelStatic<Team> = Team;

  public async findAllTeam(): Promise<ITeam[]> {
    const result = await this.model.findAll();
    return result;
  }
}
