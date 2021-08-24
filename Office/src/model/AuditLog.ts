
import mongose, { Schema } from 'mongoose';

export enum AuditLogStatus {
    Active = 1,
    Deactive = 2,
    Verify = 3,
    NoVerifiy = 4
}
//id, userId, staffId, backOfficeUserId, operationId, date, result
interface IAuditLog {
    userId: string;
    staffId: string;
    backOfficeUserId: string;
    operationId: string;
    date: Date;
    result: string;
}

interface AuditLogDoc extends mongose.Document {
    userId: string;
    staffId: string;
    backOfficeUserId: string;
    operationId: string;
    date: Date;
    result: string;

}

interface UserModelInterface extends mongose.Model<AuditLogDoc> {
    build(attr: IAuditLog): any;
}

const auditLog = new mongose.Schema({
    userId: {
        type: String,
        require: true
    },
    staffId: {
        type: String,
        require: true
    },
    backOfficeUserId: {
        type: String,
        require: true
    },
    operationId: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    result: {
        type: String,
        require: true
    }
})

auditLog.statics.build = (attr: IAuditLog) => {
    return new AuditLogModel(attr);
}

const AuditLogModel = mongose.model<AuditLogDoc, UserModelInterface>("AuditLog", auditLog)

export { AuditLogModel }
