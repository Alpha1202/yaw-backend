import express from 'express';
import socialRoute from './socialRoute';
import userRoute from './user.routes';

const router = express.Router()

router.use('/api/v1/auth', socialRoute);
router.use('/api/v1/users', userRoute)

export default router;