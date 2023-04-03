import { Response, Request, NextFunction } from 'express';
// import { ITeam } from 'src/intefaces/ITeam';

// const { name, username, role, email, password }
// const veficaEmail = async (req: Request, res: Response, next: NextFunction) => {
//  const { email } = req.body;

//  if (!email) {
//    return res.status(400).json({ message: 'All fields must be filled"' });
//  }
//  next();
// };

// const veficaPassword = async (req: Request, res: Response, next: NextFunction) => {
//  const { password } = req.body;

//  if (!password) {
//    return res.status(400).json({ message: 'All fields must be filled' });
//  }
//  next();
// };

const verificaLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  next();
};

export default {
  // veficaEmail,
  // veficaPassword,
  verificaLogin,
};
