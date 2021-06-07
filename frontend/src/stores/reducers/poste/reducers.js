import { createReducer } from "reduxsauce";
import {
  GET_LIST_POSTES,
  GET_LIST_POSTES_SUCCESS,
  GET_LIST_POSTES_ERROR,
  DELETE_POSTE,
  DELETE_POSTE_SUCCESS,
  DELETE_POSTE_ERROR
} from "./actions";

const INITIAL_STATE = {
  PostesData: { content: [], number: 0, size: 10 },
  PostesFilter: {},
  timelineData: [],
  status: null,
  deleteStatus: null,
};

const getListPostes = (state, action) => ({
  ...state,
  status: "loading",
  PostesFilter: action.filter,
});

const getListPostesSuccess = (state, action) => ({
  ...state,
  PostesData: action.data,
  status: "success",
});

const getListPostesError = (state, action) => ({
  ...state,
  status: "error",
});

const deletePoste = (state, action) => ({
  ...state,
  deleteStatus: "loading",
});

const deletePosteSuccess = (state, action) => ({
  ...state,
  deleteStatus: "success",
});

const deletePosteError = (state, action) => ({
  ...state,
  deleteStatus: "error",
});

export const PostesReducer = createReducer(INITIAL_STATE, {
  [GET_LIST_POSTES]: getListPostes,
  [GET_LIST_POSTES_SUCCESS]: getListPostesSuccess,
  [GET_LIST_POSTES_ERROR]: getListPostesError,
  [DELETE_POSTE]: deletePoste,
  [DELETE_POSTE_SUCCESS]: deletePosteSuccess,
  [DELETE_POSTE_ERROR]: deletePosteError,
});
