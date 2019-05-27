import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <h1>
            Ride <span>My Way</span>
          </h1>
          <p>Welcome to Ride My Way</p>
          <Link to="/passanger_login">
            <button type="button" className="btn-right">
              Log In
            </button>
          </Link>
          <Link to="/passanger_register">
            <button type="button" className="btn-left">
              Sign up
            </button>
          </Link>

          <p>Drivers Section</p>
          <Link to="/drivers_login">
            {" "}
            <button type="button" className="btn-right">
              Log In
            </button>
          </Link>
          <Link to="/drivers_register">
            <button type="button" className="btn-left">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
