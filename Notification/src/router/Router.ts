import { Router } from 'express';
import usersRouter from './NotificationRouter';

const userRoutes = Router();

userRoutes.use('/user', usersRouter);

export default userRoutes;