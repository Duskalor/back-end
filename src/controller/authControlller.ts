import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  userLogin = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const result = await this.authService.login(email, password);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: (error as Error).message });
    }
  };
  userRegister = async (req: Request, res: Response) => {
    try {
      const body = req.body;

      const result = await this.authService.register(body);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: (error as Error).message });
    }
  };
}
