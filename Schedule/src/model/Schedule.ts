
import mongose, { Schema } from 'mongoose';

export enum ScheduleStatus {
    Active = 1,
    Deactive = 2,
    Verify = 3,
    NoVerifiy = 4
}

interface ISchedule {
    serviceId: string;
    userId: string;
    address: string;
    status: ScheduleStatus;
    date: Date;
}

interface ScheduleDoc extends mongose.Document {
    serviceId: string;
    userId: string;
    address: string;
    status: ScheduleStatus;
    date: Date;
}

interface ScheduleModelInterface extends mongose.Model<ScheduleDoc> {
    build(attr: ISchedule): any;
}

const schedule = new mongose.Schema({
    serviceId: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    status: {
        type: Object.values(ScheduleStatus),
        require: true
    }
})

schedule.statics.build = (attr: ISchedule) => {
    return new ScheduleModel(attr);
}

const ScheduleModel = mongose.model<ScheduleDoc, ScheduleModelInterface>("Schedule", schedule)

export { ScheduleModel }
