import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getListCondidatures: ["page", "filter", "size"],
  getListCondidaturesSuccess: ["data"],
  getListCondidaturesError: [],
  deleteCondidature: ["condidatureId", "handleClose"],
  deleteCondidatureSuccess: [],
  deleteCondidatureError: [],
  addEditCondidature: ["condidature", "handleClose"],
  addEditCondidatureSuccess: [],
  addEditCondidatureError: [],
});

const {
  GET_LIST_CONDIDATURES,
  GET_LIST_CONDIDATURES_SUCCESS,
  GET_LIST_CONDIDATURES_ERROR,
  DELETE_CONDIDATURE,
  DELETE_CONDIDATURE_SUCCESS,
  DELETE_CONDIDATURE_ERROR,
  ADD_EDIT_CONDIDATURE,
  ADD_EDIT_CONDIDATURE_SUCCESS,
  ADD_EDIT_CONDIDATURE_ERROR,
} = Types;

const {
  getListCondidatures,
  getListCondidaturesSuccess,
  getListCondidaturesError,
  deleteCondidature,
  deleteCondidatureSuccess,
  deleteCondidatureError,
  addEditCondidature,
  addEditCondidatureSuccess,
  addEditCondidatureError,
} = Creators;

export {
  GET_LIST_CONDIDATURES,
  GET_LIST_CONDIDATURES_SUCCESS,
  GET_LIST_CONDIDATURES_ERROR,
  DELETE_CONDIDATURE,
  DELETE_CONDIDATURE_SUCCESS,
  DELETE_CONDIDATURE_ERROR,
  ADD_EDIT_CONDIDATURE,
  ADD_EDIT_CONDIDATURE_SUCCESS,
  ADD_EDIT_CONDIDATURE_ERROR,
  getListCondidatures,
  getListCondidaturesSuccess,
  getListCondidaturesError,
  deleteCondidature,
  deleteCondidatureSuccess,
  deleteCondidatureError,
  addEditCondidature,
  addEditCondidatureSuccess,
  addEditCondidatureError,
};
