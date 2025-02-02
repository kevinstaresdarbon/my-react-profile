import React from 'react';

import About from './About.jsx'
import Skills from './Skills.jsx'

function Home() {
    return (
        <div className="col-11 p-2 mx-0 my-3 main-content-style">
            <About />
            <Skills />
        </div>

    );
}

export default Home;