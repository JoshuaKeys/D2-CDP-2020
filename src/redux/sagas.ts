import { all } from 'redux-saga/effects';
import { coursesSaga } from '../modules/courses/redux/sagas';
import { authSagas } from '../modules/auth-module/redux/sagas';



export default function* rootSaga() {
    yield all([
        coursesSaga(),
        authSagas(),
    ])
}