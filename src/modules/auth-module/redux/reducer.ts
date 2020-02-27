import { AuthModel } from "../../../models/auth.model";
import { AuthActionTypes, USER_LOGGEDIN, USER_LOGGEDOUT } from "./actions";

const initialState: AuthModel = {
    isAuthenticated: false
};
export function authReducer(state=initialState, action: AuthActionTypes): AuthModel {
    switch(action.type) {
        case USER_LOGGEDIN:
            return {
                ...state,
                isAuthenticated: true
            }
        case USER_LOGGEDOUT:
            return {
                ...state,
                isAuthenticated: false
            }
    }
    return state;
}