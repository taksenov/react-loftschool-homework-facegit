import React, { Component } from 'react';

class Follower extends Component {
    // TODO: до,авить передачу props

    render() {
        const image = '123';
        const userName = '1234';
        const userLink = '12345';

        return (
            <div>
                <div>
                    <img src={image} alt={userName} />
                    <br />
                    <a href={userLink}>{userName}</a>
                </div>
            </div>
        );
    }
}

export default Follower;
