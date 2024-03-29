import React from 'react'
import Navbar from './Navbar'


function Header() {
    return (
        <header className="row" id="header" style={{maxHeight: '10rem', minWidth: '100vw'}}>
            <div className="col-12 p-0 m-0 w-100">
                {/* <!-- card copied and modified from getbootstrap.com card element --> */}
                <div className="card rounded-0 border-0 px-2 h-100 w-100" style={{backgroundColor: '#800D98'}}>
                    <div className="card-body d-flex w-100 h-100">
                        <p className="card-title mb-0 me-2 p-3 fs-5 align-self-start nav-card-style fw-bold" style={{width: '9rem'}}>
                            Freelance Web Developer</p>
                        <Navbar />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;