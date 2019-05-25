import React, { Component } from "react";

class PassangerRegister extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2> SingUp to join:</h2>
          <form>
            <input type="text" name="firstName" placeholder="First Name" />{" "}
            <br />
            <input type="text" name="lastName" placeholder="Last Name" /> <br />
            <input type="text" name="userName" placeholder="Username" /> <br />
            <input type="email" name="Email Adress" placeholder="E-mail" />{" "}
            <br />
            <input
              type="password"
              name="Password"
              placeholder="Password"
            />{" "}
            <br />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />{" "}
            <br />
            <input type="submit" class="reg" value="Register" />
            <p>Already a member ?</p>
          </form>
        </div>
      </div>
    );
  }
}

export default PassangerRegister;
