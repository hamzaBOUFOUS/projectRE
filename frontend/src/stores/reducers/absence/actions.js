import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getListAbsences: ["page", "filter", "size"],
  getListAbsencesSuccess: ["data"],
  getListAbsencesError: [],
  deleteAbsence: ["absenceId", "handleClose"],
  deleteAbsenceSuccess: [],
  deleteAbsenceError: [],
  addEditAbsence: ["absence", "handleClose"],
  addEditAbsenceSuccess: [],
  addEditAbsenceError: [],
});

const {
  GET_LIST_ABSENCES,
  GET_LIST_ABSENCES_SUCCESS,
  GET_LIST_ABSENCES_ERROR,
  DELETE_ABSENCE,
  DELETE_ABSENCE_SUCCESS,
  DELETE_ABSENCE_ERROR,
  ADD_EDIT_ABSENCE,
  ADD_EDIT_ABSENCE_SUCCESS,
  ADD_EDIT_ABSENCE_ERROR,
} = Types;

const {
  getListAbsences,
  getListAbsencesSuccess,
  getListAbsencesError,
  deleteAbsence,
  deleteAbsenceSuccess,
  deleteAbsenceError,
  addEditAbsence,
  addEditAbsenceSuccess,
  addEditAbsenceError,
} = Creators;

export {
  GET_LIST_ABSENCES,
  GET_LIST_ABSENCES_SUCCESS,
  GET_LIST_ABSENCES_ERROR,
  DELETE_ABSENCE,
  DELETE_ABSENCE_SUCCESS,
  DELETE_ABSENCE_ERROR,
  ADD_EDIT_ABSENCE,
  ADD_EDIT_ABSENCE_SUCCESS,
  ADD_EDIT_ABSENCE_ERROR,
  getListAbsences,
  getListAbsencesSuccess,
  getListAbsencesError,
  deleteAbsence,
  deleteAbsenceSuccess,
  deleteAbsenceError,
  addEditAbsence,
  addEditAbsenceSuccess,
  addEditAbsenceError,
};
