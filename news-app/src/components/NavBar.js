import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md bg-success navbar-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
              News App
            </Link>
            <button
              className="navbar-toggler bg-secondary collapsed"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse " id="navbarCollapse" />
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
