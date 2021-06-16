import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  DELETE_EVENEMENT,
  deleteEvenementSuccess,
  deleteEvenementError,
  ADD_EDIT_EVENEMENT,
  addEditEvenementSuccess,
  addEditEvenementError,
  GET_LIST_EVENEMENT_IDS,
  getListEvenementIds,
  getListEvenementIdsSuccess,
  getListEvenementIdsError,
} from "../stores/reducers/evenement/actions";

function* deleteEvenementsaga({ evenementId, handleClose}) {
  
  try {
    const { number: page, size } = yield select(
      (state) => state.evenements.EvenementsData
    );
    const filter = yield select((state) => state.evenements.EvenementsFilter);
    const resp = yield call(fetch, `/evenement/delete/${evenementId}`, {
      method: "DELETE",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(deleteEvenementSuccess());
    yield handleClose();
    yield put(getListEvenementIds(page, filter, size));
  } catch (e) {
    yield put(deleteEvenementError());
  }
}

function* addEditEvenementsaga({ evenement, handleClose }) {
  try {
    const { number: page, size } = yield select(
      (state) => state.evenements.EvenementsData
    );
    const filter = yield select((state) => state.evenements.EvenementsFilter);
    const resp = yield call(fetch, "/evenement/add-edit", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(evenement),
      method: "POST",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(addEditEvenementSuccess());
    yield handleClose();
    yield put(getListEvenementIds(page, filter, size));
  } catch (e) {
    yield put(addEditEvenementError());
  }
}

function* getListEvenementIdsSaga({ page, id, size }) {
  try {
    const directionMetierResp = yield call(
      fetch, `/evenement/list-evenement/${id}?page=${page}&size=${size}`,{
        method: "POST",
      }
    );
    if (directionMetierResp.status !== 200) {
      throw new Error();
    }
    const data = yield call(() => directionMetierResp.json());
    yield put(getListEvenementIdsSuccess(data));
  } catch (e) {
    yield put(getListEvenementIdsError());
  }
}

export default function* saga() {
  yield takeLatest(DELETE_EVENEMENT, deleteEvenementsaga);
  yield takeLatest(ADD_EDIT_EVENEMENT, addEditEvenementsaga);
  yield takeLatest(GET_LIST_EVENEMENT_IDS, getListEvenementIdsSaga);
}
