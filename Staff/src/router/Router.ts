import { Router } from 'express';
import staffRouter from './StaffRouter';

const staffRoutes = Router();

staffRoutes.use('/staff', staffRouter);

export default staffRoutes;