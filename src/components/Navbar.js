//components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Real-Time Auction Platform</Link>
            <div>
                <Link to="/">Home</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/members">Members</Link>
                <Link to="/products">Products</Link>
            </div>
        </nav>
    );
};

export default Navbar;