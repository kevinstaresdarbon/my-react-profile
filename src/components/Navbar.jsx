import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import personnelLogo from '/favicon.png';

function Navbar() {
  const navigate = useNavigate();

  function delayedNavigate(e) {
    e.preventDefault();

    if (e.target.classList.contains('nav-hover-text')) {
      setTimeout(() => {
        navigate(e.target.dataset.navigate);
      }, 550);
    }
  }

  return (
    <nav
      className="navbar ms-auto nav-card-style"
      style={{ zIndex: 6 }}
    >
      <div className="container-fluid">
        <a className="navbar-brand me-1" href="#">
          <img
            src={personnelLogo}
            alt="purple personnel icon"
            width="32"
            height="32"
          />{' '}
        </a>
        <button
          className="navbar-toggler ms-1"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
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
          <div class="offcanvas-body d-flex justify-content-center align-items-start">
            <ul className="navbar-nav p-4" onClick={delayedNavigate}>
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
      </div>
    </nav>
  );
}

export default Navbar;
