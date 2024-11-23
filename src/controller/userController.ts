import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export class UserController {
  constructor(readonly userService: UserService) {}

  getUsers = async (req: Request, res: Response) => {
    try {
      const users = await this.userService.getUsers();
      res.send(users);
    } catch (error) {
      res.status(500).send({ error: (error as Error).message });
    }
  };

  createUser = async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const result = await this.userService.createUser(body);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: (error as Error).message });
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await this.userService.deleteUser(id);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: (error as Error).message });
    }
  };

  updateUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const result = await this.userService.updateUser(id, body);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: (error as Error).message });
    }
  };

  getUserById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await this.userService.getUserById(id);
      res.send(user);
    } catch (error) {
      res.status(500).send({ error: (error as Error).message });
    }
  };
}
