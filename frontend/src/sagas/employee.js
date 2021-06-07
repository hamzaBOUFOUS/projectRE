import { useSelector } from "react-redux";
import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  GET_LIST_EMPLOYEES,
  getListEmployees,
  getListEmployeesSuccess,
  getListEmployeesError,
  DELETE_EMPLOYEE,
  deleteEmployeeSuccess,
  deleteEmployeeError,
  ADD_EDIT_EMPLOYEE,
  addEditEmployeeSuccess,
  addEditEmployeeError,
} from "../stores/reducers/employee/actions";

function* getListEmployeesSaga({ page, filter, size }) {
  try {
    const directionMetierResp = yield call(
      fetch,
      `/employee/list-employee?page=${page}&size=${size}`,
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
    yield put(getListEmployeesSuccess(data));
  } catch (e) {
    yield put(getListEmployeesError());
  }
}

function* deleteEmployeesaga({ employeeId }) {
  try {
    const { number: page, size } = yield select(
      (state) => state.employees.employeesData
    );
    const filter = yield select((state) => state.employees.employeesFilter);
    const resp = yield call(fetch, `/employee/delete/${employeeId}`, {
      method: "DELETE",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(deleteEmployeeSuccess());
    yield put(getListEmployees(page, filter, size));
  } catch (e) {
    yield put(deleteEmployeeError());
  }
}

function* addEditEmployeesaga({ employee, handleClose }) {
  try {
    const resp = yield call(fetch, "/employee/add-edit", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
      method: "POST",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    yield put(addEditEmployeeSuccess());
    yield handleClose();
    yield put(getListEmployees(0, {}, 10));
  } catch (e) {
    console.log(e)
    yield put(addEditEmployeeError());
  }
}


export default function* saga() {
  yield takeLatest(GET_LIST_EMPLOYEES, getListEmployeesSaga);
  yield takeLatest(DELETE_EMPLOYEE, deleteEmployeesaga);
  yield takeLatest(ADD_EDIT_EMPLOYEE, addEditEmployeesaga);
}
