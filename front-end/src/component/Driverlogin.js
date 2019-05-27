import React, { Component } from "react";
import { Link } from "react-router-dom";

class Driverlogin extends Component() {
  render() {
    return (
      <div>
        <div className=" container ">
          <h2> welcome back</h2>

          <form>
            <input type="text" name="userName" placeholder="Username" /> <br />
            <input
              type="password"
              name="Password"
              placeholder="Password"
            />{" "}
            <br />
            <Link to="">
              <input type="submit" name="login" value="Login" />
            </Link>
          </form>
        </div>

        <div>
          <p>Not a member?</p>
        </div>
      </div>
    );
  }
}

export default Driverlogin;
