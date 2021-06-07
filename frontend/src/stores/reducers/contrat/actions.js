import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getListContrats: ["page", "filter", "size"],
  getListContratsSuccess: ["data"],
  getListContratsError: [],
  deleteContrat: ["contratId", "handleClose"],
  deleteContratSuccess: [],
  deleteContratError: [],
  addEditContrat: ["contrat", "handleClose"],
  addEditContratSuccess: [],
  addEditContratError: [],
});

const {
  GET_LIST_CONTRATS,
  GET_LIST_CONTRATS_SUCCESS,
  GET_LIST_CONTRATS_ERROR,
  DELETE_CONTRAT,
  DELETE_CONTRAT_SUCCESS,
  DELETE_CONTRAT_ERROR,
  ADD_EDIT_CONTRAT,
  ADD_EDIT_CONTRAT_SUCCESS,
  ADD_EDIT_CONTRAT_ERROR,
} = Types;

const {
  getListContrats,
  getListContratsSuccess,
  getListContratsError,
  deleteContrat,
  deleteContratSuccess,
  deleteContratError,
  addEditContrat,
  addEditContratSuccess,
  addEditContratError,
} = Creators;

export {
  GET_LIST_CONTRATS,
  GET_LIST_CONTRATS_SUCCESS,
  GET_LIST_CONTRATS_ERROR,
  DELETE_CONTRAT,
  DELETE_CONTRAT_SUCCESS,
  DELETE_CONTRAT_ERROR,
  ADD_EDIT_CONTRAT,
  ADD_EDIT_CONTRAT_SUCCESS,
  ADD_EDIT_CONTRAT_ERROR,
  getListContrats,
  getListContratsSuccess,
  getListContratsError,
  deleteContrat,
  deleteContratSuccess,
  deleteContratError,
  addEditContrat,
  addEditContratSuccess,
  addEditContratError,
};
