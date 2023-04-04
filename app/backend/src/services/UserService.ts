import { ModelStatic } from 'sequelize';
import User from '../database/models/UsersModel';
import { ILogin } from '../intefaces/ILogin';
import { IUser } from '../intefaces/IUser';

class UserService {
  private model: ModelStatic<User> = User;

  public async findOneLogin(email: string): Promise<ILogin | null> {
    const result = await this.model.findOne({ where: { email } });
    return result;
  }

  public async findOneRole(role: string): Promise<IUser | null> {
    const result = await this.model.findOne({ where: { role } });
    return result;
  }
}

export default UserService;
