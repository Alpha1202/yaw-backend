import jwt from 'jsonwebtoken';;
import bcrypt from 'bcrypt';

export const passwordHasher = (password, salt = 10) => {
    return bcrypt.hash(password, salt);
}

export const signToken = userInfo => {
    return jwt.sign(userInfo, process.env.SECRET_KEY, { expiresIn: '24h' });
}
