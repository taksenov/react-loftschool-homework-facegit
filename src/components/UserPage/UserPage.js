import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-svg-spinner';

import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
    fetchTokenOwnerRequest
} from '../../actions/users';
import { getIsFetching, getUserData } from '../../reducers/users';

import Followers from '../Followers';

class UserPage extends Component {
    static displayName = 'UserPage';

    constructor(props) {
        super(props);

        this.renderContent = this.renderContent.bind(this);
    } //constructor

    componentDidMount() {
        const { match, fetchUserRequest, fetchTokenOwnerRequest } = this.props;
        const userName = match.params.name;
        console.log(fetchUserRequest());

        if (userName === 'taksenov') {
            fetchTokenOwnerRequest();
        } else {
            fetchUserRequest(userName);
        }
    } //componentDidMount

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.name !== nextProps.match.params.name) {
            this.props.fetchUserRequest(nextProps.match.params.name);
        }
    } //componentWillReceiveProps

    renderContent() {
        const { user } = this.props;

        if (user === null) {
            return <p className="error">Пользователя не существует</p>;
        } else {
            return (
                <div className="UserPage__userData">
                    <div className="UserPage__avatar" />
                    <div className="UserPage__login">{user.login}</div>
                    <div className="UserPage__followers_count" />
                    <Followers />
                </div>
            );
        }
    } //renderContent

    render() {
        const { isFetching } = this.props;
        return (
            <div className="UserPage">
                {isFetching ? (
                    <Spinner size="64px" color="#66BEF2" gap={5} />
                ) : (
                    this.renderContent()
                )}
            </div>
        );
    } //render
}

const mapStateToProps = state => ({
    isFetching: getIsFetching(state),
    user: getUserData(state)
});

const mapDispatchToProps = {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
    fetchTokenOwnerRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
