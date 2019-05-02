// Actions
import { AwsAuthActions, AwsAuthActionTypes } from '../_actions/aws.auth.actions';
// Models
import { User } from '../_models/user.model';

export interface AuthState {
    loggedIn: boolean;
    authToken: string;
    user: User;
    isUserLoaded: boolean;
}

export const initialAuthState: AuthState = {
    loggedIn: false,
    authToken: undefined,
    user: undefined,
    isUserLoaded: false
};

export function authReducer(state = initialAuthState, action: AwsAuthActions): AuthState {
    switch (action.type) {
        case AwsAuthActionTypes.Login: {
            const _token: string = action.payload.authToken;
            return {
                loggedIn: true,
                authToken: _token,
                user: undefined,
                isUserLoaded: false
            };
        }

        case AwsAuthActionTypes.Register: {
            const _token: string = action.payload.authToken;
            return {
                loggedIn: true,
                authToken: _token,
                user: undefined,
                isUserLoaded: false
            };
        }

        case AwsAuthActionTypes.Logout:
            return initialAuthState;

        case AwsAuthActionTypes.UserLoaded: {
            const _user: User = action.payload.user;
            return {
                ...state,
                user: _user,
                isUserLoaded: true
            };
        }

        case AwsAuthActionTypes.TestAction: {
            const _string: string = action.payload.test;
            return {
                loggedIn: false,
                authToken: _string,
                user: undefined,
                isUserLoaded: false
            };
        }

        default:
            return state;
    }
}
