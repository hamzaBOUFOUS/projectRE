import { takeLatest, call, put, select } from "redux-saga/effects";
import {
    loginError,
    loginSuccess,
    LOGIN,
    GET_LIST_USERS,
    getListUsers,
    getListUsersSuccess,
    getListUsersError,
    DELETE_USER,
    deleteUserSuccess,
    deleteUserError,
    ADD_EDIT_USER,
    addEditUserSuccess,
    addEditUserError,
} from "../stores/reducers/utilisateur/actions";

function* getListUsersSaga({ page, filter, size }) {
    try {
        const directionMetierResp = yield call(
            fetch,
            `/utilisateur/list-utilisateur?page=${page}&size=${size}`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(filter),
                method: "POST",
            }
        );
        if (directionMetierResp.status !== 200) {
            throw new Error();
        }
        const data = yield call(() => directionMetierResp.json());
        yield put(getListUsersSuccess(data));
    } catch (e) {
        yield put(getListUsersError());
    }
}

function* deleteUsersaga({ userId, handleClose }) {

    try {
        const { number: page, size } = yield select(
            (state) => state.users.UsersData
        );
        const filter = yield select((state) => state.users.UsersFilter);
        const resp = yield call(fetch, `/utilisateur/delete/${userId}`, {
            method: "DELETE",
        });
        if (resp.status !== 200) {
            throw new Error();
        }
        yield put(deleteUserSuccess());
        yield handleClose();
        yield put(getListUsers(page, filter, size));
    } catch (e) {
        yield put(deleteUserError());
    }
}

function* addEditUsersaga({ user, handleClose }) {
    try {
        const { number: page, size } = yield select(
            (state) => state.users.UsersData
        );
        const filter = yield select((state) => state.users.UsersFilter);
        const resp = yield call(fetch, "/utilisateur/add-edit", {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
            method: "POST",
        });
        if (resp.status !== 200) {
            throw new Error();
        }
        yield put(addEditUserSuccess());
        yield handleClose();
        yield put(getListUsers(page, filter, size));
    } catch (e) {
        yield put(addEditUserError());
    }
}

function* loginAdmin(formLogin) {
    console.log(formLogin)
    try {
        const resp = yield call(fetch, "/utilisateur/login", {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formLogin),
            method: "POST",
        });
        if (resp.status !== 200) {
            throw new Error();
        }
        const data = yield call(() => resp.json());
        yield put(loginSuccess(data));
    } catch (e) {
        yield put(loginError());
    }
}

export default function* saga() {
    yield takeLatest(LOGIN, loginAdmin);
    yield takeLatest(GET_LIST_USERS, getListUsersSaga);
    yield takeLatest(DELETE_USER, deleteUsersaga);
    yield takeLatest(ADD_EDIT_USER, addEditUsersaga);
}