import { combineReducers } from 'redux';
import { authReducer } from '../../modules/auth-module/redux/reducer';
import { coursesReducer } from '../../modules/courses/redux/reducer';
export default combineReducers({auth: authReducer, courses: coursesReducer})