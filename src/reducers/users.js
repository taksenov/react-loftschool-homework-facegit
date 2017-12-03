import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure
} from '../actions/users';
import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

const fetchUser = handleActions(
    {
        [fetchUserRequest]: (state, action) => ({
            ...state,
            login: action.payload,
            data: null
        }),
        [fetchUserSuccess]: (state, action) => ({
            ...state,
            data: action.payload
        })
    },
    {
        login: null,
        data: null
    }
);

const error = handleAction(
    fetchUserFailure,
    (state, action) => action.error,
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
    fetchUser,
    isFetched,
    isFetching
});

export const getFetchUser = state => state.users.fetchUser;
export const getIsFetching = state => state.users.isFetching;
export const getIsFetched = state => state.users.isFetched;
export const getError = state => state.users.error;
