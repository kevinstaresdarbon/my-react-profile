import React from 'react';
import heroPNG from '/02-hero-bg-min.png';
import ksdProfilePNG from '/profile-min.jpg';

function Hero() {
    return (
        <div className="row p-0 m-0 w-100 rounded-0 border-0" id="hero" style={{ minHeight: '22rem', width: '100vw' }}>
            <div className="col-12 p-0 m-0 w-100">
                {/* <!-- I wrote this custom card following the examples on getbootstrap.com --> */}
                <div className="card p-0 m-0 w-100 rounded-0 border-0" style={{ backgroundColor: '#800D98' }}>
                    <img src={heroPNG}
                        style={{ objectFit: 'cover', width: '100vw', height: '22rem', opacity: '0.67' }} />
                    <div className="card-img-overlay p-0 m-0 w-100 d-flex flex-column">
                        <div className="row p-0 m-0 w-100" >
                            <div className="col-4 p-0">
                            </div>
                            <div className="col-4 p-0 d-flex flex-column align-items-center">
                                <img src={ksdProfilePNG} style={{ objectFit: 'cover', objectPosition: '0px 0px', width: '280px', height: '260px', borderRadius: 'var(--theme-radius)', border: 'var(--theme-border-style)' }} className="mt-4 mb-2" />
                                <p className="cool-subtitle fs-3 px-2 m-0 ml-2 text-center"> Kevin Stares-Darbon </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Hero;