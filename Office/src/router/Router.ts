import { Router } from 'express';
import usersRouter from './UserRouter';

const userRoutes = Router();

userRoutes.use('/user', usersRouter);

export default userRoutes;