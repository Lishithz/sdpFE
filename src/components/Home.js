//components/Home.js

import React from 'react';

function Home() {
    const userData = {
        username: 'User 123',
    };

    const username = userData ? userData.username : 'Unknown';

    return (
        <div>
            <h2>Welcome to the Real-Time Auction Platform</h2>
            <p>Hello, {username}!</p>
        </div>
    );
}

export default Home;