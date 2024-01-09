import React from 'react';

<section id="work" className="container-fluid p-0 mx-4 my-3 w-100 main-content-style"></section>

function Contacts() {
    return (
        <section id="contact" className="container-fluid p-4 mx-4 my-3 w-100 main-content-style">
            <div className="row" style={{minHeight: '8rem'}}>
                {/* <!-- Adjusted the columns here to make the contacts section fill the page better --> */}
                <div className="col-12 d-flex justify-content-center">
                    <p className="fs-1 fw-bold">Contact Me</p>
                </div>
                <div className="col-12 d-flex justify-content-center fs-3 mb-3">
                    <a href="tel:07306330368">Mobile: 07306330368 </a>
                </div>
                <div className="col-12 d-flex justify-content-center fs-3 mb-3">
                    <a href="mailto:red.inshou@gmail.com">Email: red.inshou@gmail.com </a>
                </div>
                <div className="col-12 d-flex justify-content-center fs-3 mb-3">
                    <a href="https://github.com/kevinstaresdarbon" target="_blank">Github Profile</a>
                </div>
                <div className="col-12 d-flex justify-content-center fs-3 mb-3">
                    <a href="https://www.linkedin.com/in/kevin-stares-darbon-670356293/" target="_blank">LinkedIn Profile</a>
                </div>
                <div className="col-12 d-flex justify-content-center fs-3 mb-3">
                    <a href="KSDCV.pdf" download="CopyOfKSDCV.pdf">Download CV</a>
                </div>
            </div >
        </section>
    )
}

export default Contacts;