import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getListDocumentDemandes: ["page", "filter", "size"],
  getListDocumentDemandesSuccess: ["data"],
  getListDocumentDemandesError: [],
  editDocumentDemande: ["documentDemande", "handleClose"],
  editDocumentDemandeSuccess: [],
  editDocumentDemandeError: [],
});

const {
  GET_LIST_DOCUMENT_DEMANDES,
  GET_LIST_DOCUMENT_DEMANDES_SUCCESS,
  GET_LIST_DOCUMENT_DEMANDES_ERROR,
  EDIT_DOCUMENT_DEMANDE,
  EDIT_DOCUMENT_DEMANDE_SUCCESS,
  EDIT_DOCUMENT_DEMANDE_ERROR,
} = Types;

const {
  getListDocumentDemandes,
  getListDocumentDemandesSuccess,
  getListDocumentDemandesError,
  editDocumentDemande,
  editDocumentDemandeSuccess,
  editDocumentDemandeError,
} = Creators;

export {
  GET_LIST_DOCUMENT_DEMANDES,
  GET_LIST_DOCUMENT_DEMANDES_SUCCESS,
  GET_LIST_DOCUMENT_DEMANDES_ERROR,
  EDIT_DOCUMENT_DEMANDE,
  EDIT_DOCUMENT_DEMANDE_SUCCESS,
  EDIT_DOCUMENT_DEMANDE_ERROR,
  getListDocumentDemandes,
  getListDocumentDemandesSuccess,
  getListDocumentDemandesError,
  editDocumentDemande,
  editDocumentDemandeSuccess,
  editDocumentDemandeError,
};
