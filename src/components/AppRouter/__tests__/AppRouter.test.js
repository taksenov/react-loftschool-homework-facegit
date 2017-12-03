import React from 'react';
import { shallow } from 'enzyme';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppRouter from '../AppRouter';

describe('AppRouter >', () => {
    it('should render AppRouter > Switch', () => {
        const renderedComponent = shallow(<AppRouter />);

        // // Выведем отрендеренный компонент
        // console.log(renderedComponent.debug());

        expect(renderedComponent.find('Switch')).toBeTruthy();
    });
    it('should render AppRouter > PrivateRoute with path="/user/:name"', () => {
        const renderedComponent = shallow(<AppRouter />);

        expect(
            renderedComponent.find('Connect(PrivateRoute)').find({
                path: '/user/:name'
            })
        ).toBeTruthy();
    });
    it('should render AppRouter > Route with path="/login"', () => {
        const renderedComponent = shallow(<AppRouter />);

        expect(
            renderedComponent.find('Route').find({
                path: '/login'
            })
        ).toBeTruthy();
    });
    it('should render AppRouter > Redirect to="/user/dex157"', () => {
        const renderedComponent = shallow(<AppRouter />);

        expect(
            renderedComponent.find('Redirect').find({
                to: '/user/dex157'
            })
        ).toBeTruthy();
    });
});
