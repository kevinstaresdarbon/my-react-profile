import React from 'react'
import Navbar from './Navbar'


function Header() {
    return (
        <header class="row" id="header" style={{maxHeight: '10rem', minWidth: 'calc(100vw - 18px)'}}>
            <div class="col-12 p-0">
                {/* <!-- card copied and modified from getbootstrap.com card element --> */}
                <div class="card rounded-0 border-0 h-100 w-100" style={{backgroundColor: '#800D98'}}>
                    <div class="card-body d-flex w-100 h-100">
                        <p class="card-title mb-0 me-2 p-3 fs-5 align-self-start nav-card-style fw-bold" style={{width: '9rem'}}>
                            Freelance Web Developer</p>
                        <Navbar />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;