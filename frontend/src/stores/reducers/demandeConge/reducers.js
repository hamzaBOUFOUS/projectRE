import { createReducer } from "reduxsauce";
import {
  GET_LIST_DEMANDE_CONGES,
  GET_LIST_DEMANDE_CONGES_SUCCESS,
  GET_LIST_DEMANDE_CONGES_ERROR,
} from "./actions";

const INITIAL_STATE = {
  DemandeCongesData: { content: [], number: 0, size: 10 },
  DemandeCongesFilter: {},
  status: null,
};

const getListDemandeConges = (state, action) => ({
  ...state,
  status: "loading",
  DemandeCongesFilter: action.filter,
});

const getListDemandeCongesSuccess = (state, action) => ({
  ...state,
  DemandeCongesData: action.data,
  status: "success",
});

const getListDemandeCongesError = (state, action) => ({
  ...state,
  status: "error",
});

export const DemandeCongesReducer = createReducer(INITIAL_STATE, {
  [GET_LIST_DEMANDE_CONGES]: getListDemandeConges,
  [GET_LIST_DEMANDE_CONGES_SUCCESS]: getListDemandeCongesSuccess,
  [GET_LIST_DEMANDE_CONGES_ERROR]: getListDemandeCongesError,
});
