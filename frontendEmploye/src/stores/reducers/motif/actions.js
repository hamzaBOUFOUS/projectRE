import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getListMotifs: [],
  getListMotifsSuccess: ["data"],
  getListMotifsError: [],
});

const {
  GET_LIST_MOTIFS,
  GET_LIST_MOTIFS_SUCCESS,
  GET_LIST_MOTIFS_ERROR,
} = Types;

const {
  getListMotifs,
  getListMotifsSuccess,
  getListMotifsError,
} = Creators;

export {
  GET_LIST_MOTIFS,
  GET_LIST_MOTIFS_SUCCESS,
  GET_LIST_MOTIFS_ERROR,
  getListMotifs,
  getListMotifsSuccess,
  getListMotifsError,
};
