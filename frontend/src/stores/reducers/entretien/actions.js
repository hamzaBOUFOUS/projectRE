import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getListEntretiens: ["page", "filter", "size"],
  getListEntretiensSuccess: ["data"],
  getListEntretiensError: [],
  deleteEntretien: ["entretienId", "handleClose"],
  deleteEntretienSuccess: [],
  deleteEntretienError: [],
  addEditEntretien: ["entretien", "handleClose"],
  addEditEntretienSuccess: [],
  addEditEntretienError: [],
});

const {
  GET_LIST_ENTRETIENS,
  GET_LIST_ENTRETIENS_SUCCESS,
  GET_LIST_ENTRETIENS_ERROR,
  DELETE_ENTRETIEN,
  DELETE_ENTRETIEN_SUCCESS,
  DELETE_ENTRETIEN_ERROR,
  ADD_EDIT_ENTRETIEN,
  ADD_EDIT_ENTRETIEN_SUCCESS,
  ADD_EDIT_ENTRETIEN_ERROR,
} = Types;

const {
  getListEntretiens,
  getListEntretiensSuccess,
  getListEntretiensError,
  deleteEntretien,
  deleteEntretienSuccess,
  deleteEntretienError,
  addEditEntretien,
  addEditEntretienSuccess,
  addEditEntretienError,
} = Creators;

export {
  GET_LIST_ENTRETIENS,
  GET_LIST_ENTRETIENS_SUCCESS,
  GET_LIST_ENTRETIENS_ERROR,
  DELETE_ENTRETIEN,
  DELETE_ENTRETIEN_SUCCESS,
  DELETE_ENTRETIEN_ERROR,
  ADD_EDIT_ENTRETIEN,
  ADD_EDIT_ENTRETIEN_SUCCESS,
  ADD_EDIT_ENTRETIEN_ERROR,
  getListEntretiens,
  getListEntretiensSuccess,
  getListEntretiensError,
  deleteEntretien,
  deleteEntretienSuccess,
  deleteEntretienError,
  addEditEntretien,
  addEditEntretienSuccess,
  addEditEntretienError,
};
