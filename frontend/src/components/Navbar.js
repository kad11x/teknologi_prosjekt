import React from 'react';
import { Link } from 'react-router-dom';
import Inlogging from './sider/Inlogging';


function Navbar() {

    return (
        <div className="navbar">
            <a  id='logo' href="/skole" >
                <img className= 'brand-logo'src="" alt="Brand logo" />
            </a>
            <Link to="/">
            <button type="button" class="btn btn-outline-primary">Log Out</button>
            </Link>
        </div>
    );
}

export default Navbar;



