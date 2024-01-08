import React from 'react';

import Hero from './Hero.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'

function Home() {
    return (
        <div id="home">
            <Hero />
            <div class="container-fluid p-0 mx-4 my-3 w-100 main-content-style">
                <About />
                <Skills />
            </div>
        </div>
    );
}

export default Home;