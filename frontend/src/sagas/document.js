import { useSelector } from "react-redux";
import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  GET_LIST_DOCUMENTS,
  getListDocuments,
  getListDocumentsSuccess,
  getListDocumentsError,
  DELETE_DOCUMENT,
  deleteDocumentSuccess,
  deleteDocumentError,
  ADD_EDIT_DOCUMENT,
  addEditDocumentSuccess,
  addEditDocumentError,
} from "../stores/reducers/document/actions";

function* getListDocumentsSaga({ page, filter, size }) {
  try {
    const directionMetierResp = yield call(
      fetch,
      `/document/list-document?page=${page}&size=${size}`,
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
    yield put(getListDocumentsSuccess(data));
  } catch (e) {
    yield put(getListDocumentsError());
  }
}

function* deleteDocumentsaga({ documentId, handleClose}) {
  
  try {
    const { number: page, size } = yield select(
      (state) => state.documents.DocumentsData
    );
    const filter = yield select((state) => state.documents.DocumentsFilter);
    const resp = yield call(fetch, `/document/delete/${documentId}`, {
      method: "DELETE",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(deleteDocumentSuccess());
    yield handleClose();
    yield put(getListDocuments(page, filter, size));
  } catch (e) {
    yield put(deleteDocumentError());
  }
}

function* addEditDocumentsaga({ document, handleClose }) {
  try {
    const { number: page, size } = yield select(
      (state) => state.documents.DocumentsData
    );
    const filter = yield select((state) => state.documents.DocumentsFilter);
    const resp = yield call(fetch, "/document/add-edit", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(document),
      method: "POST",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(addEditDocumentSuccess());
    yield handleClose();
    yield put(getListDocuments(page, filter, size));
  } catch (e) {
    console.log(e)
    yield put(addEditDocumentError());
  }
}


export default function* saga() {
  yield takeLatest(GET_LIST_DOCUMENTS, getListDocumentsSaga);
  yield takeLatest(DELETE_DOCUMENT, deleteDocumentsaga);
  yield takeLatest(ADD_EDIT_DOCUMENT, addEditDocumentsaga);
}
