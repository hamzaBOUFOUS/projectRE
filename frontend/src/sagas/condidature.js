import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  GET_LIST_CONDIDATURES,
  getListCondidatures,
  getListCondidaturesSuccess,
  getListCondidaturesError,
  DELETE_CONDIDATURE,
  deleteCondidatureSuccess,
  deleteCondidatureError,
  ADD_EDIT_CONDIDATURE,
  addEditCondidatureSuccess,
  addEditCondidatureError,
} from "../stores/reducers/condidature/actions";

function* getListCondidaturesSaga({ page, filter, size }) {
  try {
    const directionMetierResp = yield call(
      fetch,
      `/condidature/list-condidature?page=${page}&size=${size}`,
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
    yield put(getListCondidaturesSuccess(data));
  } catch (e) {
    yield put(getListCondidaturesError());
  }
}

function* deleteCondidaturesaga({ condidatureId, handleClose }) {
  try {
    const { number: page, size } = yield select(
      (state) => state.condidatures.CondidaturesData
    );
    const filter = yield select((state) => state.condidatures.CondidaturesFilter);
    const resp = yield call(fetch, `/condidature/delete/${condidatureId}`, {
      method: "DELETE",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(deleteCondidatureSuccess());
    yield handleClose();
    yield put(getListCondidatures(page, filter, size));
  } catch (e) {
    yield put(deleteCondidatureError());
  }
}

function* addEditCondidaturesaga({ condidature, file, handleClose }) {
  console.log(file)
  try {
    const { number: page, size } = yield select(
      (state) => state.condidatures.CondidaturesData
    );
    const formData = new FormData();
    if(file!==undefined){
      formData.append('file', file);
    }
    formData.append('idC', condidature.id);
    formData.append('cin', condidature.cin);
    formData.append('nom', condidature.nom);
    formData.append('prenom', condidature.prenom);
    formData.append('email', condidature.email);
    formData.append('telephone', condidature.telephone);
    formData.append('adresse', condidature.adresse);
    formData.append('dateDepot', condidature.dateDepot);
    const filter = yield select((state) => state.condidatures.CondidaturesFilter);
    const resp = yield call(fetch, file!==undefined?"/condidature/add-edit":"/condidature/add-editNull", {
      body: formData,
      method: "POST",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(addEditCondidatureSuccess());
    yield handleClose();
    yield put(getListCondidatures(page, filter, size));
  } catch (e) {
    console.log(e)
    yield put(addEditCondidatureError());
  }
}

export default function* saga() {
  yield takeLatest(GET_LIST_CONDIDATURES, getListCondidaturesSaga);
  yield takeLatest(DELETE_CONDIDATURE, deleteCondidaturesaga);
  yield takeLatest(ADD_EDIT_CONDIDATURE, addEditCondidaturesaga);
}
