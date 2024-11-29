import prisma from '../prisma';
import { User } from '@prisma/client';
import { compare, hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
export class AuthService {
  login = async (email: string, password: string) => {
    try {
      const userExist = await prisma.user.findUnique({ where: { email } });
      if (!userExist) {
        throw new Error('User does not exist');
      }
      const passwordMatch = await compare(password, userExist.password);
      if (!passwordMatch) {
        throw new Error('Invalid password');
      }
      const token = jwt.sign({ id: userExist.id }, process.env.JWT_SECRET!);
      const { id, name } = userExist;
      return { token, id, name };
    } catch (error) {
      throw new Error(`Error logging in: ${(error as Error).message}`);
    }
  };

  register = async ({ email, password, name, description }: User) => {
    try {
      const userExist = await prisma.user.findUnique({ where: { email } });
      if (userExist) {
        throw new Error('User already exist');
      }
      const newPassword = await hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: newPassword,
          description,
        },
      });
      return newUser;
    } catch (error) {
      throw new Error(`Error creating user: ${(error as Error).message}`);
    }
  };
}
