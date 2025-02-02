import React from 'react'
import heroPNG from '/02-hero-bg-min.png';
import OffCanvas from './OffCanvas'


function Header() {
    return (
        <header className="col-11 p-0 m-0 d-flex flex-column justify-content-center align-items-center">
            {/* <!-- card copied and modified from getbootstrap.com card element --> */}
            <div className="d-flex flex-row card rounded-0 border-0 justify-content-center align-items-center" style={{ backgroundColor: '#800D98'}}>

                <img src={heroPNG}
                    style={{ objectFit: 'cover', width: 'calc((100vw * 11/12))', height: '10rem', opacity: '0.69' }} />

                <div className="card-img-overlay p-2 m-0 d-flex flex-row justify-content-center">
                    <div className='col-3 col-lg-4 d-flex'>
                        {/* <p className="mb-0 me-2 p-3 fs-5 align-items-start justify-content-center nav-card-style fw-bold" style={{ width: '9rem' }}>
                                Freelance Web Developer
                            </p> */}

                    </div>

                    <div className="col-6 col-lg-4 p-0 m-2 d-flex flex-column align-items-center justify-content-center">
                        <div className="cool-subtitle">
                            <p className="fs-2 pt-1 m-0 text-center"> Kevin</p>
                            <p className="fs-2 pb-1 m-0 text-center"> Stares-Darbon </p>
                        </div>
                    </div>
                    <div className='col-3 col-lg-4 d-flex flex-row'>
                        <div className='col-2 col-sm-5 col-md-7'>
                        </div>
                        <div className='col-9 col-sm-6 col-md-4 d-lg-none justify-content-end'>
                            <OffCanvas />
                        </div>

                    </div>

                </div>

            </div>
            <div className="d-none d-lg-flex">
                <OffCanvas />
            </div>

        </header >
    )
}

export default Header;