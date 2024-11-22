import { Router } from 'express';
import { UserController } from '../controller/userController';
import { UserService } from '../services/userService';

const user = Router();

const userService = new UserService();
const userController = new UserController(userService);

user.get('/', userController.getUsers);
user.post('/create', userController.createUser);
user.delete('/delete/:id', userController.deleteUser);
user.put('/update/:id', userController.updateUser);
user.get('/:id', userController.getUsebyId);

export { user };
