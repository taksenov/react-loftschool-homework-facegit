import { takeLatest, select, call, put } from 'redux-saga/effects';
import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
    fetchTokenOwnerRequest
} from '../actions/users';
import { getUserLogin } from '../reducers/users';
import requestFlow from './request';
import { getUserInformation } from '../api';

function* onFetchUserRequest() {
    const userToken = yield select(getUserLogin);
    console.log(userToken);
    try {
        const user = yield call(getUserInformation, userToken);
        yield put(fetchUserSuccess(user));
    } catch (error) {
        console.log(error);
        yield put(fetchUserFailure(error));
    }
} //onFetchUserRequest

export function* fetchUserWatch() {
    yield takeLatest(fetchUserRequest, onFetchUserRequest);
}
