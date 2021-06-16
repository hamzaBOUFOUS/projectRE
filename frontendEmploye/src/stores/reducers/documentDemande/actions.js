import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getListDocumentDemandeIds: ["page", "id", "size"],
  getListDocumentDemandeIdsSuccess: ["data"],
  getListDocumentDemandeIdsError: [],
  editDocumentDemande: ["documentDemande", "handleClose"],
  editDocumentDemandeSuccess: [],
  editDocumentDemandeError: [],
  deleteDocumentDemande: ["deleteDocumentDemandeId", "handleClose"],
  deleteDocumentDemandeSuccess: [],
  deleteDocumentDemandeError: [],
});

const {
  GET_LIST_DOCUMENT_DEMANDE_IDS,
  GET_LIST_DOCUMENT_DEMANDE_IDS_SUCCESS,
  GET_LIST_DOCUMENT_DEMANDE_IDS_ERROR,
  EDIT_DOCUMENT_DEMANDE,
  EDIT_DOCUMENT_DEMANDE_SUCCESS,
  EDIT_DOCUMENT_DEMANDE_ERROR,
  DELETE_DOCUMENT_DEMANDE,
  DELETE_DOCUMENT_DEMANDE_SUCCESS,
  DELETE_DOCUMENT_DEMANDE_ERROR,
} = Types;

const {
  getListDocumentDemandeIds,
  getListDocumentDemandeIdsSuccess,
  getListDocumentDemandeIdsError,
  editDocumentDemande,
  editDocumentDemandeSuccess,
  editDocumentDemandeError,
  deleteDocumentDemande,
  deleteDocumentDemandeSuccess,
  deleteDocumentDemandeError,
} = Creators;

export {
  GET_LIST_DOCUMENT_DEMANDE_IDS,
  GET_LIST_DOCUMENT_DEMANDE_IDS_SUCCESS,
  GET_LIST_DOCUMENT_DEMANDE_IDS_ERROR,
  EDIT_DOCUMENT_DEMANDE,
  EDIT_DOCUMENT_DEMANDE_SUCCESS,
  EDIT_DOCUMENT_DEMANDE_ERROR,
  DELETE_DOCUMENT_DEMANDE,
  DELETE_DOCUMENT_DEMANDE_SUCCESS,
  DELETE_DOCUMENT_DEMANDE_ERROR,
  getListDocumentDemandeIds,
  getListDocumentDemandeIdsSuccess,
  getListDocumentDemandeIdsError,
  editDocumentDemande,
  editDocumentDemandeSuccess,
  editDocumentDemandeError,
  deleteDocumentDemande,
  deleteDocumentDemandeSuccess,
  deleteDocumentDemandeError,
};
