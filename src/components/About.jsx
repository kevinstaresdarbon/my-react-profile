import React from 'react';

function About() {
    return (
        <section className="row" id="about" style={{minHeight: '8rem'}}>
            <div className="col-12">
                {/* <!--  These column classes give the best fit for responsiveness given the site design--> */}
                <div className="row  mt-4 px-2" style={{ minHeight: '8rem' }}>
                    <div className="col-12 col-sm-2 d-flex justify-content-center">
                        <p className="fs-1 fw-bold align-self-center">About</p>
                    </div>
                    <div className="col-12 col-sm-10 mb-3" style={{ minHeight: '8rem' }}>
                        <p></p>
                        <p className="fs-4 fw-bold px-2"> Welcome to my Online Profile!</p>
                        <p className="fs-4 fw-bold px-2"> I am an enthusiastic hobbyist who is turning his passion into his career.
                        </p>
                        <p className="fs-4 fw-bold px-2">IT has been a hobby of mine for over twenty years in which time I have set-up varying game Servers from TrinityCore to Minecraft, VPS provisioning servers, web pages, wordpress sites and much more!.</p>
                        <p className="fs-4 fw-bold px-2">In the last few years web design and web development have caught my interest.</p>
                        <p className="fs-4 fw-bold px-2">I have taken web development bootcamps on udemy and also studied some of their react, vue and express courses.</p>
                        <p className="fs-4 fw-bold px-2"> I am currently taking the "edX: Front-End Web Development Bootcamp".</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
