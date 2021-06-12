import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  GET_LIST_DEMANDE_CONGES,
  getListDemandeConges,
  getListDemandeCongesSuccess,
  getListDemandeCongesError,
  EDIT_DEMANDE_CONGE,
  editDemandeCongeSuccess,
  editDemandeCongeError,
} from "../stores/reducers/demandeConge/actions";

function* getListDemandeCongesSaga({ page, filter, size }) {
  try {
    const directionMetierResp = yield call(
      fetch,
      `/demandeConge/list-demandeConge?page=${page}&size=${size}`,
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
    console.log(data)
    yield put(getListDemandeCongesSuccess(data));
  } catch (e) {
    yield put(getListDemandeCongesError());
  }
}

function* editDemandeCongesaga({ demandeConge, handleClose }) {
  try {
    const { number: page, size } = yield select(
      (state) => state.demandeConges.DemandeCongesData
    );
    const filter = yield select((state) => state.demandeConges.DemandeCongesFilter);
    const resp = yield call(fetch, "/demandeConge/add-edit", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(demandeConge),
      method: "POST",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(editDemandeCongeSuccess());
    yield handleClose();
    yield put(getListDemandeConges(page, filter, size));
  } catch (e) {
    yield put(editDemandeCongeError());
  }
}


export default function* saga() {
  yield takeLatest(GET_LIST_DEMANDE_CONGES, getListDemandeCongesSaga);
  yield takeLatest(EDIT_DEMANDE_CONGE, editDemandeCongesaga);
}