import { createReducer } from "reduxsauce";
import {
  GET_LIST_ENTRETIENS,
  GET_LIST_ENTRETIENS_SUCCESS,
  GET_LIST_ENTRETIENS_ERROR,
  DELETE_ENTRETIEN,
  DELETE_ENTRETIEN_SUCCESS,
  DELETE_ENTRETIEN_ERROR
} from "./actions";

const INITIAL_STATE = {
  EntretiensData: { content: [], number: 0, size: 10 },
  EntretiensFilter: {},
  status: null,
  deleteStatus: null,
};

const getListEntretiens = (state, action) => ({
  ...state,
  status: "loading",
  EntretiensFilter: action.filter,
});

const getListEntretiensSuccess = (state, action) => ({
  ...state,
  EntretiensData: action.data,
  status: "success",
});

const getListEntretiensError = (state, action) => ({
  ...state,
  status: "error",
});

const deleteEntretien = (state, action) => ({
  ...state,
  deleteStatus: "loading",
});

const deleteEntretienSuccess = (state, action) => ({
  ...state,
  deleteStatus: "success",
});

const deleteEntretienError = (state, action) => ({
  ...state,
  deleteStatus: "error",
});

export const EntretiensReducer = createReducer(INITIAL_STATE, {
  [GET_LIST_ENTRETIENS]: getListEntretiens,
  [GET_LIST_ENTRETIENS_SUCCESS]: getListEntretiensSuccess,
  [GET_LIST_ENTRETIENS_ERROR]: getListEntretiensError,
  [DELETE_ENTRETIEN]: deleteEntretien,
  [DELETE_ENTRETIEN_SUCCESS]: deleteEntretienSuccess,
  [DELETE_ENTRETIEN_ERROR]: deleteEntretienError,
});
