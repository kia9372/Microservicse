import express, { Express, Router, NextFunction, Request, Response } from 'express';
import { StaffModel, StaffStatus } from '../model/Staff';

const staffRouter = express.Router();

staffRouter.post('/Create', async (req: Request, res: Response) => {
    const staff = await StaffModel.build({
        name: req.body.name,
        lastName: req.body.lastName,
        skill: req.body.skill,
        phoneNumber: req.body.phoneNumber,
        status: StaffStatus.NoVerifiy
    });
    staff.save();
    res.status(200).send({
        status: true,
        message: "Sucess Add Staff"
    })
})


staffRouter.put('/Update/:id', async (req: Request, res: Response) => {
    const staff = await StaffModel.updateOne({ _id: req.params.id }, {

        $set: {
            name: req.body.name,
            lastName: req.body.lastName,
            skill: req.body.skill,
            phoneNumber: req.body.phoneNumber,
            status:  req.body.status
        }

    });

    res.status(200).send({
        status: true,
        data: staff,
        message: "Sucess Add Staff"
    })
})

staffRouter.delete('/Delete/:id', async (req: Request, res: Response) => {
    await StaffModel.findByIdAndDelete(req.params.id);
    res.status(200).send({
        status: true,
        message: "Sucess Delete Staff"
    })
})

staffRouter.get('/Get/:id', async (req: Request, res: Response) => {
    const staff = await StaffModel.findById(req.params.id);
    res.status(200).send({
        status: true,
        data: staff,
        message: "Sucess Delete Staff"
    })
})

export default staffRouter;