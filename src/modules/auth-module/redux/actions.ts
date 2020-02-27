import { LoginFormModel } from "../models/login-form.model";

export const CHECK_LOGIN = 'CHECK_LOGIN';
export const USER_LOGGEDIN = 'USER_LOGGEDIN';
export const USER_LOGGEDOUT = 'USER_LOGGEDOUT';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export interface CheckLoginAction {
    type: typeof CHECK_LOGIN;
}
export interface UserLoggedoutAction {
    type: typeof USER_LOGGEDOUT;
}
export interface UserLoggedInAction {
    type: typeof USER_LOGGEDIN;
}
export interface LoginUserAction {
    type: typeof LOGIN_USER;
    payload: LoginFormModel;
}
export interface LogoutUserAction {
    type: typeof LOGOUT_USER;
    payload: any
}
export function checkLogin() {
    return {
        type: CHECK_LOGIN
    }
}

export function userLoggedIn() {
    return {
        type: USER_LOGGEDIN
    }
}
export function logoutUser(history: any) {
    return {
        type: LOGOUT_USER,
        payload: history
    }
}
export function userLoggedout() {
    return {
        type: USER_LOGGEDOUT
    }
}
export function loginUser(loginPayload: LoginFormModel) {
    return {
        type: LOGIN_USER,
        payload: loginPayload
    }
}
export type AuthActionTypes  = | CheckLoginAction | UserLoggedInAction | UserLoggedoutAction | LoginUserAction | LogoutUserAction; 



