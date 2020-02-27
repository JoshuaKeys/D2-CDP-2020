export const CHECK_LOGIN = 'CHECK_LOGIN';
export const NAVIGATE = 'NAVIGATE';
interface CheckLoginAction {
    type: typeof CHECK_LOGIN;
    payload: string;
}

interface NavigateAction {
    type: typeof NAVIGATE;
}

export type CoursesActionTypes  = CheckLoginAction; 

export function checkLogin() {
    return {
        type: CHECK_LOGIN
    }
}
export function NavigateAction(location: string) {
    return {
        type: NAVIGATE,
        payload: location
    }
}
// export function loadCoursesSuccess(courses: CourseModel[]) {
//     return {
//         type: LOAD_COURSES_SUCCESS,
//         payload: courses
//     }
// }