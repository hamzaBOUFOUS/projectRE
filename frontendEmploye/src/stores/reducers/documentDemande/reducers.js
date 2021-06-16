import { createReducer } from "reduxsauce";
import {
  GET_LIST_DOCUMENT_DEMANDE_IDS,
  GET_LIST_DOCUMENT_DEMANDE_IDS_SUCCESS,
  GET_LIST_DOCUMENT_DEMANDE_IDS_ERROR,
  DELETE_DOCUMENT_DEMANDE,
  DELETE_DOCUMENT_DEMANDE_SUCCESS,
  DELETE_DOCUMENT_DEMANDE_ERROR
} from "./actions";

const INITIAL_STATE = {
  DocumentDemandeIdsData: { content: [], number: 0, size: 10 },
  DocumentDemandesFilter: {},
  status: null,
  deleteStatus: null,
};

const getListDocumentDemandeIds = (state, action) => ({
  ...state,
  status: "loading",
  DocumentDemandesFilter: action.filter,
});

const getListDocumentDemandeIdsSuccess = (state, action) => ({
  ...state,
  DocumentDemandeIdsData: action.data,
  status: "success",
});

const getListDocumentDemandeIdsError = (state, action) => ({
  ...state,
  status: "error",
});

const deleteDocumentDemande = (state, action) => ({
  ...state,
  deleteStatus: "loading",
});

const deleteDocumentDemandeSuccess = (state, action) => ({
  ...state,
  deleteStatus: "success",
});

const deleteDocumentDemandeError = (state, action) => ({
  ...state,
  deleteStatus: "error",
});
export const DocumentDemandesReducer = createReducer(INITIAL_STATE, {
  [GET_LIST_DOCUMENT_DEMANDE_IDS]: getListDocumentDemandeIds,
  [GET_LIST_DOCUMENT_DEMANDE_IDS_SUCCESS]: getListDocumentDemandeIdsSuccess,
  [GET_LIST_DOCUMENT_DEMANDE_IDS_ERROR]: getListDocumentDemandeIdsError,
  [DELETE_DOCUMENT_DEMANDE]: deleteDocumentDemande,
  [DELETE_DOCUMENT_DEMANDE_SUCCESS]: deleteDocumentDemandeSuccess,
  [DELETE_DOCUMENT_DEMANDE_ERROR]: deleteDocumentDemandeError,
});
