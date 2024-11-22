import { UserDTO } from '../controller/dtos/userDto';
import prisma from '../prisma';

export class UserService {
  async createUser(data: UserDTO) {
    const newData = await prisma.user.create({ data });
    return newData;
  }

  deleteUser() {
    return 'delete User';
  }

  updateUser() {
    return 'update User';
  }

  async getUsers() {
    const users = await prisma.user.findMany();
    return users;
  }
  getUsebyId() {
    return 'get User by ID';
  }
}
