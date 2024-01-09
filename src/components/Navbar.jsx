import React from 'react';
import personnelLogo from '/favicon.png';

function Navbar(){
    return (
        <nav className="navbar navbar-expand-md ms-auto nav-card-style" style={{zIndex: 6}}>
            <div className="container-fluid">
                <a className="navbar-brand me-1" href="#"><img src={personnelLogo} alt="purple personnel icon" width="32" height="32" /> </a>
                <button className="navbar-toggler ms-1" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link fs-custom" aria-current="page" href="#home">Home</a>
                        <a className="nav-link fs-custom" href="#skills">Skills</a>
                        <a className="nav-link fs-custom" href="#projects">Projects</a>
                        <a className="nav-link fs-custom" href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;