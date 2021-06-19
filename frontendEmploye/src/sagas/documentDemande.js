import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  GET_LIST_DOCUMENT_DEMANDE_IDS,
  getListDocumentDemandeIds,
  getListDocumentDemandeIdsSuccess,
  getListDocumentDemandeIdsError,
  EDIT_DOCUMENT_DEMANDE,
  editDocumentDemandeSuccess,
  editDocumentDemandeError,
  DELETE_DOCUMENT_DEMANDE,
  deleteDocumentDemandeSuccess,
  deleteDocumentDemandeError,
} from "../stores/reducers/documentDemande/actions";

function* getListDocumentDemandeIdsSaga({ page, id, size }) {
  try {
    const directionMetierResp = yield call(
      fetch,
      `/documentDemande/list-documentDemande/${id}?page=${page}&size=${size}`,{
        method: "POST",
      }
    );
    if (directionMetierResp.status !== 200) {
      throw new Error();
    }
    const data = yield call(() => directionMetierResp.json());
    yield put(getListDocumentDemandeIdsSuccess(data));
  } catch (e) {
    yield put(getListDocumentDemandeIdsError());
  }
}

function* editDocumentDemandesaga({ documentDemande, handleClose }) {
  try {
    const { number: page, size } = yield select(
      (state) => state.documentDemandes.DocumentDemandeIdsData
    );
    const user = JSON.parse(window.localStorage.getItem('tokenUser'));
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
    yield put(getListDocumentDemandeIds(page, user.id, size));
  } catch (e) {
    yield put(editDocumentDemandeError());
  }
}

function* deleteDocumentDemandesaga({ deleteDocumentDemandeId, handleClose}) {
  
  try {
    const { number: page, size } = yield select(
      (state) => state.documentDemandes.DocumentDemandeIdsData
    );
    const user = JSON.parse(window.localStorage.getItem('tokenUser'));
    const resp = yield call(fetch, `/documentDemande/delete/${deleteDocumentDemandeId}`, {
      method: "DELETE",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(deleteDocumentDemandeSuccess());
    yield handleClose();
    yield put(getListDocumentDemandeIds(page, user.id, size));
  } catch (e) {
    yield put(deleteDocumentDemandeError());
  }
}

export default function* saga() {
  yield takeLatest(GET_LIST_DOCUMENT_DEMANDE_IDS, getListDocumentDemandeIdsSaga);
  yield takeLatest(EDIT_DOCUMENT_DEMANDE, editDocumentDemandesaga);
  yield takeLatest(DELETE_DOCUMENT_DEMANDE, deleteDocumentDemandesaga);
}