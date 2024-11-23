import { Prisma } from '@prisma/client';
import prisma from '../prisma';

export class UserService {
  async createUser(data: Prisma.UserCreateInput) {
    try {
      const newData = await prisma.user.create({
        data,
      });
      return newData;
    } catch (error) {
      throw new Error(`Error creating user: ${(error as Error).message}`);
    }
  }

  async deleteUser(id: string) {
    try {
      await prisma.user.delete({ where: { id } });
      return 'User deleted successfully';
    } catch (error) {
      throw new Error(`Error deleting user: ${(error as Error).message}`);
    }
  }

  async updateUser(id: string, data: Prisma.UserUpdateInput) {
    try {
      const updatedUser = await prisma.user.update({
        where: { id },
        data,
      });
      return updatedUser;
    } catch (error) {
      throw new Error(`Error updating user: ${(error as Error).message}`);
    }
  }

  async getUsers() {
    try {
      return await prisma.user.findMany({ include: { videos: true } });
    } catch (error) {
      throw new Error(`Error fetching users: ${(error as Error).message}`);
    }
  }

  async getUserById(id: string) {
    try {
      return await prisma.user.findUnique({
        where: { id },
        include: { videos: true },
      });
    } catch (error) {
      throw new Error(`Error fetching user by ID: ${(error as Error).message}`);
    }
  }
}
