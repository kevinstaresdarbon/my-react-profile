import React from 'react';
import personnelLogo from '/favicon.png';

function Navbar(){
    return (
        <nav class="navbar navbar-expand-md ms-auto nav-card-style" style={{zIndex: 6}}>
            <div class="container-fluid">
                <a class="navbar-brand me-1" href="#"><img src={personnelLogo} alt="purple personnel icon" width="32" height="32" /> </a>
                <button class="navbar-toggler ms-1" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link fs-custom" aria-current="page" href="#about">About</a>
                        <a class="nav-link fs-custom" href="#skills">Skills</a>
                        <a class="nav-link fs-custom" href="#work">Work</a>
                        <a class="nav-link fs-custom" href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;