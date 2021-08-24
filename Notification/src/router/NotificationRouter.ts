import express, { Express, Router, NextFunction, Request, Response } from 'express';
import { NotificationModel, NotificationStatus, GetWay } from '../model/Notification';

const notificationRouter = express.Router();

notificationRouter.post('/Create', async (req: Request, res: Response) => {
    const user = await NotificationModel.build({
        reciverNumber: req.body.reciverNumber,
        msg: req.body.msg,
        gateway: GetWay.KavehNegar,
        status: NotificationStatus.Pendding,
        senderDate: req.body.senderDate
    });
    user.save();
    res.status(200).send({
        status: true,
        message: "Sucess Add Notification"
    })
})


notificationRouter.put('/Update/:id', async (req: Request, res: Response) => {
    const user = await NotificationModel.updateOne({ _id: req.params.id }, {

        $set: {
            reciverNumber: req.body.reciverNumber,
            msg: req.body.msg,
            gateway: req.body.gateway,
            status: req.body.status,
            senderDate: req.body.senderDate
        }

    });

    res.status(200).send({
        status: true,
        data: user,
        message: "Sucess Add Notification"
    })
})

notificationRouter.delete('/Delete/:id', async (req: Request, res: Response) => {
    await NotificationModel.findByIdAndDelete(req.params.id);
    res.status(200).send({
        status: true,
        message: "Sucess Delete Notification"
    })
})

notificationRouter.get('/Get/:id', async (req: Request, res: Response) => {
    const user = await NotificationModel.findById(req.params.id);
    res.status(200).send({
        status: true,
        data: user,
        message: "Sucess Delete Notification"
    })
})

export default notificationRouter;