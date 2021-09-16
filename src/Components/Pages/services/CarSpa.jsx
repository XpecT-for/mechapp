import React, { Component } from "react";
import emailjs from "emailjs-com";

import "./style.css";

class CarSpa extends Component {
  state = {
    currentPage: 1,
    serviceType: NaN,
    vehicleType: NaN,
    location: NaN,
  };
  render() {
    if (true) {
      return (
        <div className="breakdown">
          <div className="heading">
            <h1>{this.headingChanger()}</h1>
          </div>
          <div className="progress-bar-area">
            <div className="progress" style={{ height: "5px" }}>
              <div
                className={this.progressBarLevel()}
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="fpage">
            {this.pageChanger()}
            <button
              className={
                this.state.currentPage == 1 || this.state.currentPage == 4
                  ? "btns backb inactive"
                  : "btns backb"
              }
              onClick={this.pageMinus}
            >
              <i className="fa fa-arrow-left" aria-hidden="true"></i>Back
            </button>
            <button
              className={
                this.state.currentPage == 4
                  ? "btns nextb inactive"
                  : "btns nextb"
              }
              onClick={this.pagePlus}
            >
              {this.state.currentPage == 3 ? "Done" : "Next"}
              <i
                className={
                  this.state.currentPage == 3
                    ? "fa fa-check"
                    : "fa fa-arrow-right"
                }
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      );
    }
  }

  progressBarLevel = () => {
    let currentPage = this.state.currentPage;
    if (currentPage === 1) {
      return "progress-bar bg-danger w-25";
    }
    if (currentPage === 2) {
      return "progress-bar bg-danger w-50";
    }
    if (currentPage === 3) {
      return "progress-bar bg-danger w-75";
    }
    if (currentPage === 4) {
      return "progress-bar bg-danger w-100";
    }
  };

  serviceTypeFunc = (service) => {
    let serviceType = this.state.serviceType;
    serviceType = service;
    this.setState({ serviceType });
    console.log(serviceType);
  };

  vehicleTypeFunc = (vehicle) => {
    let vehicleType = this.state.vehicleType;
    vehicleType = vehicle;
    this.setState({ vehicleType });
    console.log(vehicleType);
  };

  locationFunc = (loc) => {
    let location = this.state.location;
    location = loc;
    this.setState({ location });
    console.log(location);
  };

  pagePlus = () => {
    let currentPage = this.state.currentPage;
    if (currentPage == 1 && this.state.serviceType) {
      currentPage++;
    }
    if (currentPage == 2 && this.state.vehicleType) {
      currentPage++;
    }
    if (currentPage == 3 && this.state.location) {
      currentPage++;
    }
    this.setState({ currentPage });
  };
  pageMinus = () => {
    let currentPage = this.state.currentPage;
    if (currentPage > 1) {
      currentPage--;
    }
    this.setState({ currentPage });
    console.log(currentPage);
  };

  pageChanger = (s) => {
    let currentPage = this.state.currentPage;
    if (currentPage == 1) {
      return (
        <React.Fragment>
          <button
            className="element"
            onClick={() => this.serviceTypeFunc("Full Service")}
          >
            <i className="fa fa-cogs" aria-hidden="true"></i>Full Service
          </button>
          <button
            className="element"
            onClick={() => this.serviceTypeFunc("Car Wash")}
          >
            <i className="fa fa-shower" aria-hidden="true"></i>Car Wash
          </button>
          <button
            className="element"
            onClick={() => this.serviceTypeFunc("Polish")}
          >
            <i className="fa fa-car" aria-hidden="true"></i>Polish Start
          </button>
          <button
            className="element"
            onClick={() => this.serviceTypeFunc("Filming")}
          >
            <i className="fa fa-dashcube" aria-hidden="true"></i>Filming Service
          </button>
        </React.Fragment>
      );
    }
    if (currentPage == 2) {
      return (
        <React.Fragment>
          <button
            className="element"
            onClick={() => this.vehicleTypeFunc("Hybrid")}
          >
            <i className="fa fa-leaf" aria-hidden="true"></i>Hybrid
          </button>
          <button
            className="element"
            onClick={() => this.vehicleTypeFunc("Petrol")}
          >
            <i className="fa fa-car" aria-hidden="true"></i>Petrol
          </button>
          <button
            className="element"
            onClick={() => this.vehicleTypeFunc("Diesel")}
          >
            <i className="fa fa-bus" aria-hidden="true"></i>Diesel
          </button>
          <button
            className="element"
            onClick={() => this.vehicleTypeFunc("Electric")}
          >
            <i className="fa fa-plug" aria-hidden="true"></i>Electric
          </button>
        </React.Fragment>
      );
    }
    if (currentPage == 3) {
      return (
        <React.Fragment>
          <button className="element" onClick={() => this.locationFunc("Home")}>
            Home
          </button>
          <button
            className="element"
            onClick={() => this.locationFunc("Garage")}
          >
            Garage
          </button>
        </React.Fragment>
      );
    }
    if (currentPage == 4) {
      return (
        <React.Fragment>
          <div className="element-nb">
            <h4>Service Type</h4>
            {this.state.serviceType}
          </div>
          <div className="element-nb">
            <h4>Vehicle Type</h4>
            {this.state.vehicleType}
          </div>
          <div className="element-nb">
            <h4>Location</h4>
            {this.state.location}
          </div>
          <div className="element-nb">
            <form className="contact-form" onSubmit={this.sendEmail}>
              <input type="hidden" name="Breakdown" value="Breakdown" />
              <input
                type="hidden"
                name="service_type"
                value={this.state.serviceType}
              />
              <input
                type="hidden"
                name="location"
                value={this.state.location}
              />
              <input
                type="hidden"
                name="car_type"
                value={this.state.vehicleType}
              />
              <input
                type="submit"
                value="Send"
                className="btns"
                onClick={() => {
                  alert("Request Sent");
                }}
              />
            </form>
          </div>
        </React.Fragment>
      );
    }
  };
  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lqfw7od",
        "template_9s2p5e8",
        e.target,
        "user_6j62lDRiVFOxh0K7N37kK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  headingChanger = () => {
    let currentPage = this.state.currentPage;
    if (currentPage == 1) {
      return "Select Service";
    }
    if (currentPage == 2) {
      return "Select Car";
    }
    if (currentPage == 3) {
      return "Select Location";
    }
    if (currentPage == 4) {
      return "Assistance is on the Way";
    }
  };
}

export default CarSpa;
