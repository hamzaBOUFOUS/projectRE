import { takeLatest, call, put } from "redux-saga/effects";
import {
  GET_LIST_MOTIFS,
  getListMotifsSuccess,
  getListMotifsError,
} from "../stores/reducers/motif/actions";

function* getListMotifsSaga() {
  try {
    const resp = yield call(fetch, "/motif/list-motif");
    if (resp.status !== 200) {
        throw new Error();
    }
    const data = yield call(() => resp.json());
    yield put(getListMotifsSuccess(data));
  } catch (e) {
    yield put(getListMotifsError());
  }
}

export default function* saga() {
  yield takeLatest(GET_LIST_MOTIFS, getListMotifsSaga);
}