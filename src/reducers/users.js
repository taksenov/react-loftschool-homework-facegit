import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
    fetchTokenOwnerRequest
} from '../actions/users';
import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

const userData = handleActions(
    {
        [fetchTokenOwnerRequest]: state => ({
            ...state,
            isFetching: true,
            data: null,
            error: null
        }),
        [fetchUserRequest]: (state, action) => ({
            ...state,
            login: action.payload,
            data: null,
            error: null
        }),
        [fetchUserSuccess]: (state, action) => ({
            ...state,
            data: action.payload,
            error: null
        })
    },
    {
        login: null,
        data: null
    }
);

const error = handleActions(
    {
        [fetchUserFailure]: (state, action) => action.error,
        [fetchUserRequest]: () => null,
        [fetchUserSuccess]: () => null
    },
    null
);

const isFetching = handleActions(
    {
        [fetchUserRequest]: () => true,
        [fetchUserSuccess]: () => false,
        [fetchUserFailure]: () => false
    },
    false
);

const isFetched = handleActions(
    {
        [fetchUserRequest]: () => false,
        [fetchUserSuccess]: () => true,
        [fetchUserFailure]: () => true
    },
    false
);

export default combineReducers({
    error,
    userData,
    isFetched,
    isFetching
});

export const getUserData = state => state.users.userData;
export const getIsFetching = state => state.users.isFetching;
export const getIsFetched = state => state.users.isFetched;
export const getError = state => state.users.error;
