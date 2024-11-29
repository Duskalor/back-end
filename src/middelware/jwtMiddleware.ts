export interface UserRequest extends Request {
  user?: string | object;
}
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const JwtMiddleware = (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.header('authorization');
  const token = authHeader && authHeader.split(' ')[1];
  if (token === undefined) res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token!, process.env.JWT_SECRET!);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};
