import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getListEmployees: ["page", "filter", "size"],
  getListEmployeesSuccess: ["data"],
  getListEmployeesError: [],
  deleteEmployee: ["employeeId"],
  deleteEmployeeSuccess: [],
  deleteEmployeeError: [],
  addEditEmployee: ["employee", "handleClose"],
  addEditEmployeeSuccess: [],
  addEditEmployeeError: [],
});

const {
  GET_LIST_EMPLOYEES,
  GET_LIST_EMPLOYEES_SUCCESS,
  GET_LIST_EMPLOYEES_ERROR,
  DELETE_EMPLOYEE,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_ERROR,
  ADD_EDIT_EMPLOYEE,
  ADD_EDIT_EMPLOYEE_SUCCESS,
  ADD_EDIT_EMPLOYEE_ERROR,
} = Types;

const {
  getListEmployees,
  getListEmployeesSuccess,
  getListEmployeesError,
  deleteEmployee,
  deleteEmployeeSuccess,
  deleteEmployeeError,
  addEditEmployee,
  addEditEmployeeSuccess,
  addEditEmployeeError,
} = Creators;

export {
  GET_LIST_EMPLOYEES,
  GET_LIST_EMPLOYEES_SUCCESS,
  GET_LIST_EMPLOYEES_ERROR,
  DELETE_EMPLOYEE,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_ERROR,
  ADD_EDIT_EMPLOYEE,
  ADD_EDIT_EMPLOYEE_SUCCESS,
  ADD_EDIT_EMPLOYEE_ERROR,
  getListEmployees,
  getListEmployeesSuccess,
  getListEmployeesError,
  deleteEmployee,
  deleteEmployeeSuccess,
  deleteEmployeeError,
  addEditEmployee,
  addEditEmployeeSuccess,
  addEditEmployeeError,
};
