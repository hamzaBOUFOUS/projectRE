import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getListVacances: ["page", "filter", "size"],
  getListVacancesSuccess: ["data"],
  getListVacancesError: [],
  deleteVacance: ["vacanceId", "handleClose"],
  deleteVacanceSuccess: [],
  deleteVacanceError: [],
  addEditVacance: ["vacance", "handleClose"],
  addEditVacanceSuccess: [],
  addEditVacanceError: [],
});

const {
  GET_LIST_VACANCES,
  GET_LIST_VACANCES_SUCCESS,
  GET_LIST_VACANCES_ERROR,
  DELETE_VACANCE,
  DELETE_VACANCE_SUCCESS,
  DELETE_VACANCE_ERROR,
  ADD_EDIT_VACANCE,
  ADD_EDIT_VACANCE_SUCCESS,
  ADD_EDIT_VACANCE_ERROR,
} = Types;

const {
  getListVacances,
  getListVacancesSuccess,
  getListVacancesError,
  deleteVacance,
  deleteVacanceSuccess,
  deleteVacanceError,
  addEditVacance,
  addEditVacanceSuccess,
  addEditVacanceError,
} = Creators;

export {
  GET_LIST_VACANCES,
  GET_LIST_VACANCES_SUCCESS,
  GET_LIST_VACANCES_ERROR,
  DELETE_VACANCE,
  DELETE_VACANCE_SUCCESS,
  DELETE_VACANCE_ERROR,
  ADD_EDIT_VACANCE,
  ADD_EDIT_VACANCE_SUCCESS,
  ADD_EDIT_VACANCE_ERROR,
  getListVacances,
  getListVacancesSuccess,
  getListVacancesError,
  deleteVacance,
  deleteVacanceSuccess,
  deleteVacanceError,
  addEditVacance,
  addEditVacanceSuccess,
  addEditVacanceError,
};
