import { Response, Request, NextFunction } from 'express';
import { verifyToken } from '../auth/authToken';
import { IPayload } from '../intefaces/IUser';

const verificaAuthToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  if (authorization.length < 16) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  const payload = verifyToken(authorization) as unknown as IPayload;
  req.body.role = payload.payload.role;

  if (!payload) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  next();
};

export default verificaAuthToken;
