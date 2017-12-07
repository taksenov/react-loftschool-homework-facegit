// import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';
import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
    fetchTokenOwnerRequest
} from '../actions/users';

export default handleActions(
    {
        [fetchTokenOwnerRequest]: state => ({
            ...state,
            isFetching: true,
            isFetched: true,
            data: null,
            error: null
        }),
        [fetchUserRequest]: (state, { payload }) => ({
            ...state,
            isFetching: true,
            isFetched: false,
            login: payload,
            data: null,
            error: null
        }),
        [fetchUserSuccess]: (state, { payload }) => ({
            ...state,
            isFetching: false,
            isFetched: true,
            data: payload,
            error: null
        }),
        [fetchUserFailure]: (state, { error }) => ({
            ...state,
            isFetching: false,
            isFetched: true,
            data: null,
            error: error
        })
    },
    {
        isFetching: false,
        isFetched: false,
        login: null,
        data: null,
        error: null
    }
);

// const userData = handleActions(
//     {
//         [fetchTokenOwnerRequest]: state => ({
//             ...state,
//             isFetching: true,
//             data: null,
//             error: null
//         }),
//         [fetchUserRequest]: (state, action) => ({
//             ...state,
//             login: action.payload,
//             data: null,
//             error: null
//         }),
//         [fetchUserSuccess]: (state, action) => ({
//             ...state,
//             data: action.payload,
//             error: null
//         })
//     },
//     {
//         login: null,
//         data: null
//     }
// );

// const error = handleActions(
//     {
//         [fetchUserFailure]: (state, action) => action.error,
//         [fetchUserRequest]: () => null,
//         [fetchUserSuccess]: () => null
//     },
//     null
// );

// const isFetching = handleActions(
//     {
//         [fetchUserRequest]: () => true,
//         [fetchUserSuccess]: () => false,
//         [fetchUserFailure]: () => false
//     },
//     false
// );

// const isFetched = handleActions(
//     {
//         [fetchUserRequest]: () => false,
//         [fetchUserSuccess]: () => true,
//         [fetchUserFailure]: () => true
//     },
//     false
// );

// export default combineReducers({
//     error,
//     userData,
//     isFetched,
//     isFetching
// });

// export const getUserData = state => state.users.data
// export const getUserIsFetching = state => state.users.isFetching
// export const getUserData = state => state.users.userData;
// export const getUserData = state => state.users.data;
export const getUserLogin = state => state.users.login;
export const getUserData = state => state.users.data;
export const getIsFetching = state => state.users.isFetching;

// export const getIsFetched = state => state.users.isFetched;
// export const getError = state => state.users.error;
