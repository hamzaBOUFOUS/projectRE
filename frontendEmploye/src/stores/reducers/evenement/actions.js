import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  deleteEvenement: ["evenementId", "handleClose"],
  deleteEvenementSuccess: [],
  deleteEvenementError: [],
  addEditEvenement: ["evenement", "handleClose"],
  addEditEvenementSuccess: [],
  addEditEvenementError: [],
  getListEvenementIds: ["page", "id", "size"],
  getListEvenementIdsSuccess: ["data"],
  getListEvenementIdsError: [],
});

const {
  DELETE_EVENEMENT,
  DELETE_EVENEMENT_SUCCESS,
  DELETE_EVENEMENT_ERROR,
  ADD_EDIT_EVENEMENT,
  ADD_EDIT_EVENEMENT_SUCCESS,
  ADD_EDIT_EVENEMENT_ERROR,
  GET_LIST_EVENEMENT_IDS,
  GET_LIST_EVENEMENT_IDS_SUCCESS,
  GET_LIST_EVENEMENT_IDS_ERROR,
} = Types;

const {
  deleteEvenement,
  deleteEvenementSuccess,
  deleteEvenementError,
  addEditEvenement,
  addEditEvenementSuccess,
  addEditEvenementError,
  getListEvenementIds,
  getListEvenementIdsSuccess,
  getListEvenementIdsError,
} = Creators;

export {
  DELETE_EVENEMENT,
  DELETE_EVENEMENT_SUCCESS,
  DELETE_EVENEMENT_ERROR,
  ADD_EDIT_EVENEMENT,
  ADD_EDIT_EVENEMENT_SUCCESS,
  ADD_EDIT_EVENEMENT_ERROR,
  GET_LIST_EVENEMENT_IDS,
  GET_LIST_EVENEMENT_IDS_SUCCESS,
  GET_LIST_EVENEMENT_IDS_ERROR,
  deleteEvenement,
  deleteEvenementSuccess,
  deleteEvenementError,
  addEditEvenement,
  addEditEvenementSuccess,
  addEditEvenementError,
  getListEvenementIds,
  getListEvenementIdsSuccess,
  getListEvenementIdsError,
};
