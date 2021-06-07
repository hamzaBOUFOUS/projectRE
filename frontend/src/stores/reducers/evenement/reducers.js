import { createReducer } from "reduxsauce";
import {
  GET_LIST_EVENEMENTS,
  GET_LIST_EVENEMENTS_SUCCESS,
  GET_LIST_EVENEMENTS_ERROR,
  DELETE_EVENEMENT,
  DELETE_EVENEMENT_SUCCESS,
  DELETE_EVENEMENT_ERROR
} from "./actions";

const INITIAL_STATE = {
  EvenementsData: { content: [], number: 0, size: 10 },
  EvenementsFilter: {},
  timelineData: [],
  status: null,
  deleteStatus: null,
};

const getListEvenements = (state, action) => ({
  ...state,
  status: "loading",
  EvenementsFilter: action.filter,
});

const getListEvenementsSuccess = (state, action) => ({
  ...state,
  EvenementsData: action.data,
  status: "success",
});

const getListEvenementsError = (state, action) => ({
  ...state,
  status: "error",
});

const deleteEvenement = (state, action) => ({
  ...state,
  deleteStatus: "loading",
});

const deleteEvenementSuccess = (state, action) => ({
  ...state,
  deleteStatus: "success",
});

const deleteEvenementError = (state, action) => ({
  ...state,
  deleteStatus: "error",
});

export const EvenementsReducer = createReducer(INITIAL_STATE, {
  [GET_LIST_EVENEMENTS]: getListEvenements,
  [GET_LIST_EVENEMENTS_SUCCESS]: getListEvenementsSuccess,
  [GET_LIST_EVENEMENTS_ERROR]: getListEvenementsError,
  [DELETE_EVENEMENT]: deleteEvenement,
  [DELETE_EVENEMENT_SUCCESS]: deleteEvenementSuccess,
  [DELETE_EVENEMENT_ERROR]: deleteEvenementError,
});
