import { createActions } from 'redux-actions';

export const {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure
} = createActions(
    {
        FETCH_USER_REQUEST: undefined,
        // FETCH_USER_SUCCESS: undefined,
        FETCH_USER_SUCCESS: data => data,
        FETCH_USER_FAILURE: undefined
    }
    // 'FETCH_USER_FAILURE',
    // 'FETCH_USER_REQUEST',
    // 'FETCH_USER_SUCCESS'
);

export const { fetchTokenOwnerRequest } = createActions({
    FETCH_TOKEN_OWNER_REQUEST: undefined
});
