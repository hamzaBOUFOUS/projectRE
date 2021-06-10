import { createReducer } from "reduxsauce";
import {
  GET_LIST_ABSENCES,
  GET_LIST_ABSENCES_SUCCESS,
  GET_LIST_ABSENCES_ERROR,
  DELETE_ABSENCE,
  DELETE_ABSENCE_SUCCESS,
  DELETE_ABSENCE_ERROR
} from "./actions";

const INITIAL_STATE = {
  AbsencesData: { content: [], number: 0, size: 10 },
  AbsencesFilter: {},
  status: null,
  deleteStatus: null,
};

const getListAbsences = (state, action) => ({
  ...state,
  status: "loading",
  AbsencesFilter: action.filter,
});

const getListAbsencesSuccess = (state, action) => ({
  ...state,
  AbsencesData: action.data,
  status: "success",
});

const getListAbsencesError = (state, action) => ({
  ...state,
  status: "error",
});

const deleteAbsence = (state, action) => ({
  ...state,
  deleteStatus: "loading",
});

const deleteAbsenceSuccess = (state, action) => ({
  ...state,
  deleteStatus: "success",
});

const deleteAbsenceError = (state, action) => ({
  ...state,
  deleteStatus: "error",
});

export const AbsencesReducer = createReducer(INITIAL_STATE, {
  [GET_LIST_ABSENCES]: getListAbsences,
  [GET_LIST_ABSENCES_SUCCESS]: getListAbsencesSuccess,
  [GET_LIST_ABSENCES_ERROR]: getListAbsencesError,
  [DELETE_ABSENCE]: deleteAbsence,
  [DELETE_ABSENCE_SUCCESS]: deleteAbsenceSuccess,
  [DELETE_ABSENCE_ERROR]: deleteAbsenceError,
});
