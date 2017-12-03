import { takeLatest, select, call, put, fork } from 'redux-saga/effects';
import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure
} from '../actions/users';
import {
    getFetchUser,
    getIsFetching,
    getIsFetched,
    getError
} from '../reducers/users';
import { getUserInformation } from '../api';

function* onFetchUserRequest() {
    const userToken = yield select(getFetchUser);
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

// export default function*() {
//     yield fork(fetchUserWatch);
// }
