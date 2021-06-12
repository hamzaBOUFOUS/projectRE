import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  GET_LIST_VACANCES,
  getListVacances,
  getListVacancesSuccess,
  getListVacancesError,
  DELETE_VACANCE,
  deleteVacanceSuccess,
  deleteVacanceError,
  ADD_EDIT_VACANCE,
  addEditVacanceSuccess,
  addEditVacanceError,
} from "../stores/reducers/vacance/actions";

function* getListVacancesSaga({ page, filter, size }) {
  try {
    const directionMetierResp = yield call(
      fetch,
      `/vacance/list-vacance?page=${page}&size=${size}`,
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
    yield put(getListVacancesSuccess(data));
  } catch (e) {
    yield put(getListVacancesError());
  }
}

function* deleteVacancesaga({ vacanceId, handleClose }) {
  try {
    const { number: page, size } = yield select(
      (state) => state.vacances.VacancesData
    );
    const filter = yield select((state) => state.vacances.VacancesFilter);
    const resp = yield call(fetch, `/vacance/delete/${vacanceId}`, {
      method: "DELETE",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(deleteVacanceSuccess());
    yield handleClose();
    yield put(getListVacances(page, filter, size));
  } catch (e) {
    yield put(deleteVacanceError());
  }
}

function* addEditVacancesaga({ vacance, handleClose }) {
  try {
    const { number: page, size } = yield select(
      (state) => state.vacances.VacancesData
    );
    const filter = yield select((state) => state.vacances.VacancesFilter);
    const resp = yield call(fetch, "/vacance/add-edit", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vacance),
      method: "POST",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(addEditVacanceSuccess());
    yield handleClose();
    yield put(getListVacances(page, filter, size));
  } catch (e) {
    console.log(e)
    yield put(addEditVacanceError());
  }
}


export default function* saga() {
  yield takeLatest(GET_LIST_VACANCES, getListVacancesSaga);
  yield takeLatest(DELETE_VACANCE, deleteVacancesaga);
  yield takeLatest(ADD_EDIT_VACANCE, addEditVacancesaga);
}
