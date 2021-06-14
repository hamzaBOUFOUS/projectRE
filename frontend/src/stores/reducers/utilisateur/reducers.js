import { createReducer } from "reduxsauce";
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_LIST_USERS,
  GET_LIST_USERS_SUCCESS,
  GET_LIST_USERS_ERROR,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR
} from "./actions";

const INITIAL_STATE = {
  loginData: null,
  isLoggedIn: null,
  UsersData: { content: [], number: 0, size: 10 },
  UsersFilter: {},
  status: null,
  deleteStatus: null,
};

const login = (state, action) => ({
  ...state,
  status: "loading",
});

const loginSuccess = (state, action) => ({
  ...state,
  loginData: action.data,
  status: "success",
});

const loginError = (state, action) => ({
  ...state,
  status: "error",
});

const getListUsers = (state, action) => ({
  ...state,
  status: "loading",
  UsersFilter: action.filter,
});

const getListUsersSuccess = (state, action) => ({
  ...state,
  UsersData: action.data,
  status: "success",
});

const getListUsersError = (state, action) => ({
  ...state,
  status: "error",
});

const deleteUser = (state, action) => ({
  ...state,
  deleteStatus: "loading",
});

const deleteUserSuccess = (state, action) => ({
  ...state,
  deleteStatus: "success",
});

const deleteUserError = (state, action) => ({
  ...state,
  deleteStatus: "error",
});

export const usersReducer = createReducer(INITIAL_STATE, {
  [LOGIN]: login,
  [LOGIN_SUCCESS]: loginSuccess,
  [LOGIN_ERROR]: loginError,
  [GET_LIST_USERS]: getListUsers,
  [GET_LIST_USERS_SUCCESS]: getListUsersSuccess,
  [GET_LIST_USERS_ERROR]: getListUsersError,
  [DELETE_USER]: deleteUser,
  [DELETE_USER_SUCCESS]: deleteUserSuccess,
  [DELETE_USER_ERROR]: deleteUserError,
});
