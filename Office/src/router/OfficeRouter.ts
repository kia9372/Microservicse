import express, { Express, Router, NextFunction, Request, Response } from 'express';
import { AuditLogModel } from '../model/AuditLog';

const auditLogRouter = express.Router();

auditLogRouter.post('/Create', async (req: Request, res: Response) => {
    const user = await AuditLogModel.build({
        userId: req.body.userId,
        staffId: req.body.staffId,
        backOfficeUserId: req.body.backOfficeUserId,
        operationId: req.body.operationId,
        date: req.body.date,
        result: req.body.result
    });
    user.save();
    res.status(200).send({
        status: true,
        message: "Sucess Add AuditLog"
    })
})


auditLogRouter.put('/Update/:id', async (req: Request, res: Response) => {
    const user = await AuditLogModel.updateOne({ _id: req.params.id }, {

        $set: {
            userId: req.body.userId,
            staffId: req.body.staffId,
            backOfficeUserId: req.body.backOfficeUserId,
            operationId: req.body.operationId,
            date: req.body.date,
            result: req.body.result
        }

    });

    res.status(200).send({
        status: true,
        data: user,
        message: "Sucess Add AuditLog"
    })
})

auditLogRouter.delete('/Delete/:id', async (req: Request, res: Response) => {
    await AuditLogModel.findByIdAndDelete(req.params.id);
    res.status(200).send({
        status: true,
        message: "Sucess Delete AuditLog"
    })
})

auditLogRouter.get('/Get/:id', async (req: Request, res: Response) => {
    const user = await AuditLogModel.findById(req.params.id);
    res.status(200).send({
        status: true,
        data: user,
        message: "Sucess Delete AuditLog"
    })
})

export default auditLogRouter;