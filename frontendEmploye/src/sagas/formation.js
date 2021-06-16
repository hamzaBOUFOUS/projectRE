import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  GET_LIST_FORMATIONS,
  getListFormations,
  getListFormationsSuccess,
  getListFormationsError,
  DELETE_FORMATION,
  deleteFormationSuccess,
  deleteFormationError,
  ADD_EDIT_FORMATION,
  addEditFormationSuccess,
  addEditFormationError,
  GET_LIST_FORMATION_IDS,
  getListFormationIds,
  getListFormationIdsSuccess,
  getListFormationIdsError,
} from "../stores/reducers/formation/actions";

function* getListFormationsSaga({ page, filter, size }) {
  try {
    const directionMetierResp = yield call(
      fetch,
      `/formation/list-formation?page=${page}&size=${size}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filter),
        method: "POST",
      }
    );
    if (directionMetierResp.status !== 200) {
      throw new Error();
    }
    const data = yield call(() => directionMetierResp.json());
    yield put(getListFormationsSuccess(data));
  } catch (e) {
    yield put(getListFormationsError());
  }
}

function* deleteFormationsaga({ formationId, handleClose}) {
  
  try {
    const { number: page, size } = yield select(
      (state) => state.formations.FormationsData
    );
    const filter = yield select((state) => state.formations.FormationsFilter);
    const resp = yield call(fetch, `/formation/delete/${formationId}`, {
      method: "DELETE",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(deleteFormationSuccess());
    yield handleClose();
    yield put(getListFormations(page, filter, size));
  } catch (e) {
    yield put(deleteFormationError());
  }
}

function* addEditFormationsaga({ formation, handleClose }) {
  try {
    const { number: page, size } = yield select(
      (state) => state.formations.FormationsData
    );
    const filter = yield select((state) => state.formations.FormationsFilter);
    const resp = yield call(fetch, "/formation/add-edit", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formation),
      method: "POST",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(addEditFormationSuccess());
    yield handleClose();
    yield put(getListFormations(page, filter, size));
  } catch (e) {
    yield put(addEditFormationError());
  }
}

function* getListFormationIdsSaga({ page, id, size }) {
  try {
    const directionMetierResp = yield call(
      fetch, `/formation/list-formation/${id}?page=${page}&size=${size}`,{
        method: "POST",
      }
    );
    if (directionMetierResp.status !== 200) {
      throw new Error();
    }
    const data = yield call(() => directionMetierResp.json());
    yield put(getListFormationIdsSuccess(data));
  } catch (e) {
    yield put(getListFormationIdsError());
  }
}

export default function* saga() {
  yield takeLatest(GET_LIST_FORMATIONS, getListFormationsSaga);
  yield takeLatest(DELETE_FORMATION, deleteFormationsaga);
  yield takeLatest(ADD_EDIT_FORMATION, addEditFormationsaga);
  yield takeLatest(GET_LIST_FORMATION_IDS, getListFormationIdsSaga);
}