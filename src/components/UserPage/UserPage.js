import React, { Component } from 'react';

import Followers from '../Followers';

class UserPage extends Component {
    render() {
        return (
            <div className="UserPage">
                <div className="UserPage_avatar" />
                <div className="UserPage_info" />
                <Followers />
            </div>
        );
    }
}

export default UserPage;
