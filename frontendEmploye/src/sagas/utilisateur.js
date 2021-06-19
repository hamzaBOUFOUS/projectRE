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
    UPDATE_UTILISATEUR,
    updateUtilisateurSuccess,
    updateUtilisateurError,
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

function* updateUtilisateur({profilDTO, handleOpen}) {
    try {
        const resp = yield call(fetch, "/utilisateur/updateUtilisateur", {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(profilDTO),
            method: "POST",
        });
        if (resp.status !== 200) {
            throw new Error();
        }
        const data = yield call(() => resp.json());
        window.localStorage.setItem('tokenUser',JSON.stringify(data));
        yield handleOpen();
        yield put(updateUtilisateurSuccess());
    } catch (e) {
        yield put(updateUtilisateurError());
    }
}

function* loginAdmin({formLogin, handleOpen}) {
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
        
        if(data===false || data.role === "ADMIN"){
            console.log(data)
            yield handleOpen(false);
        }else if(data.role === "EMPLOYE"){
            window.localStorage.setItem('tokenUser',JSON.stringify(data));
            yield handleOpen(true);
        }
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
    yield takeLatest(UPDATE_UTILISATEUR, updateUtilisateur);
}