import { createReducer } from "reduxsauce";
import {
  GET_LIST_CONDIDATURES,
  GET_LIST_CONDIDATURES_SUCCESS,
  GET_LIST_CONDIDATURES_ERROR,
  DELETE_CONDIDATURE,
  DELETE_CONDIDATURE_SUCCESS,
  DELETE_CONDIDATURE_ERROR
} from "./actions";

const INITIAL_STATE = {
  CondidaturesData: { content: [], number: 0, size: 10 },
  CondidaturesFilter: {},
  status: null,
  deleteStatus: null,
};

const getListCondidatures = (state, action) => ({
  ...state,
  status: "loading",
  CondidaturesFilter: action.filter,
});

const getListCondidaturesSuccess = (state, action) => ({
  ...state,
  CondidaturesData: action.data,
  status: "success",
});

const getListCondidaturesError = (state, action) => ({
  ...state,
  status: "error",
});

const deleteCondidature = (state, action) => ({
  ...state,
  deleteStatus: "loading",
});

const deleteCondidatureSuccess = (state, action) => ({
  ...state,
  deleteStatus: "success",
});

const deleteCondidatureError = (state, action) => ({
  ...state,
  deleteStatus: "error",
});

export const CondidaturesReducer = createReducer(INITIAL_STATE, {
  [GET_LIST_CONDIDATURES]: getListCondidatures,
  [GET_LIST_CONDIDATURES_SUCCESS]: getListCondidaturesSuccess,
  [GET_LIST_CONDIDATURES_ERROR]: getListCondidaturesError,
  [DELETE_CONDIDATURE]: deleteCondidature,
  [DELETE_CONDIDATURE_SUCCESS]: deleteCondidatureSuccess,
  [DELETE_CONDIDATURE_ERROR]: deleteCondidatureError,
});
