
import mongose, { Schema } from 'mongoose';

export enum StaffStatus {
    Active = 1,
    Deactive = 2,
    Verify = 3,
    NoVerifiy = 4
}

interface IStaff {
    name: string;
    lastName: string;
    skill: string;
    phoneNumber: string;
    status: StaffStatus;
}

interface StaffDoc extends mongose.Document {
    name: string;
    lastName: string;
    skill: string;
    phoneNumber: string;
    status: StaffStatus;
}

interface StaffModelInterface extends mongose.Model<StaffDoc> {
    build(attr: IStaff): any;
}

const staff = new mongose.Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    skill: {
        type: String,
        require: true
    },
    status: {
        type: Object.values(StaffStatus),
        require: true
    }
})

staff.statics.build = (attr: IStaff) => {
    return new StaffModel(attr);
}

const StaffModel = mongose.model<StaffDoc, StaffModelInterface>("Staff", staff)

export { StaffModel }
