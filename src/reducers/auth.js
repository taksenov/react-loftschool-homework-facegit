import { authorize, logout } from '../actions/auth';
import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

const isAuthorized = handleActions(
    {
        [authorize]: () => true,
        [logout]: () => false
    },
    false
);

const isLogout = handleActions(
    {
        [authorize]: () => false,
        [logout]: () => true
    },
    true
);

export default combineReducers({
    isAuthorized,
    isLogout
});

export const getIsAuthorized = state => state.auth.isAuthorized;
export const getIsLogout = state => state.auth.isLogout;
