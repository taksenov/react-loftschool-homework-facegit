import { takeLatest, select, call, put, fork } from 'redux-saga/effects';
import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
    fetchTokenOwnerRequest
} from '../actions/users';
import {
    getUserData,
    getIsFetching,
    getIsFetched,
    getError
} from '../reducers/users';
import { getUserInformation, getTokenOwner } from '../api';

function* onFetchUserRequest() {
    const userToken = yield select(getUserData);
    try {
        const user = yield call(getUserInformation, userToken);
        yield put(fetchUserSuccess(user));
    } catch (error) {
        yield put(fetchUserFailure(error));
    }
} //onFetchUserRequest

export function* fetchUserWatch() {
    yield takeLatest(fetchUserRequest, onFetchUserRequest);
}
