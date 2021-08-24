import { Router } from 'express';
import usersRouter from './PaymentRouter';

const userRoutes = Router();

userRoutes.use('/payment', usersRouter);

export default userRoutes;