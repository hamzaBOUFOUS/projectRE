import { createReducer } from "reduxsauce";
import {
  DELETE_EVENEMENT,
  DELETE_EVENEMENT_SUCCESS,
  DELETE_EVENEMENT_ERROR,
  GET_LIST_EVENEMENT_IDS,
  GET_LIST_EVENEMENT_IDS_SUCCESS,
  GET_LIST_EVENEMENT_IDS_ERROR,
} from "./actions";

const INITIAL_STATE = {
  EvenementIdsData: { content: [], number: 0, size: 10 },
  EvenementsFilter: {},
  timelineData: [],
  status: null,
  deleteStatus: null,
};

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

const getListEvenementIds = (state, action) => ({
  ...state,
  status: "loading",
  EvenementsFilter: action.filter,
});

const getListEvenementIdsSuccess = (state, action) => ({
  ...state,
  EvenementIdsData: action.data,
  status: "success",
});

const getListEvenementIdsError = (state, action) => ({
  ...state,
  status: "error",
});

export const EvenementsReducer = createReducer(INITIAL_STATE, {
  [DELETE_EVENEMENT]: deleteEvenement,
  [DELETE_EVENEMENT_SUCCESS]: deleteEvenementSuccess,
  [DELETE_EVENEMENT_ERROR]: deleteEvenementError,
  [GET_LIST_EVENEMENT_IDS]: getListEvenementIds,
  [GET_LIST_EVENEMENT_IDS_SUCCESS]: getListEvenementIdsSuccess,
  [GET_LIST_EVENEMENT_IDS_ERROR]: getListEvenementIdsError,
});
