import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getListDemandeConges: ["page", "filter", "size"],
  getListDemandeCongesSuccess: ["data"],
  getListDemandeCongesError: [],
  editDemandeConge: ["demandeConge", "handleClose"],
  editDemandeCongeSuccess: [],
  editDemandeCongeError: [],
});

const {
  GET_LIST_DEMANDE_CONGES,
  GET_LIST_DEMANDE_CONGES_SUCCESS,
  GET_LIST_DEMANDE_CONGES_ERROR,
  EDIT_DEMANDE_CONGE,
  EDIT_DEMANDE_CONGE_SUCCESS,
  EDIT_DEMANDE_CONGE_ERROR,
} = Types;

const {
  getListDemandeConges,
  getListDemandeCongesSuccess,
  getListDemandeCongesError,
  editDemandeConge,
  editDemandeCongeSuccess,
  editDemandeCongeError,
} = Creators;

export {
  GET_LIST_DEMANDE_CONGES,
  GET_LIST_DEMANDE_CONGES_SUCCESS,
  GET_LIST_DEMANDE_CONGES_ERROR,
  EDIT_DEMANDE_CONGE,
  EDIT_DEMANDE_CONGE_SUCCESS,
  EDIT_DEMANDE_CONGE_ERROR,
  getListDemandeConges,
  getListDemandeCongesSuccess,
  getListDemandeCongesError,
  editDemandeConge,
  editDemandeCongeSuccess,
  editDemandeCongeError,
};
