import { createReducer } from "reduxsauce";
import {
  GET_LIST_DOCUMENT_DEMANDES,
  GET_LIST_DOCUMENT_DEMANDES_SUCCESS,
  GET_LIST_DOCUMENT_DEMANDES_ERROR,
} from "./actions";

const INITIAL_STATE = {
  DocumentDemandesData: { content: [], number: 0, size: 10 },
  DocumentDemandesFilter: {},
  status: null,
};

const getListDocumentDemandes = (state, action) => ({
  ...state,
  status: "loading",
  DocumentDemandesFilter: action.filter,
});

const getListDocumentDemandesSuccess = (state, action) => ({
  ...state,
  DocumentDemandesData: action.data,
  status: "success",
});

const getListDocumentDemandesError = (state, action) => ({
  ...state,
  status: "error",
});

export const DocumentDemandesReducer = createReducer(INITIAL_STATE, {
  [GET_LIST_DOCUMENT_DEMANDES]: getListDocumentDemandes,
  [GET_LIST_DOCUMENT_DEMANDES_SUCCESS]: getListDocumentDemandesSuccess,
  [GET_LIST_DOCUMENT_DEMANDES_ERROR]: getListDocumentDemandesError,
});
