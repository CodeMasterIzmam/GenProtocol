import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/Web-Logo.jpeg";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img src={logo} className="logo" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="collapse2">
              <div style={{marginLeft:"auto"}}>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      ABOUT
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/tokens">
                      GEN VINCI
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      QUESTS
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      ROADMAP
                    </Link>
                  </li>
                </ul>
              </div>
              <div style={{marginLeft:"auto"}}>
                <button className="btn-dashboard">dashboard</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
