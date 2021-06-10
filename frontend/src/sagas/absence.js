import { useSelector } from "react-redux";
import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  GET_LIST_ABSENCES,
  getListAbsences,
  getListAbsencesSuccess,
  getListAbsencesError,
  DELETE_ABSENCE,
  deleteAbsenceSuccess,
  deleteAbsenceError,
  ADD_EDIT_ABSENCE,
  addEditAbsenceSuccess,
  addEditAbsenceError,
} from "../stores/reducers/absence/actions";

function* getListAbsencesSaga({ page, filter, size }) {
  try {
    const directionMetierResp = yield call(
      fetch,
      `/absence/list-absence?page=${page}&size=${size}`,
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
    yield put(getListAbsencesSuccess(data));
  } catch (e) {
    yield put(getListAbsencesError());
  }
}

function* deleteAbsencesaga({ absenceId, handleClose }) {
  try {
    const { number: page, size } = yield select(
      (state) => state.absences.AbsencesData
    );
    const filter = yield select((state) => state.absences.AbsencesFilter);
    const resp = yield call(fetch, `/absence/delete/${absenceId}`, {
      method: "DELETE",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(deleteAbsenceSuccess());
    yield handleClose();
    yield put(getListAbsences(page, filter, size));
  } catch (e) {
    yield put(deleteAbsenceError());
  }
}

function* addEditAbsencesaga({ absence, handleClose }) {
  try {
    const { number: page, size } = yield select(
      (state) => state.absences.AbsencesData
    );
    const filter = yield select((state) => state.absences.AbsencesFilter);
    const resp = yield call(fetch, "/absence/add-edit", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(absence),
      method: "POST",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(addEditAbsenceSuccess());
    yield handleClose();
    yield put(getListAbsences(page, filter, size));
  } catch (e) {
    yield put(addEditAbsenceError());
  }
}


export default function* saga() {
  yield takeLatest(GET_LIST_ABSENCES, getListAbsencesSaga);
  yield takeLatest(DELETE_ABSENCE, deleteAbsencesaga);
  yield takeLatest(ADD_EDIT_ABSENCE, addEditAbsencesaga);
}
