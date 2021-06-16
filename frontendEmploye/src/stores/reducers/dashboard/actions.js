import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  constructDashboard: [],
  constructDashboardSuccess: ["data"],
  constructDashboardError: [],
});

const { CONSTRUCT_DASHBOARD, CONSTRUCT_DASHBOARD_SUCCESS, CONSTRUCT_DASHBOARD_ERROR } = Types;
const { constructDashboard, constructDashboardSuccess, constructDashboardError } = Creators;

export {
  CONSTRUCT_DASHBOARD,
  CONSTRUCT_DASHBOARD_SUCCESS,
  CONSTRUCT_DASHBOARD_ERROR,
  constructDashboard,
  constructDashboardSuccess,
  constructDashboardError,
};
