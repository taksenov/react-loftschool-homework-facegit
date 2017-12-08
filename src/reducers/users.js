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
        [fetchUserFailure]: (state, { payload }) => ({
            ...state,
            isFetching: false,
            isFetched: true,
            data: null,
            error: payload
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

export const getUserLogin = state => state.users.login;
export const getUserData = state => state.users.data;
export const getIsFetching = state => state.users.isFetching;
export const getUserError = state => state.users.error;
