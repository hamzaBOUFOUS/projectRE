import { createReducer } from "reduxsauce";
import {
  GET_LIST_MOTIFS,
  GET_LIST_MOTIFS_SUCCESS,
  GET_LIST_MOTIFS_ERROR,
} from "./actions";

const INITIAL_STATE = {
  MotifsData: [],
  MotifsFilter: {},
  status: null,
};

const getListMotifs = (state, action) => ({
  ...state,
  status: "loading",
  MotifsFilter: action.filter,
});

const getListMotifsSuccess = (state, action) => ({
  ...state,
  MotifsData: action.data,
  status: "success",
});

const getListMotifsError = (state, action) => ({
  ...state,
  status: "error",
});

export const MotifsReducer = createReducer(INITIAL_STATE, {
  [GET_LIST_MOTIFS]: getListMotifs,
  [GET_LIST_MOTIFS_SUCCESS]: getListMotifsSuccess,
  [GET_LIST_MOTIFS_ERROR]: getListMotifsError,
});
