import React from 'react';
import { shallow } from 'enzyme';
import Spinner from 'react-svg-spinner';

import { UserPageCls as UserPage } from '../index';

describe('UserPage >', () => {
    const wrapper = shallow(
        <UserPage
            match={{ params: { name: 'test-name' } }}
            fetchUserRequest={jest.fn()}
        />
    );

    // Выведем отрендеренный компонент
    // console.log(wrapper.debug());

    describe('check presence of instance methods >', () => {
        it('contain instance method componentDidMount', () => {
            expect(wrapper.instance().componentDidMount).toBeDefined();
        });

        it('contain instance method componentWillReceiveProps', () => {
            expect(wrapper.instance().componentWillReceiveProps).toBeDefined();
        });
    });
    describe('check spinner or loader if props.isFetching === true >', () => {
        it('find Spinner', () => {
            wrapper.setProps({
                isFetching: true
            });

            expect(wrapper.find(Spinner)).toHaveLength(1);
        });
    });
    describe('check message of not user if isFetching === false && user == null >', () => {
        it('find UserPage__error message', () => {
            wrapper.setProps({
                isFetching: false,
                user: null
            });
            expect(wrapper.find('.UserPage__error')).toBeTruthy();
        });
    });
    describe('check mock if user is present >', () => {
        it('find UserPage__avatar', () => {
            wrapper.setProps({
                isFetching: false,
                user: {
                    login: 'test-user'
                }
            });
            expect(wrapper.find('.UserPage__avatar')).toBeTruthy();
        });
        it('find UserPage__login with user.login === test-user', () => {
            wrapper.setProps({
                isFetching: false,
                user: {
                    login: 'test-user'
                }
            });
            expect(
                wrapper.find('.UserPage__login').getElement().props.children
            ).toEqual('test-user');
        });
    });
    //TODO: подготовить, после того как сделаю компоненты Followers
    // В основной верстке должен быть:
    // количество фаловеров пользователя,
    // компонент Followers с передачей login через props.
});
