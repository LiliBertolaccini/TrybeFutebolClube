import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import { generateToken } from '../auth/authToken';
import UserService from '../services/UserService';
import { ILogin } from '../intefaces/ILogin';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public findOneLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    // const role = req.payload;
    // console.log(role);
    const result = await this.userService.findOneLogin(email);
    const validadeSenha = bcrypt.compareSync(password, result?.password || '');
    if (!validadeSenha) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = generateToken(result as unknown as ILogin);
    return res.status(200).json({ token });
  };

  public findOneRole = async (req: Request, res: Response) => {
    const { role } = req.body;
    const result = await this.userService.findOneRole(role);
    return res.status(200).json({ role: result?.role });
  };
}
