import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getListDemandeCongeIds: ["page", "id", "size"],
  getListDemandeCongeIdsSuccess: ["data"],
  getListDemandeCongeIdsError: [],
  editDemandeConge: ["demandeConge", "handleClose"],
  editDemandeCongeSuccess: [],
  editDemandeCongeError: [],
  deleteDemandeConge: ["demandeCongeId", "handleClose"],
  deleteDemandeCongeSuccess: [],
  deleteDemandeCongeError: [],
});

const {
  GET_LIST_DEMANDE_CONGE_IDS,
  GET_LIST_DEMANDE_CONGE_IDS_SUCCESS,
  GET_LIST_DEMANDE_CONGE_IDS_ERROR,
  EDIT_DEMANDE_CONGE,
  EDIT_DEMANDE_CONGE_SUCCESS,
  EDIT_DEMANDE_CONGE_ERROR,
  DELETE_DEMANDE_CONGE,
  DELETE_DEMANDE_CONGE_SUCCESS,
  DELETE_DEMANDE_CONGE_ERROR,
} = Types;

const {
  getListDemandeCongeIds,
  getListDemandeCongeIdsSuccess,
  getListDemandeCongeIdsError,
  editDemandeConge,
  editDemandeCongeSuccess,
  editDemandeCongeError,
  deleteDemandeConge,
  deleteDemandeCongeSuccess,
  deleteDemandeCongeError,
} = Creators;

export {
  GET_LIST_DEMANDE_CONGE_IDS,
  GET_LIST_DEMANDE_CONGE_IDS_SUCCESS,
  GET_LIST_DEMANDE_CONGE_IDS_ERROR,
  EDIT_DEMANDE_CONGE,
  EDIT_DEMANDE_CONGE_SUCCESS,
  EDIT_DEMANDE_CONGE_ERROR,
  DELETE_DEMANDE_CONGE,
  DELETE_DEMANDE_CONGE_SUCCESS,
  DELETE_DEMANDE_CONGE_ERROR,
  getListDemandeCongeIds,
  getListDemandeCongeIdsSuccess,
  getListDemandeCongeIdsError,
  editDemandeConge,
  editDemandeCongeSuccess,
  editDemandeCongeError,
  deleteDemandeConge,
  deleteDemandeCongeSuccess,
  deleteDemandeCongeError,
};
