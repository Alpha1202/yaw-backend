import { Router } from 'express';
import Validator from '../middleware/validator';
import UserController from '../controllers/users.controller';

const { signUp } = UserController;
const validator = Validator();

const route = Router();

route.post('/signup', validator, signUp);

export default route;
