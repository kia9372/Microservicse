
import mongose, { Schema } from 'mongoose';

export enum Status {
    Done = 1,
    Cancel = 2
}

interface IServiceCategory {
    serviceName: string;
    description: string;
    metadata: string;
    status: Status;
}

interface ServiceCategoryDoc extends mongose.Document {
    serviceName: string;
    description: string;
    metadata: string;
    status: Status;
}

interface ServiceCategoryModelInterface extends mongose.Model<ServiceCategoryDoc> {
    build(attr: IServiceCategory): any;
}

const serviceCategory = new mongose.Schema({
    serviceName: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    metadata: {
        type: String,
        require: true
    },
    status: {
        type: Object.values(Status),
        require: true
    }
})

serviceCategory.statics.build = (attr: IServiceCategory) => {
    return new ServiceCategoryModel(attr);
}

const ServiceCategoryModel = mongose.model<ServiceCategoryDoc, ServiceCategoryModelInterface>("ServiceCategory", serviceCategory)

export { ServiceCategoryModel }
