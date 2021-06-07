import { createReducer } from "reduxsauce";
import {
  GET_LIST_DEPARTMENTS,
  GET_LIST_DEPARTMENTS_SUCCESS,
  GET_LIST_DEPARTMENTS_ERROR,
  DELETE_DEPARTMENT,
  DELETE_DEPARTMENT_SUCCESS,
  DELETE_DEPARTMENT_ERROR
} from "./actions";

const INITIAL_STATE = {
  DepartmentsData: { content: [], number: 0, size: 10 },
  DepartmentsFilter: {},
  status: null,
  deleteStatus: null,
};

const getListDepartments = (state, action) => ({
  ...state,
  status: "loading",
  DepartmentsFilter: action.filter,
});

const getListDepartmentsSuccess = (state, action) => ({
  ...state,
  DepartmentsData: action.data,
  status: "success",
});

const getListDepartmentsError = (state, action) => ({
  ...state,
  status: "error",
});

const deleteDepartment = (state, action) => ({
  ...state,
  deleteStatus: "loading",
});

const deleteDepartmentSuccess = (state, action) => ({
  ...state,
  deleteStatus: "success",
});

const deleteDepartmentError = (state, action) => ({
  ...state,
  deleteStatus: "error",
});

export const DepartmentsReducer = createReducer(INITIAL_STATE, {
  [GET_LIST_DEPARTMENTS]: getListDepartments,
  [GET_LIST_DEPARTMENTS_SUCCESS]: getListDepartmentsSuccess,
  [GET_LIST_DEPARTMENTS_ERROR]: getListDepartmentsError,
  [DELETE_DEPARTMENT]: deleteDepartment,
  [DELETE_DEPARTMENT_SUCCESS]: deleteDepartmentSuccess,
  [DELETE_DEPARTMENT_ERROR]: deleteDepartmentError,
});
