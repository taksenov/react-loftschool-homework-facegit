import React, { Component } from 'react';

import { authorize, logout } from '../../actions/auth';

import './AuthPage.css';

class AuthPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputToken: ''
        };

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChangeInput(e) {
        const { value } = e.target;
        this.setState({ inputToken: value });
    } //handleChangeInput

    handleKeyDown(e) {
        const { inputToken } = this.state;
        if (e.keyCode === 13 && inputToken) {
            console.log(inputToken);
            authorize(inputToken);
        }
    } //handleKeyDown
    //fb630bc15d7520e0a5a9354dec3d20d9b347911c

    render() {
        const { inputToken } = this.state;
        return (
            <div className="AuthPage">
                <p>
                    Получить токен нужно на своей странице github, перейдите по{' '}
                    <a href="https://github.com/settings/tokens">адресу</a> и
                    создать себе токен. Запишите куда нибудь токен, так как
                    после создания доступ к нему будет только один раз.
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
        );
    }
}

export default AuthPage;
