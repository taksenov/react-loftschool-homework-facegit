import { createActions } from 'redux-actions';

export const { setToken, authorize, logout } = createActions({
    SET_TOKEN: undefined,
    AUTORIZE: undefined,
    LOGOUT: undefined
});
