import { takeEvery, put } from 'redux-saga/effects';
import { LOAD_COURSES, 
    loadCoursesSuccess, 
    LOAD_AUTHORS, 
    loadAuthorsSucces, 
    ADD_COURSE, 
    AddCourseAction, 
    addCourseSuccess, 
    DELETE_COURSE, 
    DeleteCourseAction, 
    deleteCourseSuccess, 
    UPDATE_COURSE, 
    UpdateCourseAction,
    updateCourseSuccess 
} from './actions';
import { CourseService } from '../services/course.service';
import { HttpClient } from '../../shared/services/httpClient';
import { CourseModel } from '../../shared/models/Course.model';
import { AuthorsService } from '../services/authors.service';
import { AuthorModel } from '../../shared/models/Author.model';

function* loadCoursesSaga() {
    var coursesService = new CourseService(new HttpClient());
    
    const {body} = yield coursesService.getCourses<CourseModel[]>()//.then(({ body }) => {
    yield put(loadCoursesSuccess(body))

}
function* loadAuthorsSaga() {
    var authorsService = new AuthorsService(new HttpClient());
    const {body} = yield authorsService.getAuthors<AuthorModel[]>()
    yield put(loadAuthorsSucces(body))
}
function* addCourseSaga(action: AddCourseAction) {
    var coursesService = new CourseService(new HttpClient());
    const {body} = yield coursesService.addCourse<CourseModel>(action.payload)
    yield put(addCourseSuccess(body as CourseModel))
    yield action.payload.history.push('/home')
}
function* deleteCourseSaga(action: DeleteCourseAction) {
    var coursesService = new CourseService(new HttpClient());
    yield coursesService.deleteCourse<{}>(action.payload)
    yield put(deleteCourseSuccess(action.payload));
}
function* updateCourseSaga(action: UpdateCourseAction) {
    var courseService = new CourseService(new HttpClient())
    yield courseService.updateCourse(action.payload)
    yield put(updateCourseSuccess(action.payload))
}

export function* coursesSaga() {
    yield takeEvery(LOAD_COURSES, loadCoursesSaga);
    yield takeEvery(LOAD_AUTHORS, loadAuthorsSaga);
    yield takeEvery(ADD_COURSE, addCourseSaga);
    yield takeEvery(DELETE_COURSE, deleteCourseSaga)
    yield takeEvery(UPDATE_COURSE, updateCourseSaga)
}