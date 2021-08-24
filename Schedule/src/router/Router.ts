import { Router } from 'express';
import usersRouter from './ScheduleRouter';

const userRoutes = Router();

userRoutes.use('/schedule', usersRouter);

export default userRoutes;