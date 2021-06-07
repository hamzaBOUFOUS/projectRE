import { useSelector } from "react-redux";
import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  GET_LIST_EVENEMENTS,
  getListEvenements,
  getListEvenementsSuccess,
  getListEvenementsError,
  DELETE_EVENEMENT,
  deleteEvenementSuccess,
  deleteEvenementError,
  ADD_EDIT_EVENEMENT,
  addEditEvenementSuccess,
  addEditEvenementError,
} from "../stores/reducers/evenement/actions";

function* getListEvenementsSaga({ page, filter, size }) {
  try {
    const directionMetierResp = yield call(
      fetch,
      `/evenement/list-evenement?page=${page}&size=${size}`,
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
    //console.log(data," - ",page," - ",filter," - ",size);
    yield put(getListEvenementsSuccess(data));
  } catch (e) {
    yield put(getListEvenementsError());
  }
}

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
    yield put(getListEvenements(page, filter, size));
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
    yield put(getListEvenements(page, filter, size));
  } catch (e) {
    console.log(e)
    yield put(addEditEvenementError());
  }
}


export default function* saga() {
  yield takeLatest(GET_LIST_EVENEMENTS, getListEvenementsSaga);
  yield takeLatest(DELETE_EVENEMENT, deleteEvenementsaga);
  yield takeLatest(ADD_EDIT_EVENEMENT, addEditEvenementsaga);
}
