import React from 'react'

function Skills() {

    return (

        <div className="col-12 d-flex flex-column justify-content-center">
            <p className="fs-1 fw-bold align-self-center mt-2">Skills</p>
            <div className="col-12 px-5">
                {/* <!-- Copied wholesale and adapted from the getbootstrap.com docs accordion element "always open"--> */}
                <div className="accordion mb-3" id="open-accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fs-4 fw-bold d-flex flex-row align-items-center justify-content-center"  type="button"
                                data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                                aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Web Development and Frameworks
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                            <div className="accordion-body fs-5 fw-bold border-0 text-center">
                                I am familiar with: <br />
                                CSS3. <br />
                                HTML5. <br />
                                Bootstrap5. <br />
                                Javascript ES6. <br />
                                Express.<br />
                                React. <br />
                                Vue. <br />
                                Webpack. <br />
                                Vite. <br />
                                Proxmox ve7 Hypervisor. <br />
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fs-4 fw-bold" type="button"
                                data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                                aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Other Qualifications
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse fs-5 fw-bold">
                            <div className="accordion-body text-center">
                                I hold an upper-second degree in Mathematics from the University of Sussex. <br />
                                I hold an English Worldwide Certificate in TEFL and have tutored English in
                                language schools internationally and nationally. <br />
                                I have a Mensa certified I.Q. of 144 which puts me on the 97th percentile for
                                speed of learning and application of knowledge<br />
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            {/* <!-- Changed the aria-expanded to false and added the collapsed class to this button so the first item starts closed.  the default behaviour looked wrong --> */}
                            <button className="accordion-button collapsed fs-4 fw-bold " type="button"
                                data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"
                                aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                Interpersonal skills
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
                            <div className="accordion-body fs-5 fw-bold text-center">
                                I am a calm and collected individual who holds himself with respect and offers
                                that same standard of respect to everyone. I am an excellent communicator
                                whether in written english, verbally or otherwise.
                                I am a lifelong learner who is able to work well in a team and independently.
                                <br />
                                I am a patient and skillful tutor.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Skills;