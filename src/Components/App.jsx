import React, { Component } from "react";
import Home from "./Pages/Services";
import Account from "./Pages/Account/Account";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Signup from "./Pages/Account/signup";
import Signin from "./Pages/Account/signin";
import { AuthProvider } from "../contexts/AuthContext";
import Storef from "./Store/Storef";
import About from "./Pages/About";
import Breakdown from "./Pages/services/Breakdown";
import CarSpa from "./Pages/services/CarSpa";
import Maintenance from "./Pages/services/Maintenance";
import ForgotPassword from "./Pages/Account/forgotpassword";
import Searched from "./Store/searched";

class App extends Component {
  state = {
    dark: true,
    acc: "Account",
  };
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Navbar acc={this.state.acc} dark={this.state.dark} fixed />

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} dark={this.state.dark} />}
            />

            <Route
              path="/breakdown"
              render={(props) => (
                <Breakdown {...props} dark={this.state.dark} />
              )}
            />
            <Route
              path="/maintenance"
              render={(props) => (
                <Maintenance {...props} dark={this.state.dark} />
              )}
            />
            <Route
              path="/carspa"
              render={(props) => <CarSpa {...props} dark={this.state.dark} />}
            />
            <Route
              path="/about"
              render={(props) => <About {...props} dark={this.state.dark} />}
            />
            <Route path={"/store"} component={Storef} exact />

            <AuthProvider>
              <Route path="/signup" component={Signup} />
              <Route path="/signin" component={Signin} />
              <Route path="/forgotpassword" component={ForgotPassword} />
              <Route path="/account" component={Account} />
            </AuthProvider>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
  changeColorMode = () => {
    let dark = this.state.dark;
    dark = !dark;
    this.setState({ dark });
  };
}

export default App;
