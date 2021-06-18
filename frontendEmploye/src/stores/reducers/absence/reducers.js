import { createReducer } from "reduxsauce";
import {
  GET_LIST_ABSENCE_IDS,
  GET_LIST_ABSENCE_IDS_SUCCESS,
  GET_LIST_ABSENCE_IDS_ERROR,
} from "./actions";

const INITIAL_STATE = {
  AbsenceIdsData: { content: [], number: 0, size: 10 },
  status: null,
};

const getListAbsenceIds = (state, action) => ({
  ...state,
  status: "loading",
  AbsencesFilter: action.filter,
});

const getListAbsenceIdsSuccess = (state, action) => ({
  ...state,
  AbsenceIdsData: action.data,
  status: "success",
});

const getListAbsenceIdsError = (state, action) => ({
  ...state,
  status: "error",
});

export const AbsencesReducer = createReducer(INITIAL_STATE, {
  [GET_LIST_ABSENCE_IDS]: getListAbsenceIds,
  [GET_LIST_ABSENCE_IDS_SUCCESS]: getListAbsenceIdsSuccess,
  [GET_LIST_ABSENCE_IDS_ERROR]: getListAbsenceIdsError,
});
