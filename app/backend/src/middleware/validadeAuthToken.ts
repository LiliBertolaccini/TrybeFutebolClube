import { Response, Request, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

const verificaAuthToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).json('All fields must be filled');
  }
  const payload = jwt.verify(token, process.env.JWT_SECRET as string);
  (req.body.user = payload);
  next();
};

export default verificaAuthToken;
