import { createReducer } from "reduxsauce";
import {
  GET_LIST_EMPLOYEES,
  GET_LIST_EMPLOYEES_SUCCESS,
  GET_LIST_EMPLOYEES_ERROR,
  DELETE_EMPLOYEE,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_ERROR
} from "./actions";

const INITIAL_STATE = {
  EmployeesData: { content: [], number: 0, size: 10 },
  EmployeesFilter: {},
  status: null,
  deleteStatus: null,
};

const getListEmployees = (state, action) => ({
  ...state,
  status: "loading",
  EmployeesFilter: action.filter,
});

const getListEmployeesSuccess = (state, action) => ({
  ...state,
  EmployeesData: action.data,
  status: "success",
});

const getListEmployeesError = (state, action) => ({
  ...state,
  status: "error",
});

const deleteEmployee = (state, action) => ({
  ...state,
  deleteStatus: "loading",
});

const deleteEmployeeSuccess = (state, action) => ({
  ...state,
  deleteStatus: "success",
});

const deleteEmployeeError = (state, action) => ({
  ...state,
  deleteStatus: "error",
});

export const EmployeesReducer = createReducer(INITIAL_STATE, {
  [GET_LIST_EMPLOYEES]: getListEmployees,
  [GET_LIST_EMPLOYEES_SUCCESS]: getListEmployeesSuccess,
  [GET_LIST_EMPLOYEES_ERROR]: getListEmployeesError,
  [DELETE_EMPLOYEE]: deleteEmployee,
  [DELETE_EMPLOYEE_SUCCESS]: deleteEmployeeSuccess,
  [DELETE_EMPLOYEE_ERROR]: deleteEmployeeError,
});
