import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getListDocuments: ["page", "filter", "size"],
  getListDocumentsSuccess: ["data"],
  getListDocumentsError: [],
  deleteDocument: ["documentId", "handleClose"],
  deleteDocumentSuccess: [],
  deleteDocumentError: [],
  addEditDocument: ["document", "handleClose"],
  addEditDocumentSuccess: [],
  addEditDocumentError: [],
});

const {
  GET_LIST_DOCUMENTS,
  GET_LIST_DOCUMENTS_SUCCESS,
  GET_LIST_DOCUMENTS_ERROR,
  DELETE_DOCUMENT,
  DELETE_DOCUMENT_SUCCESS,
  DELETE_DOCUMENT_ERROR,
  ADD_EDIT_DOCUMENT,
  ADD_EDIT_DOCUMENT_SUCCESS,
  ADD_EDIT_DOCUMENT_ERROR,
} = Types;

const {
  getListDocuments,
  getListDocumentsSuccess,
  getListDocumentsError,
  deleteDocument,
  deleteDocumentSuccess,
  deleteDocumentError,
  addEditDocument,
  addEditDocumentSuccess,
  addEditDocumentError,
} = Creators;

export {
  GET_LIST_DOCUMENTS,
  GET_LIST_DOCUMENTS_SUCCESS,
  GET_LIST_DOCUMENTS_ERROR,
  DELETE_DOCUMENT,
  DELETE_DOCUMENT_SUCCESS,
  DELETE_DOCUMENT_ERROR,
  ADD_EDIT_DOCUMENT,
  ADD_EDIT_DOCUMENT_SUCCESS,
  ADD_EDIT_DOCUMENT_ERROR,
  getListDocuments,
  getListDocumentsSuccess,
  getListDocumentsError,
  deleteDocument,
  deleteDocumentSuccess,
  deleteDocumentError,
  addEditDocument,
  addEditDocumentSuccess,
  addEditDocumentError,
};
