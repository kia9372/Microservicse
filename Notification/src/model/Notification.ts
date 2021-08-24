
import mongose, { Schema } from 'mongoose';

export enum NotificationStatus {
    Sent = 1,
    Reject = 2,
    Pendding = 3
}

export enum GetWay {
    KavehNegar = 1,
    SmsIr = 2
}

interface INotification {
    reciverNumber: string;
    msg: string;
    gateway: GetWay;
    status: NotificationStatus;
    senderDate: Date;
}

interface NotificationDoc extends mongose.Document {
    reciverNumber: string;
    msg: string;
    gateway: GetWay;
    status: NotificationStatus;
    senderDate: Date;
}

interface NotificationModelInterface extends mongose.Model<NotificationDoc> {
    build(attr: INotification): any;
}

const notification = new mongose.Schema({
    reciverNumber: {
        type: String,
        require: true
    },
    msg: {
        type: String,
        require: true
    },
    gateway: {
        type: Object.values(GetWay),
        require: true
    },
    senderDate: {
        type: Date,
        require: true
    },
    status: {
        type: Object.values(NotificationStatus),
        require: true
    }
})

notification.statics.build = (attr: INotification) => {
    return new NotificationModel(attr);
}

const NotificationModel = mongose.model<NotificationDoc, NotificationModelInterface>("Notification", notification)

export { NotificationModel }
