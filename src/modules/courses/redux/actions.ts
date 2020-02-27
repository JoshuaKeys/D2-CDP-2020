import { CourseModel } from "../../shared/models/Course.model";
import { AuthorModel } from '../models/AuthorModel'
export const LOAD_COURSES = 'LOAD_COURSES';
export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';
export const LOAD_AUTHORS = 'LOAD_AUTHORS';
export const LOAD_AUTHORS_SUCCESS = 'LOAD_AUTHORS_SUCCESS';
export const ADD_COURSE = 'ADD_COURSE';
export const ADD_COURSE_SUCCESS = 'ADD_COURSE_SUCCESS';
export const DELETE_COURSE = 'DELETE_COURSE';
export const DELETE_COURSE_SUCCESS = 'DELETE_COURSE_SUCCESS';
export const UPDATE_COURSE = 'UPDATE_COURSE';
export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';

export interface LoadCoursesAction {
    type: typeof LOAD_COURSES;
}
export interface LoadCoursesSuccessAction {
    type: typeof LOAD_COURSES_SUCCESS;
    payload: CourseModel[]
}
export interface LoadAuthorsAction {
    type: typeof LOAD_AUTHORS;
}
export interface LoadAuthorsSuccessAction {
    type: typeof LOAD_AUTHORS_SUCCESS;
    payload: AuthorModel[];
}
export interface AddCourseAction {
    type: typeof ADD_COURSE;
    payload: CourseModel;
}
export interface AddCourseSuccessAction {
    type: typeof ADD_COURSE_SUCCESS;
    payload: CourseModel;
}
export interface DeleteCourseAction {
    type: typeof DELETE_COURSE;
    payload: CourseModel;
}
export interface DeleteCourseSuccessAction {
    type: typeof DELETE_COURSE_SUCCESS;
    payload: CourseModel
}
export interface UpdateCourseSuccessAction {
    type: typeof UPDATE_COURSE_SUCCESS;
    payload: CourseModel
}
export interface UpdateCourseAction {
    type: typeof UPDATE_COURSE
    payload: CourseModel
}



export function loadCourses() {
    return {
        type: LOAD_COURSES
    }
}
export function addCourse(course: CourseModel) {
    return {
        type: ADD_COURSE,
        payload: course
    }
}
export function addCourseSuccess(course: CourseModel) {
    return {
        type: ADD_COURSE_SUCCESS,
        payload: course
    }
}
export function loadCoursesSuccess(courses: CourseModel[]) {
    return {
        type: LOAD_COURSES_SUCCESS,
        payload: courses
    }
}
export function loadAuthors() {
    return {
        type: LOAD_AUTHORS
    }
}
export function loadAuthorsSucces(authors: AuthorModel[]) {
    return {
        type: LOAD_AUTHORS_SUCCESS,
        payload: authors
    }
}
export function deleteCourse(course: CourseModel) {
    return {
        type: DELETE_COURSE,
        payload: course
    }
}
export function deleteCourseSuccess(course: CourseModel) {
    return {
        type: DELETE_COURSE_SUCCESS,
        payload: course
    }
}
export function updateCourse(course: CourseModel) {
    return {
        type: UPDATE_COURSE,
        payload: course
    }
}
export function updateCourseSuccess(course: CourseModel) {
    return {
        type: UPDATE_COURSE_SUCCESS,
        payload: course
    }
}

export type CoursesActionTypes  = 
    | LoadCoursesAction 
    | LoadCoursesSuccessAction 
    | LoadAuthorsAction 
    | LoadAuthorsSuccessAction 
    | AddCourseAction
    | AddCourseSuccessAction
    | DeleteCourseAction
    | DeleteCourseSuccessAction
    | UpdateCourseAction
    | UpdateCourseSuccessAction;