import { Router } from 'express';
import Validator from '../middleware/validator';
import UserController from '../controllers/users.controller';

const { signUp } = UserController;
const validator = Validator();

const userRoute = Router();

userRoute.post('/signup', validator, signUp);

export default userRoute;
