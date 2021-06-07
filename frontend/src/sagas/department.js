import { useSelector } from "react-redux";
import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  GET_LIST_DEPARTMENTS,
  getListDepartments,
  getListDepartmentsSuccess,
  getListDepartmentsError,
  DELETE_DEPARTMENT,
  deleteDepartmentSuccess,
  deleteDepartmentError,
  ADD_EDIT_DEPARTMENT,
  addEditDepartmentSuccess,
  addEditDepartmentError,
} from "../stores/reducers/department/actions";

function* getListDepartmentsSaga({ page, filter, size }) {
  try {
    const directionMetierResp = yield call(
      fetch,
      `/department/list-department?page=${page}&size=${size}`,
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
    yield put(getListDepartmentsSuccess(data));
  } catch (e) {
    yield put(getListDepartmentsError());
  }
}

function* deleteDepartmentsaga({ departmentId, handleClose }) {
  try {
    const { number: page, size } = yield select(
      (state) => state.departments.DepartmentsData
    );
    const filter = yield select((state) => state.departments.DepartmentsFilter);
    const resp = yield call(fetch, `/department/delete/${departmentId}`, {
      method: "DELETE",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(deleteDepartmentSuccess());
    yield handleClose();
    yield put(getListDepartments(page, filter, size));
  } catch (e) {
    yield put(deleteDepartmentError());
  }
}

function* addEditDepartmentsaga({ department, handleClose }) {
  try {
    const { number: page, size } = yield select(
      (state) => state.departments.DepartmentsData
    );
    const filter = yield select((state) => state.departments.DepartmentsFilter);
    const resp = yield call(fetch, "/department/add-edit", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(department),
      method: "POST",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(addEditDepartmentSuccess());
    yield handleClose();
    yield put(getListDepartments(page, filter, size));
  } catch (e) {
    console.log(e)
    yield put(addEditDepartmentError());
  }
}


export default function* saga() {
  yield takeLatest(GET_LIST_DEPARTMENTS, getListDepartmentsSaga);
  yield takeLatest(DELETE_DEPARTMENT, deleteDepartmentsaga);
  yield takeLatest(ADD_EDIT_DEPARTMENT, addEditDepartmentsaga);
}
