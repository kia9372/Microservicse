import { Router } from 'express';
import usersRouter from './ServiceCategoryRouter';

const userRoutes = Router();

userRoutes.use('/user', usersRouter);

export default userRoutes;