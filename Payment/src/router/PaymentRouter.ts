import express, { Express, Router, NextFunction, Request, Response } from 'express';
import { PaymentModel, PaymentStatus } from '../model/Payment';

const paymentRouter = express.Router();

paymentRouter.post('/Create', async (req: Request, res: Response) => {
    const user = await PaymentModel.build({
        refid: req.body.refid,
        category: req.body.category,
        amount: req.body.amount,
        trackingCode: req.body.trackingCode,
        userId: req.body.userId,
        serviceCataloge: req.body.serviceCataloge,
        date: req.body.date,
        status: PaymentStatus.Pendding
    });
    user.save();
    res.status(200).send({
        status: true,
        message: "Sucess Add Payment"
    })
})


paymentRouter.put('/Update/:id', async (req: Request, res: Response) => {
    const user = await PaymentModel.updateOne({ _id: req.params.id }, {

        $set: {
            refid: req.body.refid,
            category: req.body.category,
            amount: req.body.amount,
            trackingCode: req.body.trackingCode,
            userId: req.body.userId,
            serviceCataloge: req.body.serviceCataloge,
            date: req.body.date,
            status: req.body.status
        }

    });

    res.status(200).send({
        status: true,
        data: user,
        message: "Sucess Add Payment"
    })
})

paymentRouter.delete('/Delete/:id', async (req: Request, res: Response) => {
    await PaymentModel.findByIdAndDelete(req.params.id);
    res.status(200).send({
        status: true,
        message: "Sucess Delete Payment"
    })
})

paymentRouter.get('/Get/:id', async (req: Request, res: Response) => {
    const user = await PaymentModel.findById(req.params.id);
    res.status(200).send({
        status: true,
        data: user,
        message: "Sucess Delete Payment"
    })
})

export default paymentRouter;