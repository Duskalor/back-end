import { Router } from 'express';
import { AuthService } from '../services/authService';
import { AuthController } from '../controller/authControlller';

export const auth = Router();

const authService = new AuthService();
const authController = new AuthController(authService);

auth.post('/login', authController.userLogin);
auth.post('/register', authController.userRegister);
