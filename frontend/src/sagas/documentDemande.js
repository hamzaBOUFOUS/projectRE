import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  GET_LIST_DOCUMENT_DEMANDES,
  getListDocumentDemandes,
  getListDocumentDemandesSuccess,
  getListDocumentDemandesError,
  EDIT_DOCUMENT_DEMANDE,
  editDocumentDemandeSuccess,
  editDocumentDemandeError,
} from "../stores/reducers/documentDemande/actions";

function* getListDocumentDemandesSaga({ page, filter, size }) {
  try {
    const directionMetierResp = yield call(
      fetch,
      `/documentDemande/list-documentDemande?page=${page}&size=${size}`,
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
    yield put(getListDocumentDemandesSuccess(data));
  } catch (e) {
    yield put(getListDocumentDemandesError());
  }
}

function* editDocumentDemandesaga({ documentDemande, handleClose }) {
  try {
    const { number: page, size } = yield select(
      (state) => state.documentDemandes.DocumentDemandesData
    );
    const filter = yield select((state) => state.documentDemandes.DocumentDemandesFilter);
    const resp = yield call(fetch, "/documentDemande/add-edit", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(documentDemande),
      method: "POST",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(editDocumentDemandeSuccess());
    yield handleClose();
    yield put(getListDocumentDemandes(page, filter, size));
  } catch (e) {
    yield put(editDocumentDemandeError());
  }
}


export default function* saga() {
  yield takeLatest(GET_LIST_DOCUMENT_DEMANDES, getListDocumentDemandesSaga);
  yield takeLatest(EDIT_DOCUMENT_DEMANDE, editDocumentDemandesaga);
}