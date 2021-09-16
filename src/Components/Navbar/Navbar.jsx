import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";

class Navbar extends Component {
  state = { menuCliked: false };
  handleClick = () => {
    this.setState({ menuCliked: !this.state.menuCliked });
  };
  render() {
    return (
      <React.Fragment>
        <div
          className={this.props.dark ? "nav-container darkn" : "nav-container"}
        >
          <div className="nav-brand">
            {" "}
            <img src={logo} style={{ width: "50px" }} /> MECHAPP
          </div>
          <div className="menu-icon">
            <i
              onClick={this.handleClick}
              className={this.state.menuCliked ? "fa fa-times" : "fa fa-bars"}
            ></i>
          </div>
          <div
            className={this.state.menuCliked ? "nav-menu active" : "nav-menu"}
          >
            <div className="nav-item">
              <NavLink
                to="/"
                className={this.navitemclass()}
                onClick={this.handleClick}
              >
                HOME
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink
                to="/store"
                className={this.navitemclass()}
                onClick={this.handleClick}
              >
                PRODUCTS
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink
                to="/about"
                className={this.navitemclass()}
                onClick={this.handleClick}
              >
                ABOUT
              </NavLink>
            </div>
          </div>
          <div className="nav-item-account">
            <NavLink to="/signin" className="nav-links-account">
              {this.props.acc}
            </NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
  navitemclass = () => {
    return this.props.dark ? "nav-links-dark" : "nav-links";
  };
}

export default Navbar;
