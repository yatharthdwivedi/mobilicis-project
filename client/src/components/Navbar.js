import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark"  data-bs-theme="dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              Mobilicis Internship
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/male"
                  className="nav-link active"
                  aria-current="page"
                >
                  Male Table
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/quote"
                  className="nav-link active"
                  aria-current="page"
                >
                  Quote Table
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/email"
                  className="nav-link active"
                  aria-current="page"
                >
                  Email Table
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/city"
                  className="nav-link active"
                  aria-current="page"
                >
                  Top 10 Cities
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
