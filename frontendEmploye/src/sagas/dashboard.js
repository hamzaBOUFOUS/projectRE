import { takeEvery, put, call } from "redux-saga/effects";
import {
    constructDashboardError,
    constructDashboardSuccess,
    CONSTRUCT_DASHBOARD,
} from "../stores/reducers/dashboard/actions";

function* constructDashboard({id}) {
    try {
        const directionMetierResp = yield call(
          fetch, `/dashboardEmp/constructDashboard/${id}`,{
            method: "POST",
          }
        );
        if (directionMetierResp.status !== 200) {
          throw new Error();
        }
        const data = yield call(() => directionMetierResp.json());
        yield put(constructDashboardSuccess(data));
    } catch (e) {
        yield put(constructDashboardError());
    }
}

export default function* saga() {
    yield takeEvery(CONSTRUCT_DASHBOARD, constructDashboard);
}