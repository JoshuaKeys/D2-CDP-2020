import { createReducer } from "@ngrx/store";
import { AppStateModel } from '../models/app-state.model';

const initialState: AppStateModel = {};
const _appReducer = createReducer(initialState)

export function appReducer(state, action) {
  return _appReducer(state, action);
}
