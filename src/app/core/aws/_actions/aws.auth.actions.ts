import { Action } from '@ngrx/store';
import { User } from '../_models/user.model';

export enum AwsAuthActionTypes {
    Login = '[Login] Action',
    Logout = '[Logout] Action',
    Register = '[Register] Action',
    UserRequested = '[Request User] Action',
    UserLoaded = '[Load User] Auth API',
    TestAction = '[TestAction] Action'
}

export class Login implements Action {
    readonly type = AwsAuthActionTypes.Login;
    constructor(public payload: { authToken: string }) { }
}

export class Logout implements Action {
    readonly type = AwsAuthActionTypes.Logout;
}

export class Register implements Action {
    readonly type = AwsAuthActionTypes.Register;
    constructor(public payload: { authToken: string }) { }
}


export class UserRequested implements Action {
    readonly type = AwsAuthActionTypes.UserRequested;
}

export class UserLoaded implements Action {
    readonly type = AwsAuthActionTypes.UserLoaded;
    constructor(public payload: { user: User }) { }
}

export class TestAction implements Action {
    readonly type = AwsAuthActionTypes.TestAction;
    constructor(public payload: { test: string}) { }
}



export type AwsAuthActions = Login | Logout | Register | UserRequested | UserLoaded | TestAction;
