import { takeEvery, put, call } from "redux-saga/effects";
import {
    constructDashboardError,
    constructDashboardSuccess,
    CONSTRUCT_DASHBOARD,
} from "../stores/reducers/dashboard/actions";

function* constructDashboard() {
    try {
        const resp = yield call(fetch, "/dashboard/constructDashboard");
        if (resp.status !== 200) {
            throw new Error();
        }
        const data = yield call(() => resp.json());
        yield put(constructDashboardSuccess(data));
    } catch (e) {
        yield put(constructDashboardError());
    }
}

export default function* saga() {
    yield takeEvery(CONSTRUCT_DASHBOARD, constructDashboard);
}