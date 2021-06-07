import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getListPostes: ["page", "filter", "size"],
  getListPostesSuccess: ["data"],
  getListPostesError: [],
  deletePoste: ["posteId", "handleClose"],
  deletePosteSuccess: [],
  deletePosteError: [],
  addEditPoste: ["poste", "handleClose"],
  addEditPosteSuccess: [],
  addEditPosteError: [],
});

const {
  GET_LIST_POSTES,
  GET_LIST_POSTES_SUCCESS,
  GET_LIST_POSTES_ERROR,
  DELETE_POSTE,
  DELETE_POSTE_SUCCESS,
  DELETE_POSTE_ERROR,
  ADD_EDIT_POSTE,
  ADD_EDIT_POSTE_SUCCESS,
  ADD_EDIT_POSTE_ERROR,
} = Types;

const {
  getListPostes,
  getListPostesSuccess,
  getListPostesError,
  deletePoste,
  deletePosteSuccess,
  deletePosteError,
  addEditPoste,
  addEditPosteSuccess,
  addEditPosteError,
} = Creators;

export {
  GET_LIST_POSTES,
  GET_LIST_POSTES_SUCCESS,
  GET_LIST_POSTES_ERROR,
  DELETE_POSTE,
  DELETE_POSTE_SUCCESS,
  DELETE_POSTE_ERROR,
  ADD_EDIT_POSTE,
  ADD_EDIT_POSTE_SUCCESS,
  ADD_EDIT_POSTE_ERROR,
  getListPostes,
  getListPostesSuccess,
  getListPostesError,
  deletePoste,
  deletePosteSuccess,
  deletePosteError,
  addEditPoste,
  addEditPosteSuccess,
  addEditPosteError,
};
