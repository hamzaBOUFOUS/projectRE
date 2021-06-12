import { createReducer } from "reduxsauce";
import {
  GET_LIST_FORMATIONS,
  GET_LIST_FORMATIONS_SUCCESS,
  GET_LIST_FORMATIONS_ERROR,
  DELETE_FORMATION,
  DELETE_FORMATION_SUCCESS,
  DELETE_FORMATION_ERROR
} from "./actions";

const INITIAL_STATE = {
  FormationsData: { content: [], number: 0, size: 10 },
  FormationsFilter: {},
  timelineData: [],
  status: null,
  deleteStatus: null,
};

const getListFormations = (state, action) => ({
  ...state,
  status: "loading",
  FormationsFilter: action.filter,
});

const getListFormationsSuccess = (state, action) => ({
  ...state,
  FormationsData: action.data,
  status: "success",
});

const getListFormationsError = (state, action) => ({
  ...state,
  status: "error",
});

const deleteFormation = (state, action) => ({
  ...state,
  deleteStatus: "loading",
});

const deleteFormationSuccess = (state, action) => ({
  ...state,
  deleteStatus: "success",
});

const deleteFormationError = (state, action) => ({
  ...state,
  deleteStatus: "error",
});

export const FormationsReducer = createReducer(INITIAL_STATE, {
  [GET_LIST_FORMATIONS]: getListFormations,
  [GET_LIST_FORMATIONS_SUCCESS]: getListFormationsSuccess,
  [GET_LIST_FORMATIONS_ERROR]: getListFormationsError,
  [DELETE_FORMATION]: deleteFormation,
  [DELETE_FORMATION_SUCCESS]: deleteFormationSuccess,
  [DELETE_FORMATION_ERROR]: deleteFormationError,
});
