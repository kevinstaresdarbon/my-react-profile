import React from 'react';
import heroPNG from '/02-hero-bg.png';
import ksdProfilePNG from '/ksd-profile-image.png';

function Hero() {
    return (
        <div class="row p-0 m-0 w-100 rounded-0 border-0" id="hero" style={{ minHeight: '22rem', width: '100vw' }}>
            <div class="col-12 p-0 m-0 w-100">
                {/* <!-- I wrote this custom card following the examples on getbootstrap.com --> */}
                <div class="card p-0 m-0 w-100 rounded-0 border-0" style={{ backgroundColor: '#800D98' }}>
                    <img src={heroPNG}
                        style={{ objectFit: 'cover', width: '100vw', height: '22rem', opacity: '0.67' }} />
                    <div class="card-img-overlay p-0 m-0 w-100 d-flex flex-column">
                        <div class="row p-0 m-0 w-100" >
                            <div class="col-4 p-0">
                            </div>
                            <div class="col-4 p-0 d-flex flex-column align-items-center">
                                <img src={ksdProfilePNG} style={{ objectFit: 'cover', width: '240px', height: '240px', borderRadius: 'var(--theme-radius)', border: 'var(--theme-border-style)' }} class="mt-3 mb-4" />
                                <p class="cool-subtitle fs-2 px-2 m-0 ml-2 text-center"> Kevin Stares-Darbon </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Hero;