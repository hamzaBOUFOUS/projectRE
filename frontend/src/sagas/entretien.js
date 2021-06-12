import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  GET_LIST_ENTRETIENS,
  getListEntretiens,
  getListEntretiensSuccess,
  getListEntretiensError,
  DELETE_ENTRETIEN,
  deleteEntretienSuccess,
  deleteEntretienError,
  ADD_EDIT_ENTRETIEN,
  addEditEntretienSuccess,
  addEditEntretienError,
} from "../stores/reducers/entretien/actions";

function* getListEntretiensSaga({ page, filter, size }) {
  try {
    const directionMetierResp = yield call(
      fetch,
      `/entretien/list-entretien?page=${page}&size=${size}`,
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
    yield put(getListEntretiensSuccess(data));
  } catch (e) {
    yield put(getListEntretiensError());
  }
}

function* deleteEntretiensaga({ entretienId, handleClose }) {
  try {
    const { number: page, size } = yield select(
      (state) => state.entretiens.EntretiensData
    );
    const filter = yield select((state) => state.entretiens.EntretiensFilter);
    const resp = yield call(fetch, `/entretien/delete/${entretienId}`, {
      method: "DELETE",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(deleteEntretienSuccess());
    yield handleClose();
    yield put(getListEntretiens(page, filter, size));
  } catch (e) {
    yield put(deleteEntretienError());
  }
}

function* addEditEntretiensaga({ entretien, handleClose }) {
  try {
    const { number: page, size } = yield select(
      (state) => state.entretiens.EntretiensData
    );
    const filter = yield select((state) => state.entretiens.EntretiensFilter);
    const resp = yield call(fetch, "/entretien/add-edit", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entretien),
      method: "POST",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(addEditEntretienSuccess());
    yield handleClose();
    yield put(getListEntretiens(page, filter, size));
  } catch (e) {
    yield put(addEditEntretienError());
  }
}


export default function* saga() {
  yield takeLatest(GET_LIST_ENTRETIENS, getListEntretiensSaga);
  yield takeLatest(DELETE_ENTRETIEN, deleteEntretiensaga);
  yield takeLatest(ADD_EDIT_ENTRETIEN, addEditEntretiensaga);
}
