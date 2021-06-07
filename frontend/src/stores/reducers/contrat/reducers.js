import { createReducer } from "reduxsauce";
import {
  GET_LIST_CONTRATS,
  GET_LIST_CONTRATS_SUCCESS,
  GET_LIST_CONTRATS_ERROR,
  DELETE_CONTRAT,
  DELETE_CONTRAT_SUCCESS,
  DELETE_CONTRAT_ERROR
} from "./actions";

const INITIAL_STATE = {
  ContratsData: { content: [], number: 0, size: 10 },
  ContratsFilter: {},
  status: null,
  deleteStatus: null,
};

const getListContrats = (state, action) => ({
  ...state,
  status: "loading",
  ContratsFilter: action.filter,
});

const getListContratsSuccess = (state, action) => ({
  ...state,
  ContratsData: action.data,
  status: "success",
});

const getListContratsError = (state, action) => ({
  ...state,
  status: "error",
});

const deleteContrat = (state, action) => ({
  ...state,
  deleteStatus: "loading",
});

const deleteContratSuccess = (state, action) => ({
  ...state,
  deleteStatus: "success",
});

const deleteContratError = (state, action) => ({
  ...state,
  deleteStatus: "error",
});

export const ContratsReducer = createReducer(INITIAL_STATE, {
  [GET_LIST_CONTRATS]: getListContrats,
  [GET_LIST_CONTRATS_SUCCESS]: getListContratsSuccess,
  [GET_LIST_CONTRATS_ERROR]: getListContratsError,
  [DELETE_CONTRAT]: deleteContrat,
  [DELETE_CONTRAT_SUCCESS]: deleteContratSuccess,
  [DELETE_CONTRAT_ERROR]: deleteContratError,
});
