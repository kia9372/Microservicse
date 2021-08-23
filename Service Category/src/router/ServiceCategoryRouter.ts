import express, { Express, Router, NextFunction, Request, Response } from 'express';
import { ServiceCategoryModel, Status } from '../model/ServiceCategoryt';

const serviceCategorysRouter = express.Router();

serviceCategorysRouter.post('/Create', async (req: Request, res: Response) => {
    const serviceCategory = await ServiceCategoryModel.build({
        serviceName: req.body.serviceName,
        description: req.body.description,
        metadata: req.body.metadata,
        status: Status.Done
    });
    serviceCategory.save();
    res.status(200).send({
        status: true,
        message: "Sucess Add ServiceCategory"
    })
})


serviceCategorysRouter.put('/Update/:id', async (req: Request, res: Response) => {
    const serviceCategory = await ServiceCategoryModel.updateOne({ _id: req.params.id }, {

        $set: {
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            status: req.body.status,
            serviceCategoryname: req.body.serviceCategoryname
        }

    });

    res.status(200).send({
        status: true,
        data: serviceCategory,
        message: "Sucess Add ServiceCategory"
    })
})

serviceCategorysRouter.delete('/Delete/:id', async (req: Request, res: Response) => {
    await ServiceCategoryModel.findByIdAndDelete(req.params.id);
    res.status(200).send({
        status: true,
        message: "Sucess Delete ServiceCategory"
    })
})

serviceCategorysRouter.get('/Get/:id', async (req: Request, res: Response) => {
    const serviceCategory = await ServiceCategoryModel.findById(req.params.id);
    res.status(200).send({
        status: true,
        data: serviceCategory,
        message: "Sucess Delete ServiceCategory"
    })
})

export default serviceCategorysRouter;