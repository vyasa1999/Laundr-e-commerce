import React from 'react';
import { Link, NavLink as ActiveLink, withRouter } from 'react-router-dom';
import './Home.scss';

import Header from "../../components/Header/Header"


function Home() {
    return (
        <div className="landing">
            <div className="logo-overlay"></div>
            <Link className="btn btn-info" to='/products'>View Products</Link>
        </div>
    );
}

export default Home;
