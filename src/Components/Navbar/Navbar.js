import React from 'react';
import { Link } from "react-router-dom"; 


const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper orange darken-1">
                <a className="brand-logo">AB</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/" >About</Link></li>
                        <li><Link to="/portfolio" >Portfolio</Link></li>
                        <li><Link to="/contact" >Contact</Link></li>
                    </ul>
                </div>
            </nav>
            
        </div>
    );
};

export default Navbar;