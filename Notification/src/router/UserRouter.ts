import express, { Express, Router, NextFunction, Request, Response } from 'express';
import { UserModel, UserStatus } from './../model/User';

const usersRouter = express.Router();

usersRouter.post('/Create', async (req: Request, res: Response) => {
    const user = await UserModel.build({
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        status: UserStatus.NoVerifiy,
        username: req.body.username
    });
    user.save();
    res.status(200).send({
        status: true,
        message: "Sucess Add User"
    })
})


usersRouter.put('/Update/:id', async (req: Request, res: Response) => {
    const user = await UserModel.updateOne({ _id: req.params.id }, {

        $set: {
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            status: req.body.status,
            username: req.body.username
        }

    });

    res.status(200).send({
        status: true,
        data: user,
        message: "Sucess Add User"
    })
})

usersRouter.delete('/Delete/:id', async (req: Request, res: Response) => {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).send({
        status: true,
        message: "Sucess Delete User"
    })
})

usersRouter.get('/Get/:id', async (req: Request, res: Response) => {
    const user = await UserModel.findById(req.params.id);
    res.status(200).send({
        status: true,
        data: user,
        message: "Sucess Delete User"
    })
})

export default usersRouter;