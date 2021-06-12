import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getListFormations: ["page", "filter", "size"],
  getListFormationsSuccess: ["data"],
  getListFormationsError: [],
  deleteFormation: ["formationId", "handleClose"],
  deleteFormationSuccess: [],
  deleteFormationError: [],
  addEditFormation: ["formation", "handleClose"],
  addEditFormationSuccess: [],
  addEditFormationError: [],
});

const {
  GET_LIST_FORMATIONS,
  GET_LIST_FORMATIONS_SUCCESS,
  GET_LIST_FORMATIONS_ERROR,
  DELETE_FORMATION,
  DELETE_FORMATION_SUCCESS,
  DELETE_FORMATION_ERROR,
  ADD_EDIT_FORMATION,
  ADD_EDIT_FORMATION_SUCCESS,
  ADD_EDIT_FORMATION_ERROR,
} = Types;

const {
  getListFormations,
  getListFormationsSuccess,
  getListFormationsError,
  deleteFormation,
  deleteFormationSuccess,
  deleteFormationError,
  addEditFormation,
  addEditFormationSuccess,
  addEditFormationError,
} = Creators;

export {
  GET_LIST_FORMATIONS,
  GET_LIST_FORMATIONS_SUCCESS,
  GET_LIST_FORMATIONS_ERROR,
  DELETE_FORMATION,
  DELETE_FORMATION_SUCCESS,
  DELETE_FORMATION_ERROR,
  ADD_EDIT_FORMATION,
  ADD_EDIT_FORMATION_SUCCESS,
  ADD_EDIT_FORMATION_ERROR,
  getListFormations,
  getListFormationsSuccess,
  getListFormationsError,
  deleteFormation,
  deleteFormationSuccess,
  deleteFormationError,
  addEditFormation,
  addEditFormationSuccess,
  addEditFormationError,
};
