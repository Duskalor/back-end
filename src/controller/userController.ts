import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export class UserController {
  constructor(readonly userService: UserService) {}
  async createUser(req: Request, res: Response) {
    const body = req.body;
    console.log(body);
    // const result = await this.userService.createUser(body);
    res.send(body);
  }

  deleteUser(req: Request, res: Response) {
    res.send('delete User');
  }

  updateUser(req: Request, res: Response) {
    res.send('update User');
  }

  async getUsers(req: Request, res: Response) {
    const user = await this.userService.getUsers();
    res.send(user);
  }
  getUsebyId(req: Request, res: Response) {
    res.send('get User by ID');
  }
}
