import React, { Component } from "react";

class DriverRegister extends Component {
  render() {
    return (
      <div className="container">
        <h2> SingUp to join:</h2>

        <form action="./drivers-dashboard.html" method="GET">
          <input type="text" name="firstName" placeholder="First Name" /> <br />
          <input type="text" name="lastName" placeholder="Last Name" /> <br />
          <input type="text" name="userName" placeholder="Username" /> <br />
          <input type="email" name="Email Adress" placeholder="E-mail" /> <br />
          <input type="password" name="Password" placeholder="Password" />{" "}
          <br />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />{" "}
          <br />
          <input type="text" name="cartype" placeholder="Car type" /> <br />
          <input type="text" name="carnumber" placeholder="Car number" /> <br />
          <input type="submit" class="reg" value="Register" />
          <p>Already a member ?</p>
        </form>
      </div>
    );
  }
}

export default DriverRegister;
