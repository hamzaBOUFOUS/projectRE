import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getListAbsenceIds: ["page", "id", "size"],
  getListAbsenceIdsSuccess: ["data"],
  getListAbsenceIdsError: [],
});

const {
  GET_LIST_ABSENCE_IDS,
  GET_LIST_ABSENCE_IDS_SUCCESS,
  GET_LIST_ABSENCE_IDS_ERROR,
} = Types;

const {
  getListAbsenceIds,
  getListAbsenceIdsSuccess,
  getListAbsenceIdsError,
} = Creators;

export {
  GET_LIST_ABSENCE_IDS,
  GET_LIST_ABSENCE_IDS_SUCCESS,
  GET_LIST_ABSENCE_IDS_ERROR,
  getListAbsenceIds,
  getListAbsenceIdsSuccess,
  getListAbsenceIdsError,
};
