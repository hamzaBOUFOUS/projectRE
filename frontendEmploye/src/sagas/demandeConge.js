import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  GET_LIST_DEMANDE_CONGE_IDS,
  getListDemandeCongeIds,
  getListDemandeCongeIdsSuccess,
  getListDemandeCongeIdsError,
  EDIT_DEMANDE_CONGE,
  editDemandeCongeSuccess,
  editDemandeCongeError,
  DELETE_DEMANDE_CONGE,
  deleteDemandeCongeSuccess,
  deleteDemandeCongeError,
} from "../stores/reducers/demandeConge/actions";

function* getListDemandeCongeIdsSaga({ page, id, size }) {
  try {
    const directionMetierResp = yield call(
      fetch,`/demandeConge/list-demandeConge/${id}?page=${page}&size=${size}`,{
        method: "POST",
      }
    );
    if (directionMetierResp.status !== 200) {
      throw new Error();
    }
    const data = yield call(() => directionMetierResp.json());
    const user = data.content[0].employee;
    yield put(getListDemandeCongeIdsSuccess(data, user));
  } catch (e) {
    yield put(getListDemandeCongeIdsError());
  }
}

function* editDemandeCongesaga({ demandeConge, handleClose }) {
  console.log(demandeConge)
  try {
    const { number: page, size } = yield select(
      (state) => state.demandeConges.DemandeCongeIdsData
    );
    const user = yield select((state) => state.demandeConges.user);
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
    yield put(getListDemandeCongeIds(page, user.id, size));
  } catch (e) {
    yield put(editDemandeCongeError());
  }
}

function* deleteDemandeCongesaga({ demandeCongeId, handleClose}) {
  console.log(demandeCongeId)
  try {
    const { number: page, size } = yield select(
      (state) => state.demandeConges.DemandeCongeIdsData
    );
    const user = yield select((state) => state.demandeConges.user);
    const resp = yield call(fetch, `/demandeConge/delete/${demandeCongeId}`, {
      method: "DELETE",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(deleteDemandeCongeSuccess());
    yield handleClose();
    yield put(getListDemandeCongeIds(page, user.id, size));
  } catch (e) {
    yield put(deleteDemandeCongeError());
  }
}

export default function* saga() {
  yield takeLatest(GET_LIST_DEMANDE_CONGE_IDS, getListDemandeCongeIdsSaga);
  yield takeLatest(EDIT_DEMANDE_CONGE, editDemandeCongesaga);
  yield takeLatest(DELETE_DEMANDE_CONGE, deleteDemandeCongesaga);
}