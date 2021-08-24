
import mongose, { Schema } from 'mongoose';

export enum PaymentStatus {
    Cancel = 1,
    Done = 2,
    Pendding = 3
}

interface IPayment {
    refid: string;
    category: string;
    amount: string;
    trackingCode: string;
    userId: string;
    serviceCataloge: string;
    date: Date;
    status: PaymentStatus;
}

interface PaymentDoc extends mongose.Document {
    refId: string;
    category: string;
    amount: string;
    trackingCode: string;
    userId: string;
    serviceCataloge: string;
    date: Date;
    status: PaymentStatus;
}

interface PaymentModelInterface extends mongose.Model<PaymentDoc> {
    build(attr: IPayment): any;
}

const payment = new mongose.Schema({
    refId: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    amount: {
        type: String,
        require: true
    },
    trackingCode: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    },
    serviceCataloge: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    status: {
        type: Object.values(PaymentStatus),
        require: true
    }
})

payment.statics.build = (attr: IPayment) => {
    return new PaymentModel(attr);
}

const PaymentModel = mongose.model<PaymentDoc, PaymentModelInterface>("Payment", payment)

export { PaymentModel }
