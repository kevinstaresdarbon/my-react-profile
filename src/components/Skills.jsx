import React from 'react'

function Skills() {

    return (
        <section class="row" id="skills" style={{minHeight: '8rem'}}>
            <div class="col-12 p-0">
                <div class="row" style={{minHeight: '8rem'}}>
                    <div class="col-12 col-sm-2 d-flex justify-content-center">
                        <p class="fs-1 fw-bold">Skills</p>
                    </div>
                    <div class="col-12 col-sm-10 p-5">
                        {/* <!-- Copied wholesale and adapted from the getbootstrap.com docs accordion element "always open"--> */}
                        <div class="accordion mb-5" id="open-accordion">
                        <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed fs-4 fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                                        aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        Web Development and Frameworks
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                    <div class="accordion-body fs-5 fw-bold border-0">
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
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    {/* <!-- Changed the aria-expanded to false and added the collapsed class to this button so the first item starts closed.  the default behaviour looked wrong --> */}
                                    <button class="accordion-button collapsed fs-4 fw-bold " type="button"
                                        data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"
                                        aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                        Interpersonal skills
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
                                    <div class="accordion-body fs-5 fw-bold">
                                        I am a calm and collected individual who holds himself with respect and offers
                                        that same standard of respect to everyone. I am an excellent communicator
                                        whether in written english, verbally or otherwise.
                                        I am a lifelong learner who is able to work well in a team and independently.
                                        <br />
                                        I am a patient and skillful tutor.
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed fs-4 fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                                        aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        Other Qualifications
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse fs-5 fw-bold">
                                    <div class="accordion-body">
                                        I hold an upper-second degree in Mathematics from the University of Sussex. <br />
                                        I hold an English Worldwide Certificate in TEFL and have tutored English in
                                        language schools internationally and nationally. <br />
                                        I have a Mensa certified I.Q. of 144 which puts me on the 97th percentile for
                                        speed of learning and application of knowledge<br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;