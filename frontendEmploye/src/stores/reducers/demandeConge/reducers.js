import { createReducer } from "reduxsauce";
import {
  GET_LIST_DEMANDE_CONGE_IDS,
  GET_LIST_DEMANDE_CONGE_IDS_SUCCESS,
  GET_LIST_DEMANDE_CONGE_IDS_ERROR,
  DELETE_DEMANDE_CONGE,
  DELETE_DEMANDE_CONGE_SUCCESS,
  DELETE_DEMANDE_CONGE_ERROR
} from "./actions";

const INITIAL_STATE = {
  DemandeCongeIdsData: { content: [], number: 0, size: 10 },
  DemandeCongesFilter: {},
  status: null,
  deleteStatus: null,
  user: {},
};

const getListDemandeCongeIds = (state, action) => ({
  ...state,
  status: "loading",
  DemandeCongesFilter: action.filter,
});

const getListDemandeCongeIdsSuccess = (state, action) => ({
  ...state,
  DemandeCongeIdsData: action.data,
  user: action.user,
  status: "success",
});

const getListDemandeCongeIdsError = (state, action) => ({
  ...state,
  status: "error",
});

const deleteDemandeConge = (state, action) => ({
  ...state,
  deleteStatus: "loading",
});

const deleteDemandeCongeSuccess = (state, action) => ({
  ...state,
  deleteStatus: "success",
});

const deleteDemandeCongeError = (state, action) => ({
  ...state,
  deleteStatus: "error",
});

export const DemandeCongesReducer = createReducer(INITIAL_STATE, {
  [GET_LIST_DEMANDE_CONGE_IDS]: getListDemandeCongeIds,
  [GET_LIST_DEMANDE_CONGE_IDS_SUCCESS]: getListDemandeCongeIdsSuccess,
  [GET_LIST_DEMANDE_CONGE_IDS_ERROR]: getListDemandeCongeIdsError,
  [DELETE_DEMANDE_CONGE]: deleteDemandeConge,
  [DELETE_DEMANDE_CONGE_SUCCESS]: deleteDemandeCongeSuccess,
  [DELETE_DEMANDE_CONGE_ERROR]: deleteDemandeCongeError,
});
