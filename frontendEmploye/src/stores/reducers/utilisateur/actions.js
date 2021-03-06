import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  login: ["formLogin","handleOpen"],
  loginSuccess: ["data"],
  loginError: [],
  updateUtilisateur: ["profilDTO","handleOpen"],
  updateUtilisateurSuccess: [],
  updateUtilisateurError: [],
  getListUsers: ["page", "filter", "size"],
  getListUsersSuccess: ["data"],
  getListUsersError: [],
  deleteUser: ["userId", "handleClose"],
  deleteUserSuccess: [],
  deleteUserError: [],
  addEditUser: ["user", "handleClose"],
  addEditUserSuccess: [],
  addEditUserError: [],
});

const { 
  LOGIN, 
  LOGIN_SUCCESS, 
  LOGIN_ERROR,
  GET_LIST_USERS,
  GET_LIST_USERS_SUCCESS,
  GET_LIST_USERS_ERROR,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  ADD_EDIT_USER,
  ADD_EDIT_USER_SUCCESS,
  ADD_EDIT_USER_ERROR,
  UPDATE_UTILISATEUR, 
  UPDATE_UTILISATEUR_SUCCESS, 
  UPDATE_UTILISATEUR_ERROR,
} = Types;
const { 
  login, 
  loginSuccess, 
  loginError,
  updateUtilisateur, 
  updateUtilisateurSuccess, 
  updateUtilisateurError,
  getListUsers,
  getListUsersSuccess,
  getListUsersError,
  deleteUser,
  deleteUserSuccess,
  deleteUserError,
  addEditUser,
  addEditUserSuccess,
  addEditUserError,
} = Creators;

export {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  UPDATE_UTILISATEUR, 
  UPDATE_UTILISATEUR_SUCCESS, 
  UPDATE_UTILISATEUR_ERROR,
  GET_LIST_USERS,
  GET_LIST_USERS_SUCCESS,
  GET_LIST_USERS_ERROR,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  ADD_EDIT_USER,
  ADD_EDIT_USER_SUCCESS,
  ADD_EDIT_USER_ERROR,
  getListUsers,
  getListUsersSuccess,
  getListUsersError,
  deleteUser,
  deleteUserSuccess,
  deleteUserError,
  addEditUser,
  addEditUserSuccess,
  addEditUserError,
  login,
  loginSuccess,
  loginError,
  updateUtilisateur, 
  updateUtilisateurSuccess, 
  updateUtilisateurError,
};
