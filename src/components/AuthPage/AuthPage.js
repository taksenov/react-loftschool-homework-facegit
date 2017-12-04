import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authorize, logout } from '../../actions/auth';
import { getIsAuthorized, getIsLogout } from '../../reducers/auth';

import './AuthPage.css';

class AuthPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputToken: ''
        };

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleChangeInput(e) {
        const { value } = e.target;
        this.setState({ inputToken: value });
    } //handleChangeInput

    handleKeyDown(e) {
        const { inputToken } = this.state;
        const { authorize } = this.props;
        if (e.keyCode === 13 && inputToken) {
            console.log(inputToken);
            authorize(inputToken);
        }
    } //handleKeyDown
    //fb630bc15d7520e0a5a9354dec3d20d9b347911c

    handleLogOut(e) {
        const { logout } = this.props;
        logout();
    } //handleLogOut

    render() {
        const { inputToken } = this.state;
        const { isAuthorized } = this.props;
        return (
            <div className="AuthPage">
                {isAuthorized ? (
                    <button
                        type="button"
                        className="AuthPage__logout"
                        onClick={this.handleLogOut}
                    >
                        Выход
                    </button>
                ) : (
                    <div className="AuthPage__login">
                        <p>
                            Получить токен нужно на своей странице github,
                            перейдите по{' '}
                            <a href="https://github.com/settings/tokens">
                                адресу
                            </a>{' '}
                            и создайте токен. Запишите куда нибудь токен, так
                            как после создания доступ к нему будет только один
                            раз.
                        </p>
                        <br />
                        <input
                            placeholder="Введите токен"
                            type="text"
                            onChange={this.handleChangeInput}
                            value={inputToken}
                            onKeyDown={this.handleKeyDown}
                        />
                        <br />
                        <p>После ввода нажать Enter</p>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state),
    isLogout: getIsLogout(state)
});

const mapDispatchToProps = {
    authorize,
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
