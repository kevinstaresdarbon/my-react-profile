import React from 'react';

function About() {
    return (
        <section class="row" id="about" style={{minHeight: '8rem'}}>
            <div class="col-12">
                {/* <!--  These column classes give the best fit for responsiveness given the site design--> */}
                <div class="row" style={{ minHeight: '8rem' }}>
                    <div class="col-12 col-sm-2 d-flex justify-content-center">
                        <p class="fs-1 fw-bold">About</p>
                    </div>
                    <div class="col-12 col-sm-10 mb-5" style={{ minHeight: '8rem' }}>
                        <p></p>
                        <p class="fs-4 fw-bold px-2"> Welcome to my Online Profile!</p>
                        <p class="fs-4 fw-bold px-2"> I am an enthusiastic hobbyist who is turning his passion into his career.
                        </p>
                        <p class="fs-4 fw-bold px-2">IT has been a hobby of mine for over twenty years in which time I have set-up varying game Servers from TrinityCore to Minecraft, VPS provisioning servers, web pages, wordpress sites and much more!.</p>
                        <p class="fs-4 fw-bold px-2">In the last few years web design and web development have caught my interest.</p>
                        <p class="fs-4 fw-bold px-2">I have taken web development bootcamps on udemy and also studied some of their react, vue and express courses.</p>
                        <p class="fs-4 fw-bold px-2"> I am currently taking the "edX: Front-End Web Development Bootcamp".</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
