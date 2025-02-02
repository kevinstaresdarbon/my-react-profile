import React from 'react';

function Contacts() {
    return (
        <section id="contact" className="col-11 p-0 mx-0 my-3 main-content-style">

            <div className="col-12 d-flex flex-column align-items-center justify-content-center">
                <p className="fs-1 fw-bold mt-2 p-2">Contact Me</p>

                <p className="fs-3 fw-bold text-center px-5">If you have an interest in contacting me about my work or for work offers, or you would just like to see more of my online presence and profiles please use the relevant links below. </p>
                <br />
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
        </section>
    )
}

export default Contacts;