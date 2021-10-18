import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light mx-5 pt-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            REALITY, ELEVATED
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 middle-header-text">
              <li>
                <h1>LOFTGARTEN</h1>
              </li>
            </ul>
            <span className="navbar-text">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    PROJECTS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link activeNab" href="/">
                    CONTACT
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
