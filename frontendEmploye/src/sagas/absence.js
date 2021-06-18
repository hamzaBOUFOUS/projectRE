import { takeLatest, call, put } from "redux-saga/effects";
import {
  GET_LIST_ABSENCE_IDS,
  getListAbsenceIdsSuccess,
  getListAbsenceIdsError,
} from "../stores/reducers/absence/actions";

function* getListAbsenceIdsSaga({ page, id, size }) {
  try {
    const directionMetierResp = yield call(
      fetch, `/absence/list-absence/${id}?page=${page}&size=${size}`,{
        method: "POST",
      }
    );
    if (directionMetierResp.status !== 200) {
      throw new Error();
    }
    const data = yield call(() => directionMetierResp.json());
    yield put(getListAbsenceIdsSuccess(data));
  } catch (e) {
    yield put(getListAbsenceIdsError());
  }
}

export default function* saga() {
  yield takeLatest(GET_LIST_ABSENCE_IDS, getListAbsenceIdsSaga);
}
