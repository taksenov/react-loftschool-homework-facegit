import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute';

// TODO: Убрать заглушку!
let PrivatePage = '';
let LoginPage = '';

class AppRouter extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/login" exact component={LoginPage} />
                    <PrivateRoute path="/user/:name" component={PrivatePage} />
                    <Redirect to="/user/dex157" />
                </Switch>
            </div>
        );
    }
}

export default AppRouter;
