import { createReducer } from "reduxsauce";
import {
  CONSTRUCT_DASHBOARD,
  CONSTRUCT_DASHBOARD_SUCCESS,
  CONSTRUCT_DASHBOARD_ERROR,
} from "./actions";

const INITIAL_STATE = {
  dashboardData: null,
  status: null,
};

const constructDashboard = (state, action) => ({
  ...state,
  status: "loading",
});

const constructDashboardSuccess = (state, action) => ({
  ...state,
  dashboardData: action.data,
  status: "success",
});

const constructDashboardError = (state, action) => ({
  ...state,
  status: "error",
});

export const dashboardReducer = createReducer(INITIAL_STATE, {
  [CONSTRUCT_DASHBOARD]: constructDashboard,
  [CONSTRUCT_DASHBOARD_SUCCESS]: constructDashboardSuccess,
  [CONSTRUCT_DASHBOARD_ERROR]: constructDashboardError,
});
