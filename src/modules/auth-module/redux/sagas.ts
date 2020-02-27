import { takeLatest,  put } from 'redux-saga/effects';
import { userLoggedIn, userLoggedout, LOGIN_USER, CHECK_LOGIN, LoginUserAction, LOGOUT_USER, LogoutUserAction } from './actions';
import { LoginService } from '../services/login.service';
import { HttpClient } from '../../shared/services/httpClient';
import { loadCourses, loadAuthors } from '../../courses/redux/actions';

function* checkLogin() {
    const isAuthenticated = yield localStorage.getItem('user-auth');
    if (isAuthenticated) {
        yield put(userLoggedIn())
        yield put(loadCourses())
        yield put(loadAuthors())
    } else {
        yield put(userLoggedout())
    }
}
function* loginUser(action: LoginUserAction) {
    var loginService = new LoginService(new HttpClient());
    const payload = {...action.payload}
    delete payload.history;
    var response = yield loginService.loginUser<{}>(payload)
    if (response.status === 200) {
        localStorage.setItem('user-auth', 'true');
        yield put(loadCourses())
        yield action.payload.history.push('/home')
    }
}
function* logoutUserSaga(action: LogoutUserAction) {
    localStorage.removeItem('user-auth')
    yield action.payload.push('/')
}
export function* authSagas() {
    yield takeLatest(CHECK_LOGIN, checkLogin);
    yield takeLatest(LOGIN_USER, loginUser);
    yield takeLatest(LOGOUT_USER, logoutUserSaga);
}
