import React from 'react';

import Project from './Project';

import pwImg from '/PW-Gen_.png';
import quizImg from '/quiz.png';
import plannerImg from '/planner.png';
import weatherImg from '/Weather.png';
import gameImg from '/simon-game.jpg';
import nofomoImg from '/NoFOMO.png';
import pursuitImg from '/pursuit-of-wits.netlify.app_play.png';

function Projects() {
  const projectData = [
    {
      id: 1,
      link: 'https://pursuit-of-wits.netlify.app/',
      git: 'https://github.com/annabrisland/pursuit-of-wits',
      img: pursuitImg,
      imgAlt: 'A colourful gameboard for pursuit of wits',
      overlayTitle: 'Pursuit of Wits',
      overlayContent: 'An interactive quiz game to play with friends',
      ignore: false,
      isFeatured: true,
    },
    {
      id: 2,
      link: 'https://kevinstaresdarbon.github.io/NoFOMO/',
      git: 'https://github.com/kevinstaresdarbon/NoFOMO',
      img: nofomoImg,
      imgAlt: 'An online search and dashboard for planning activities',
      overlayTitle: 'NoFOMO',
      overlayContent:
        "You'll have No Fear of Missing Out with this online tool",
      ignore: false,
      isFeatured: true,
    },
  ];

  const challengeData = [
    {
      id: 3,
      link: 'https://kevinstaresdarbon.github.io/SimonGame/',
      git: 'https://github.com/kevinstaresdarbon/SimonGame',
      img: gameImg,
      imgAlt: 'Four primary coloured squares of Simon the Wizard Game',
      overlayTitle: "Simon's Game",
      overlayContent: 'Enjoy this throwback to the sequence memory game',
      ignore: false,
      isFeatured: false,
    },
    {
      id: 4,
      link: 'https://kevinstaresdarbon.github.io/PW-Gen',
      git: 'https://github.com/kevinstaresdarbon/PW-Gen',
      img: pwImg,
      imgAlt: 'A simple html form with sliders and checkboxes',
      overlayTitle: 'Password Generator',
      overlayContent: 'Generates a random password to specified conditions',
      ignore: false,
      isFeatured: false,
    },
    {
      id: 5,
      link: 'https://kevinstaresdarbon.github.io/Quiz/index.html',
      git: 'https://github.com/kevinstaresdarbon/Quiz',
      img: quizImg,
      imgAlt: 'Interactive multiple choice quiz',
      overlayTitle: 'Interactive JS Quiz',
      overlayContent:
        'An interactive quiz in the browser: Test your JS knowledge!',
      ignore: false,
      isFeatured: false,
    },
    {
      id: 6,
      link: 'https://kevinstaresdarbon.github.io/Planner',
      git: 'https://github.com/kevinstaresdarbon/Planner',
      img: plannerImg,
      imgAlt: 'Interactive Daily Diary',
      overlayTitle: 'Interactive Daily Planner',
      overlayContent: 'Plan out your day with this daily planner',
      ignore: false,
      isFeatured: false,
    },
    {
      id: 7,
      link: 'https://kevinstaresdarbon.github.io/Weather-Search/',
      git: 'https://github.com/kevinstaresdarbon/Weather-Search',
      img: weatherImg,
      imgAlt: 'API Search for weather information',
      overlayTitle: 'API Weather',
      overlayContent: 'Current weather conditions for a given location',
      ignore: true,
      isFeatured: false,
    },
  ];

  return (
    <section
      id="work"
      className="container-fluid p-0 mx-4 my-3 w-100 main-content-style"
    >
      <section className="row p-4" id="projects">
        {/* <!--  These column classes give the best fit for responsiveness given the site design--> */}
        <div className="col-12  d-flex flex-column justify-content-center align-items-center ">
          <p className="fs-1 fw-bold">Projects</p>
          <p className="fs-3 fw-bold w-75 text-center">
            Below you will find links to my most recent projects that I have
            been working on and their respective public repositories, all hosted
            on github.
          </p>
          <br />
        </div>

        {/* map over projects here */}
        {projectData
          .filter((project) => project.isFeatured === true)
          .map((featured) => (
            <>
              <div className="col-0 col-sm-1 col-lg-2"></div>
              <div className="col-12 col-sm-10 col-lg-8 mb-4" key={featured.id}>
                <Project
                  link={featured.link}
                  git={featured.git}
                  img={featured.img}
                  imgAlt={featured.imgAlt}
                  overlayTitle={featured.overlayTitle}
                  overlayContent={featured.overlayContent}
                  isFeatured={featured.isFeatured}
                />
              </div>
              <div className="col-0 col-sm-1 col-lg-2"></div>
            </>
          ))}

        {challengeData
          .filter((project) => project.isFeatured === true)
          .map((featured) => (
            <>
              <div className="col-0 col-sm-1 col-lg-2"></div>
              <div className="col-12 col-sm-10 col-lg-8 mb-3" key={featured.id}>
                <Project
                  link={featured.link}
                  git={featured.git}
                  img={featured.img}
                  imgAlt={featured.imgAlt}
                  overlayTitle={featured.overlayTitle}
                  overlayContent={featured.overlayContent}
                  isFeatured={featured.isFeatured}
                />
              </div>
              <div className="col-0 col-sm-1 col-lg-2"></div>
            </>
          ))}
      </section>
      <section className="row p-4" id="challenges">
        <div className="col-0 col-sm-1 col-lg-2"></div>
        <div className="col-12 col-sm-10 col-lg-8">
          <div className="row">
            <div className="col-12">
              <div className="row mb-5">
                {/* map over challenges here */}
                {challengeData
                  .filter((project) => project.isFeatured === false)
                  .filter((project) => project.ignore === false)
                  .map((notfeatured) => (
                    <>
                      <div
                        className="col-12 col-sm-6 mb-3"
                        key={notfeatured.id}
                      >
                        <Project
                          link={notfeatured.link}
                          git={notfeatured.git}
                          img={notfeatured.img}
                          imgAlt={notfeatured.imgAlt}
                          overlayTitle={notfeatured.overlayTitle}
                          overlayContent={notfeatured.overlayContent}
                          isFeatured={notfeatured.isFeatured}
                        />
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-0 col-sm-1 col-lg-2"></div>
      </section>
    </section>
  );
}

export default Projects;
