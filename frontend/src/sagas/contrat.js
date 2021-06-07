import { useSelector } from "react-redux";
import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  GET_LIST_CONTRATS,
  getListContrats,
  getListContratsSuccess,
  getListContratsError,
  DELETE_CONTRAT,
  deleteContratSuccess,
  deleteContratError,
  ADD_EDIT_CONTRAT,
  addEditContratSuccess,
  addEditContratError,
} from "../stores/reducers/contrat/actions";

function* getListContratsSaga({ page, filter, size }) {
  try {
    const directionMetierResp = yield call(
      fetch,
      `/contrat/list-contrat?page=${page}&size=${size}`,
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
    yield put(getListContratsSuccess(data));
  } catch (e) {
    yield put(getListContratsError());
  }
}

function* deleteContratsaga({ contratId, handleClose }) {
  try {
    const { number: page, size } = yield select(
      (state) => state.contrats.ContratsData
    );
    const filter = yield select((state) => state.contrats.ContratsFilter);
    const resp = yield call(fetch, `/contrat/delete/${contratId}`, {
      method: "DELETE",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(deleteContratSuccess());
    yield handleClose();
    yield put(getListContrats(page, filter, size));
  } catch (e) {
    yield put(deleteContratError());
  }
}

function* addEditContratsaga({ contrat, handleClose }) {
  try {
    const { number: page, size } = yield select(
      (state) => state.contrats.ContratsData
    );
    const filter = yield select((state) => state.contrats.ContratsFilter);
    const resp = yield call(fetch, "/contrat/add-edit", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contrat),
      method: "POST",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(addEditContratSuccess());
    yield handleClose();
    yield put(getListContrats(page, filter, size));
  } catch (e) {
    console.log(e)
    yield put(addEditContratError());
  }
}


export default function* saga() {
  yield takeLatest(GET_LIST_CONTRATS, getListContratsSaga);
  yield takeLatest(DELETE_CONTRAT, deleteContratsaga);
  yield takeLatest(ADD_EDIT_CONTRAT, addEditContratsaga);
}
