import React from 'react';
import { NavLink } from "react-router-dom";
import personnelLogo from '/favicon.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md ms-auto nav-card-style" style={{ zIndex: 6 }}>
            <div className="container-fluid">
                <a className="navbar-brand me-1" href="#"><img src={personnelLogo} alt="purple personnel icon" width="32" height="32" /> </a>
                <button className="navbar-toggler ms-1" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/" className="nav-link fs-custom" aria-current="page">Home</NavLink>
                        <NavLink to="/projects" className="nav-link fs-custom">Projects</NavLink>
                        <NavLink to="/contacts" className="nav-link fs-custom">Contacts</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;