
import mongose, { Schema } from 'mongoose';

export enum UserStatus {
    Active = 1,
    Deactive = 2,
    Verify = 3,
    NoVerifiy = 4
}

interface IUser {
    username: string;
    password: string;
    phoneNumber: string;
    status: UserStatus;
}

interface UserDoc extends mongose.Document {
    username: string;
    password: string;
    phoneNumber: string;
    status: UserStatus;
}

interface UserModelInterface extends mongose.Model<UserDoc> {
    build(attr: IUser): any;
}

const user = new mongose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    status: {
        type: Object.values(UserStatus),
        require: true
    }
})

user.statics.build = (attr: IUser) => {
    return new UserModel(attr);
}

const UserModel = mongose.model<UserDoc, UserModelInterface>("User", user)

export { UserModel }
