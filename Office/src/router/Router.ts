import { Router } from 'express';
import usersRouter from './OfficeRouter';

const userRoutes = Router();

userRoutes.use('/office', usersRouter);

export default userRoutes;