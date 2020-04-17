import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesStateModel } from '../models/courses-state.model';

const coursesFeatureSelector = createFeatureSelector<CoursesStateModel>('coursesModule');

export const selectCourses = createSelector(coursesFeatureSelector, (coursesState)=> coursesState ? coursesState.courses : []);
export const selectModalState = createSelector(coursesFeatureSelector, (coursesState)=> coursesState ? coursesState.isModalOpen : false);
