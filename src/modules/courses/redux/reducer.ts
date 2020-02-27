import { 
    CoursesActionTypes, 
    LOAD_COURSES_SUCCESS,
    LOAD_AUTHORS_SUCCESS,
    ADD_COURSE_SUCCESS,
    DELETE_COURSE_SUCCESS,
    UPDATE_COURSE_SUCCESS
} from "./actions";
import { CoursesStateModel } from "../models/CoursesStateModel";
import { CourseModel } from "../../shared/models/Course.model";

const initialState: CoursesStateModel = {
    courses: [],
    authors: []
}
export function coursesReducer(state = initialState, action: CoursesActionTypes) {
    switch (action.type) {
        case LOAD_COURSES_SUCCESS:
            return {
                ...state,
                courses: action.payload
            }
        case LOAD_AUTHORS_SUCCESS:
            return {
                ...state,
                authors: action.payload
            }
        case ADD_COURSE_SUCCESS: {
            let updatedCourses = [...state.courses];
            updatedCourses.push(action.payload);
            return {
                ...state,
                courses: updatedCourses

            }
        }
        case DELETE_COURSE_SUCCESS: {
            let updatedCourses = [...state.courses as CourseModel[]];
            let courseIdx = updatedCourses.findIndex(item => item.id === action.payload.id);
            updatedCourses.splice(courseIdx, 1)
            return {
                ...state,
                courses: updatedCourses
            }
        }
        case UPDATE_COURSE_SUCCESS: {
            const course = action.payload;
            const courses = [...state.courses as CourseModel[]].map(item => {
                if (item.id === course.id) {
                    return course;
                } else {
                    return item;
                }
            })
            return {
                ...state,
                courses
            }
        }
        default:
            return state;
    }
}