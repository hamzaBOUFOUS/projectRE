import { createReducer } from "reduxsauce";
import {
  GET_LIST_VACANCES,
  GET_LIST_VACANCES_SUCCESS,
  GET_LIST_VACANCES_ERROR,
  DELETE_VACANCE,
  DELETE_VACANCE_SUCCESS,
  DELETE_VACANCE_ERROR
} from "./actions";

const INITIAL_STATE = {
  VacancesData: { content: [], number: 0, size: 10 },
  VacancesFilter: {},
  status: null,
  deleteStatus: null,
};

const getListVacances = (state, action) => ({
  ...state,
  status: "loading",
  VacancesFilter: action.filter,
});

const getListVacancesSuccess = (state, action) => ({
  ...state,
  VacancesData: action.data,
  status: "success",
});

const getListVacancesError = (state, action) => ({
  ...state,
  status: "error",
});

const deleteVacance = (state, action) => ({
  ...state,
  deleteStatus: "loading",
});

const deleteVacanceSuccess = (state, action) => ({
  ...state,
  deleteStatus: "success",
});

const deleteVacanceError = (state, action) => ({
  ...state,
  deleteStatus: "error",
});

export const VacancesReducer = createReducer(INITIAL_STATE, {
  [GET_LIST_VACANCES]: getListVacances,
  [GET_LIST_VACANCES_SUCCESS]: getListVacancesSuccess,
  [GET_LIST_VACANCES_ERROR]: getListVacancesError,
  [DELETE_VACANCE]: deleteVacance,
  [DELETE_VACANCE_SUCCESS]: deleteVacanceSuccess,
  [DELETE_VACANCE_ERROR]: deleteVacanceError,
});
