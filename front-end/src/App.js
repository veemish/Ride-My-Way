import React from "react";
import "./App.css";
import Home from "./Component/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PassangerRegister from "./Component/Authentification/PassangerRegister";
import DriverRegister from "./Component/Authentification/DriverRegister";
import Passangerlogin from "./Component/Authentificatiion/Passangerlogin";
import Driverlogin from "./Component/Authetification/Driverlogin";
import DriverProfile from "./Component/Authentification/DriverProfile";
import PassangerProfile from "./Component/Authentification/PassangerProfile";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/passanger_register" component={PassangerRegister} />
        <Route path="/driver_register" component={DriverRegister} />
        <Route path="/passanger_login" component={Passangerlogin} />
        <Route path="/driver_login" component={Driverlogin} />
        <Route path="/driver_profile" component={DriverProfile} />
        <Route path="/passanger_profile" component={PassangerProfile} />
      </div>
    </Router>
  );
}

export default App;
