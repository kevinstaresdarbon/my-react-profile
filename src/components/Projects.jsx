import React from 'react'

import Project from './Project'

import pwImg from '/PW-Gen_.png'
import quizImg from '/quiz.png'
import plannerImg from '/planner.png'
import weatherImg from '/Weather.png'
import gameImg from '/simon-game.jpg'
import nofomoImg from '/NoFOMO.png'

function Projects() {

    const projectData = [
        {
            link: 'https://kevinstaresdarbon.github.io/NoFOMO/',
            img: nofomoImg,
            imgAlt: 'An online search and dashboard for planning activities',
            overlayTitle: 'NoFOMO',
            overlayContent: "You'll have No Fear of Missing Out with this online tool",
            ignore: false,
            isFeatured: true
        },
        {
            link: 'tba',
            img: 'tba',
            imgAlt: 'tba',
            overlayTitle: 'tba',
            overlayContent: 'tba',
            ignore: true,
            isFeatured: false
        }
    ];

    const challengeData = [
        {
            link: 'https://kevinstaresdarbon.github.io/SimonGame/',
            img: gameImg,
            imgAlt: 'Four primary coloured squares of Simon the Wizard Game',
            overlayTitle: "Simon's Game",
            overlayContent: 'Enjoy this throwback to the sequence memory game',
            ignore: false,
            isFeatured: true
        },
        {
            link: 'https://kevinstaresdarbon.github.io/PW-Gen',
            img: pwImg,
            imgAlt: 'A simple html form with sliders and checkboxes',
            overlayTitle: 'Password Generator',
            overlayContent: 'Generates a random password to specified conditions',
            ignore: false,
            isFeatured: false
        },
        {
            link: 'https://kevinstaresdarbon.github.io/Quiz/index.html',
            img: quizImg,
            imgAlt: 'Interactive multiple choice quiz',
            overlayTitle: 'Interactive JS Quiz',
            overlayContent: 'An interactive quiz in the browser: Test your JS knowledge!',
            ignore: false,
            isFeatured: false
        },
        {
            link: 'https://kevinstaresdarbon.github.io/Planner',
            img: plannerImg,
            imgAlt: 'Interactive Daily Diary',
            overlayTitle: 'Interactive Daily Planner',
            overlayContent: 'Plan out your day with this daily planner',
            ignore: false,
            isFeatured: false
        },
        {
            link: 'https://kevinstaresdarbon.github.io/Weather-Search/',
            img: weatherImg,
            imgAlt: 'API Search for weather information',
            overlayTitle: 'API Weather',
            overlayContent: 'Current weather conditions for a given location',
            ignore: false,
            isFeatured: false
        }
    ];

    return (

        <section id="work" className="container-fluid p-0 mx-4 my-3 w-100 main-content-style">
            <section className="row p-4" id="projects">
                {/* <!--  These column classes give the best fit for responsiveness given the site design--> */}
                <div className="col-12  d-flex justify-content-center">
                    <p className="fs-1 fw-bold">Projects</p>
                </div>

                {/* map over projects here */}
                {projectData
                    .filter(project => (project.isFeatured === true))
                    .map(featured => (
                        <div className="col-12 mb-4">
                            <Project link={featured.link} img={featured.img} imgAlt={featured.imgAlt} overlayTitle={featured.overlayTitle} overlayContent={featured.overlayContent} isFeatured={featured.isFeatured} />
                        </div>
                    ))
                }

                {challengeData
                    .filter(project => (project.isFeatured === true))
                    .map(featured =>
                    (<div className="col-12">
                        <Project link={featured.link} img={featured.img} imgAlt={featured.imgAlt} overlayTitle={featured.overlayTitle} overlayContent={featured.overlayContent} isFeatured={featured.isFeatured} />
                    </div>
                    ))
                }
            </section>
            <section className="row p-4" id="challenges">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <div className="row mb-5">
                                {/* map over challenges here */}
                                {challengeData
                                    .filter(project => (project.isFeatured === false))
                                    .map(notfeatured => (
                                        <div className="col-12 col-lg-6 col-xxl-3 mb-3">
                                            <Project link={notfeatured.link} img={notfeatured.img} imgAlt={notfeatured.imgAlt} overlayTitle={notfeatured.overlayTitle} overlayContent={notfeatured.overlayContent} isFeatured={notfeatured.isFeatured} />
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section >
    )
}

export default Projects;