import { passwordHasher, signToken } from '../utils';
import models from '../db/models';

const { User } = models;

class UserController {
    static async signUp(req, res) {
        const { email, password } = req.body;
        try {
            const hashedPassword = await passwordHasher(password);
            const registeredUser = await User.findOne({ raw: true, where: { email } });
            if(registeredUser) {
               return res.status(409).json({ message: 'User already exists try signin or retrieving password if forgotten' }); 
            }
            const userData = { email, password: hashedPassword }
            const registerNewUser = await User.create(userData);
            delete registerNewUser.dataValues.password;
            const token = signToken(registerNewUser.dataValues);             
            return res.status(201).json({ message: 'Registration successfull', user: registerNewUser, token });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}
export default UserController;
