import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-svg-spinner';

import {
    fetchFollowersRequest,
    fetchFollowersSuccess,
    fetchFollowersFailure
} from '../../actions/followers';
import {
    getIsFollowersFetching,
    getFollowersData
} from '../../reducers/followers';
import { getUserData, getUserError } from '../../reducers/users';

import Follower from '../Follower';

class FollowersCls extends Component {
    componentDidMount = () => {};

    render() {
        return <div>Мои подписчики</div>;
    }
}

const mapStateToProps = state => ({
    isFollowersFetching: getIsFollowersFetching(state),
    followers: getFollowersData(state),
    isUserError: getUserError(state)
});

const mapDispatchToProps = {
    fetchFollowersRequest,
    fetchFollowersSuccess,
    fetchFollowersFailure
};

export const Followers = connect(mapStateToProps, mapDispatchToProps)(
    FollowersCls
);
