import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure
} from '../../actions/users';
import { getIsFetching } from '../../reducers/users';

import Followers from '../Followers';

class UserPage extends Component {
    constructor(props) {
        super(props);

        this.State = {
            test: ''
        };
    } //constructor

    componentDidMount() {
        const { fetchUserRequest } = this.props;
        console.log(fetchUserRequest());
    } //componentDidMount

    componentWillReceiveProps() {} //componentWillReceiveProps

    render() {
        const { isFetching } = this.props;
        return (
            <div className="UserPage">
                <div className="UserPage__avatar" />
                <div className="UserPage__login" />
                <div className="UserPage__followers_count" />
                <Followers />
            </div>
        );
    } //render
}

const mapStateToProps = state => ({
    isFetching: getIsFetching(state)
});

const mapDispatchToProps = {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

// getFetchUser
// getIsFetching
// getIsFetched
// getError
