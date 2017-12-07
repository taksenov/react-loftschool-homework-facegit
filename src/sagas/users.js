import { takeLatest, select, call, put, fork } from 'redux-saga/effects';
import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
    fetchTokenOwnerRequest
} from '../actions/users';
import {
    getUserData,
    getUserLogin
    // getIsFetching,
    // getIsFetched,
    // getError
} from '../reducers/users';
import requestFlow from './request';
import { getUserInformation, getTokenOwner } from '../api';

function* onFetchUserRequest() {
    // const userToken = yield select(getUserData);
    const userToken = yield select(getUserLogin);
    console.log(userToken);
    try {
        const user = yield call(getUserInformation, userToken);
        console.log(user);
        // yield put(fetchUserSuccess(user));
        const user2 = yield put(fetchUserSuccess(user));
        console.log(user2);
    } catch (error) {
        yield put(fetchUserFailure(error));
        console.log(error);
    }
} //onFetchUserRequest

export function* fetchUserWatch() {
    yield takeLatest(fetchUserRequest, onFetchUserRequest);
}

// export function* fetchUserSaga(action) {
//     try {
//         let response;
//         if (fetchTokenOwnerRequest.toString() === action.type) {
//             response = yield call(requestFlow, getTokenOwner, action.payload);
//         } else {
//             response = yield call(
//                 requestFlow,
//                 getUserInformation,
//                 action.payload
//             );
//         }
//         yield put(fetchUserSuccess(response));
//     } catch (error) {
//         console.log(error);
//         yield put(fetchUserFailure(error));
//     }
// }

// export function* fetchUserWatch() {
//     yield takeLatest([fetchUserRequest, fetchTokenOwnerRequest], fetchUserSaga);
// }
