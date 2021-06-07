import { createReducer } from "reduxsauce";
import {
  GET_LIST_DOCUMENTS,
  GET_LIST_DOCUMENTS_SUCCESS,
  GET_LIST_DOCUMENTS_ERROR,
  DELETE_DOCUMENT,
  DELETE_DOCUMENT_SUCCESS,
  DELETE_DOCUMENT_ERROR
} from "./actions";

const INITIAL_STATE = {
  DocumentsData: { content: [], number: 0, size: 10 },
  DocumentsFilter: {},
  timelineData: [],
  status: null,
  deleteStatus: null,
};

const getListDocuments = (state, action) => ({
  ...state,
  status: "loading",
  DocumentsFilter: action.filter,
});

const getListDocumentsSuccess = (state, action) => ({
  ...state,
  DocumentsData: action.data,
  status: "success",
});

const getListDocumentsError = (state, action) => ({
  ...state,
  status: "error",
});

const deleteDocument = (state, action) => ({
  ...state,
  deleteStatus: "loading",
});

const deleteDocumentSuccess = (state, action) => ({
  ...state,
  deleteStatus: "success",
});

const deleteDocumentError = (state, action) => ({
  ...state,
  deleteStatus: "error",
});

export const DocumentsReducer = createReducer(INITIAL_STATE, {
  [GET_LIST_DOCUMENTS]: getListDocuments,
  [GET_LIST_DOCUMENTS_SUCCESS]: getListDocumentsSuccess,
  [GET_LIST_DOCUMENTS_ERROR]: getListDocumentsError,
  [DELETE_DOCUMENT]: deleteDocument,
  [DELETE_DOCUMENT_SUCCESS]: deleteDocumentSuccess,
  [DELETE_DOCUMENT_ERROR]: deleteDocumentError,
});
