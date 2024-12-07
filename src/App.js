// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Members from './components/Members';
import Products from './components/Products';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
    return (
        <Router>
            <nav>
                <h1><center>Real Time Auction Platform</center></h1>
                <div>
                    <NavLink to="/" activeClassName="active">
                        Home
                    </NavLink>
                    <NavLink to="/categories" activeClassName="active">
                        Categories
                    </NavLink>
                    <NavLink to="/members" activeClassName="active">
                        Members
                    </NavLink>
                    <NavLink to="/products" activeClassName="active"> { }
                        Products
                    </NavLink>
                    <NavLink to="/Chatbot" activeClassName="active"> { }
                        Chat Bot
                    </NavLink>
                </div>
            </nav>

            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/products" element={<Products />} /> 
                    <Route path="/Chatbot" element={<Chatbot/>} /> 

                </Routes>
            </div>
        </Router>
    );
}

export default App;