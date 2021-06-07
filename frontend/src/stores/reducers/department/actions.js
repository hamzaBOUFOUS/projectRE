import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getListDepartments: ["page", "filter", "size"],
  getListDepartmentsSuccess: ["data"],
  getListDepartmentsError: [],
  deleteDepartment: ["departmentId", "handleClose"],
  deleteDepartmentSuccess: [],
  deleteDepartmentError: [],
  addEditDepartment: ["department", "handleClose"],
  addEditDepartmentSuccess: [],
  addEditDepartmentError: [],
});

const {
  GET_LIST_DEPARTMENTS,
  GET_LIST_DEPARTMENTS_SUCCESS,
  GET_LIST_DEPARTMENTS_ERROR,
  DELETE_DEPARTMENT,
  DELETE_DEPARTMENT_SUCCESS,
  DELETE_DEPARTMENT_ERROR,
  ADD_EDIT_DEPARTMENT,
  ADD_EDIT_DEPARTMENT_SUCCESS,
  ADD_EDIT_DEPARTMENT_ERROR,
} = Types;

const {
  getListDepartments,
  getListDepartmentsSuccess,
  getListDepartmentsError,
  deleteDepartment,
  deleteDepartmentSuccess,
  deleteDepartmentError,
  addEditDepartment,
  addEditDepartmentSuccess,
  addEditDepartmentError,
} = Creators;

export {
  GET_LIST_DEPARTMENTS,
  GET_LIST_DEPARTMENTS_SUCCESS,
  GET_LIST_DEPARTMENTS_ERROR,
  DELETE_DEPARTMENT,
  DELETE_DEPARTMENT_SUCCESS,
  DELETE_DEPARTMENT_ERROR,
  ADD_EDIT_DEPARTMENT,
  ADD_EDIT_DEPARTMENT_SUCCESS,
  ADD_EDIT_DEPARTMENT_ERROR,
  getListDepartments,
  getListDepartmentsSuccess,
  getListDepartmentsError,
  deleteDepartment,
  deleteDepartmentSuccess,
  deleteDepartmentError,
  addEditDepartment,
  addEditDepartmentSuccess,
  addEditDepartmentError,
};
