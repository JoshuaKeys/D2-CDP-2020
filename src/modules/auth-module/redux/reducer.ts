import { AuthActionTypes, USER_LOGGEDIN, USER_LOGGEDOUT } from "./actions";
import {fromJS, merge } from 'immutable';
import { AppState } from "../../../models/app-state.model";
import { AuthModel } from "../../../models/auth.model";
import { createSelector } from 'reselect';

const appState = (state: AppState)=> state;
export const authStateSelector = createSelector(appState, appState=> appState.auth)
const initialState: AuthModel = fromJS({
    isAuthenticated: false
});
export function authReducer(state=initialState, action: AuthActionTypes): AuthModel {
    switch(action.type) {
        case USER_LOGGEDIN:
            return merge(state, {isAuthenticated: true})
        case USER_LOGGEDOUT:
            return merge(state, {isAuthenticated: false})
    }
    return state;
}