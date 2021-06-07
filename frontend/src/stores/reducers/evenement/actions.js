import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getListEvenements: ["page", "filter", "size"],
  getListEvenementsSuccess: ["data"],
  getListEvenementsError: [],
  deleteEvenement: ["evenementId", "handleClose"],
  deleteEvenementSuccess: [],
  deleteEvenementError: [],
  addEditEvenement: ["evenement", "handleClose"],
  addEditEvenementSuccess: [],
  addEditEvenementError: [],
});

const {
  GET_LIST_EVENEMENTS,
  GET_LIST_EVENEMENTS_SUCCESS,
  GET_LIST_EVENEMENTS_ERROR,
  DELETE_EVENEMENT,
  DELETE_EVENEMENT_SUCCESS,
  DELETE_EVENEMENT_ERROR,
  ADD_EDIT_EVENEMENT,
  ADD_EDIT_EVENEMENT_SUCCESS,
  ADD_EDIT_EVENEMENT_ERROR,
} = Types;

const {
  getListEvenements,
  getListEvenementsSuccess,
  getListEvenementsError,
  deleteEvenement,
  deleteEvenementSuccess,
  deleteEvenementError,
  addEditEvenement,
  addEditEvenementSuccess,
  addEditEvenementError,
} = Creators;

export {
  GET_LIST_EVENEMENTS,
  GET_LIST_EVENEMENTS_SUCCESS,
  GET_LIST_EVENEMENTS_ERROR,
  DELETE_EVENEMENT,
  DELETE_EVENEMENT_SUCCESS,
  DELETE_EVENEMENT_ERROR,
  ADD_EDIT_EVENEMENT,
  ADD_EDIT_EVENEMENT_SUCCESS,
  ADD_EDIT_EVENEMENT_ERROR,
  getListEvenements,
  getListEvenementsSuccess,
  getListEvenementsError,
  deleteEvenement,
  deleteEvenementSuccess,
  deleteEvenementError,
  addEditEvenement,
  addEditEvenementSuccess,
  addEditEvenementError,
};
