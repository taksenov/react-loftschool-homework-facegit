import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure
} from '../../actions/users';
import users from '../users';

describe('Reducer users:', () => {
    describe('check action fetchUserRequest', () => {
        it('change isFetching', () => {
            const next = users({ isFetching: false }, fetchUserRequest());
            expect(next.isFetching).toBeTruthy();
        });
        it('change isFetched', () => {
            const next = users({ isFetched: true }, fetchUserRequest());
            expect(next.isFetched).not.toBeTruthy();
        });
        it('clear data field', () => {
            const next = users({ data: 'NOT_NULL' }, fetchUserRequest());
            expect(next.data).toBe(null);
        });
        it('clear error field', () => {
            const next = users(
                { error: 'ERROR_IS_ENABLED' },
                fetchUserRequest()
            );
            expect(next.error).toBe(null);
        });
    }); //fetchUserRequest
    describe('check action fetchUserSuccess', () => {
        const testPayload = { data: { login: 'TEST_USER_LOGIN' } };
        it('change isFetching', () => {
            const next = users(
                { isFetching: true },
                fetchUserSuccess(testPayload)
            );
            expect(next.isFetching).toBe(false);
        });
        it('change isFetched', () => {
            const next = users(
                { isFetched: false },
                fetchUserSuccess(testPayload)
            );
            expect(next.isFetched).toBeTruthy();
        });
        it('change data field', () => {
            const next = users({}, fetchUserSuccess(testPayload));
            expect(next.data.login).toBe('TEST_USER_LOGIN');
        });
        it('clear error field', () => {
            const next = users(
                { error: 'ERROR_IS_ENABLED' },
                fetchUserSuccess(testPayload)
            );
            expect(next.error).toBe(null);
        });
    }); //fetchUserSuccess

    describe('check action fetchUserFailure', () => {
        it('change isFetching', () => {
            const next = users({ isFetching: true }, fetchUserFailure());
            expect(next.isFetching).toBe(false);
        });
        it('change isFetched', () => {
            const next = users({ isFetched: false }, fetchUserFailure());
            expect(next.isFetched).toBeTruthy();
        });
        it('set error field', () => {
            const next = users(
                { error: 'NO_ERROR' },
                fetchUserFailure('404_ERROR')
            );
            expect(next.error).toBe('404_ERROR');
        });
    }); //fetchUserFailure
});
