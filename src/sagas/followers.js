import { takeLatest, select, call, put } from 'redux-saga/effects';
import {
    fetchFollowersRequest,
    fetchFollowersSuccess,
    fetchFollowersFailure
} from '../actions/users';
import { getUserLogin } from '../reducers/followers';
import { getUserFollowers } from '../api';

function* onFetchFollowersRequest() {
    const userToken = yield select(getUserLogin);
    console.log(userToken);
    try {
        const user = yield call(getUserFollowers, userToken);
        yield put(fetchFollowersSuccess(user));
    } catch (error) {
        console.log(error);
        yield put(fetchFollowersFailure(error));
    }
} //onFetchFollowersRequest

export function* fetchFollowersWatch() {
    yield takeLatest(fetchFollowersRequest, onFetchFollowersRequest);
}
