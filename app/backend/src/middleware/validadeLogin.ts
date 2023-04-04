import { Response, Request, NextFunction } from 'express';

// const verificaEmail = async (req: Request, res: Response, next: NextFunction) => {
//  const { email } = req.body;

//  if (!email) {
//    return res.status(400).json({ message: 'All fields must be filled"' });
//  }
//  next();
// };

// const verificaPassword = async (req: Request, res: Response, next: NextFunction) => {
//  const { password } = req.body;

//  if (!password) {
//    return res.status(400).json({ message: 'All fields must be filled' });
//  }
//  if (typeof password !== 'string') {
//    return res.status(401).json({ message: '"password" must be a string' });
//  }
//  if (password.length < 6) {
//    return res.status(401).json({ message: '"password" length must be at least 6 characters long' });
//  }
//  next();
// };

const verificaLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (password.length < 6) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  const regex = /\S+@\S+\.\S+/;
  if (!regex.test(email)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
};

export default {
  // verificaEmail,
  // verificaPassword,
  verificaLogin,
};
