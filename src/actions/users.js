import { createActions } from 'redux-actions';

export const {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure
} = createActions({
    FETCH_USER_REQUEST: undefined,
    FETCH_USER_SUCCESS: ({ data }) => data,
    FETCH_USER_FAILURE: undefined
});

export const { fetchTokenOwnerRequest } = createActions({
    FETCH_TOKEN_OWNER_REQUEST: undefined
});
