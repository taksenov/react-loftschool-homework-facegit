import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute';
import AuthPage from '../AuthPage';
import UserPage from '../UserPage';

class AppRouter extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/login" exact component={AuthPage} />
                    <PrivateRoute path="/user/:name" component={UserPage} />
                    <Redirect to="/user/dex157" />
                </Switch>
            </div>
        );
    }
}

export default AppRouter;
