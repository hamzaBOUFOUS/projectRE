import { useSelector } from "react-redux";
import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  GET_LIST_POSTES,
  getListPostes,
  getListPostesSuccess,
  getListPostesError,
  DELETE_POSTE,
  deletePosteSuccess,
  deletePosteError,
  ADD_EDIT_POSTE,
  addEditPosteSuccess,
  addEditPosteError,
} from "../stores/reducers/poste/actions";

function* getListPostesSaga({ page, filter, size }) {
  try {
    const directionMetierResp = yield call(
      fetch,
      `/poste/list-poste?page=${page}&size=${size}`,
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
    yield put(getListPostesSuccess(data));
  } catch (e) {
    yield put(getListPostesError());
  }
}

function* deletePostesaga({ posteId, handleClose}) {
  
  try {
    const { number: page, size } = yield select(
      (state) => state.postes.PostesData
    );
    const filter = yield select((state) => state.postes.PostesFilter);
    const resp = yield call(fetch, `/poste/delete/${posteId}`, {
      method: "DELETE",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(deletePosteSuccess());
    yield handleClose();
    yield put(getListPostes(page, filter, size));
  } catch (e) {
    yield put(deletePosteError());
  }
}

function* addEditPostesaga({ poste, handleClose }) {
  try {
    const { number: page, size } = yield select(
      (state) => state.postes.PostesData
    );
    const filter = yield select((state) => state.postes.PostesFilter);
    const resp = yield call(fetch, "/poste/add-edit", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(poste),
      method: "POST",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(addEditPosteSuccess());
    yield handleClose();
    yield put(getListPostes(page, filter, size));
  } catch (e) {
    console.log(e)
    yield put(addEditPosteError());
  }
}

export default function* saga() {
  yield takeLatest(GET_LIST_POSTES, getListPostesSaga);
  yield takeLatest(DELETE_POSTE, deletePostesaga);
  yield takeLatest(ADD_EDIT_POSTE, addEditPostesaga);
}