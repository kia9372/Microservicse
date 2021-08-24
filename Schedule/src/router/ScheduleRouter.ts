import express, { Express, Router, NextFunction, Request, Response } from 'express';
import { ScheduleModel, ScheduleStatus } from '../model/Schedule';

const scheduleRouter = express.Router();

scheduleRouter.post('/Create', async (req: Request, res: Response) => {
    const user = await ScheduleModel.build({
        serviceId: req.body.serviceId,
        userId: req.body.userId,
        address: req.body.address,
        status: ScheduleStatus.NoVerifiy,
        date: req.body.date
    });
    user.save();
    res.status(200).send({
        status: true,
        message: "Sucess Add Schedule"
    })
})


scheduleRouter.put('/Update/:id', async (req: Request, res: Response) => {
    const user = await ScheduleModel.updateOne({ _id: req.params.id }, {

        $set: {
            serviceId: req.body.serviceId,
            userId: req.body.userId,
            address: req.body.address,
            status: req.body.status,
            date: req.body.date
        }

    });

    res.status(200).send({
        status: true,
        data: user,
        message: "Sucess Add Schedule"
    })
})

scheduleRouter.delete('/Delete/:id', async (req: Request, res: Response) => {
    await ScheduleModel.findByIdAndDelete(req.params.id);
    res.status(200).send({
        status: true,
        message: "Sucess Delete Schedule"
    })
})

scheduleRouter.get('/Get/:id', async (req: Request, res: Response) => {
    const user = await ScheduleModel.findById(req.params.id);
    res.status(200).send({
        status: true,
        data: user,
        message: "Sucess Delete Schedule"
    })
})

export default scheduleRouter;