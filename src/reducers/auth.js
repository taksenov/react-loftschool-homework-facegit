import { setToken, authorize, logout } from '../actions/auth';
import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

const token = handleAction(setToken, (state, action) => action.payload, null);

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
    token,
    isAuthorized,
    isLogout
});

export const getToken = state => state.auth.token;
export const getIsAuthorized = state => state.auth.isAuthorized;
export const getIsLogout = state => state.auth.isLogout;

// import { handleActions } from 'redux-actions';
// import { authorize, logout } from '../actions/auth';

// export default handleActions(
//     {
//         [authorize]: () => ({ isAuthorized: true }),
//         [logout]: () => ({ isAuthorized: false })
//     },
//     {
//         isAuthorized: false
//     }
// );

// export const getToken = state => state.auth.token;
// export const getIsAuthorized = state => state.auth.isAuthorized;
// export const getIsLogout = state => state.auth.isLogout;
