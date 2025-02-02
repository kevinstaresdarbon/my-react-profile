import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import personnelLogo from '/favicon.png';

function OffCanvas() {
  const navigate = useNavigate();

  function delayedNavigate(e) {
    e.preventDefault();

    if (e.target.classList.contains('nav-hover-text')) {
      setTimeout(() => {
        navigate(e.target.dataset.navigate);
      }, 550);
    }
  }

  function directNavigate(e) {
    e.preventDefault();
    if (e.target.classList.contains('nav-hover-text')) {
      navigate(e.target.dataset.navigate);
    }
  }

  return (
    <nav className="navbar me-auto nav-card-style" style={{ zIndex: 6 }}>
      <div className="container-fluid d-flex flex-column">

        {/* Offcanvas Toggle Button - Only Visible on Small Screens */}
        <button
          className="navbar-toggler p-0 d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas Menu - Visible Only on Small Screens */}
        <div
          className="offcanvas offcanvas-end text-bg-dark w-100 d-lg-none"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header d-flex justify-content-end">
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body ">
            <ul className="navbar-nav d-flex justify-content-center align-items-center p-4" onClick={delayedNavigate}>
              <li className="nav-item my-3" aria-label="Home">
                <span
                  className="nav-hover-text fw-bold fs-2"
                  data-navigate="/"
                  data-bs-dismiss="offcanvas"
                >
                  Home
                </span>
              </li>
              <li className="nav-item my-3" aria-label="Projects">
                <span
                  className="nav-hover-text fw-bold fs-2"
                  data-navigate="/projects"
                  data-bs-dismiss="offcanvas"
                >
                  Projects
                </span>
              </li>
              <li className="nav-item my-3" aria-label="Contact">
                <span
                  className="nav-hover-text fw-bold fs-2"
                  data-navigate="/contacts"
                  data-bs-dismiss="offcanvas"
                >
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Standard Horizontal Menu - Visible on Large Screens */}
        <div className="d-none d-lg-flex justify-content-center align-items-center"  style={{width: 'calc((100vw * 11/12) - 1.7rem)'}}>
          <ul className="navbar-nav d-flex flex-row gap-4" onClick={directNavigate}>
            <li className="nav-item" aria-label="Home">
              <span className="nav-hover-text fw-bold fs-4 text-decoration-none" data-navigate="/">
                Home
              </span>
            </li>
            <li className="nav-item" aria-label="Projects">
              <span className="nav-hover-text fw-bold fs-4 text-decoration-none" data-navigate="/projects">
                Projects
              </span>
            </li>
            <li className="nav-item" aria-label="Contact">
              <span className="nav-hover-text fw-bold fs-4 text-decoration-none" data-navigate="/contacts">
                Contact
              </span>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default OffCanvas;
