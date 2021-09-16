import React, { Component } from "react";
import img1 from "../assets/cb.png";
import img2 from "../assets/cw.png";
import img3 from "../assets/tools.png";
import "./Services.css";
import ImageSlider from "../Slideshow/imageslider";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    let dark = this.props.dark;
    return (
      <React.Fragment>
        <ImageSlider />
        <div className={dark ? "container-dark" : "container"}>
          <br />

          <div className="services">
            <h1 className={dark ? "head1-dark" : "head1"}>
              Select a Service to Get Started
            </h1>

            <div className="card-container">
              <div className={dark ? "card-dark" : "card"}>
                <div className={dark ? "card-front-dark" : "card-front"}>
                  <img src={img1} />
                  <h3>Breakdown Aid</h3>
                  <p>
                    24/7 Breakdown Support <br />
                    Services on your location.
                  </p>
                </div>
                <div className={dark ? "card-back-dark" : "card-back"}>
                  <p>
                    Avoid getting frustrated on the road in a breakdown, choose
                    your vehicle breakdown assistant on the user location
                  </p>
                  <Link to="/breakdown">
                    <button className="request-btn">Request</button>
                  </Link>
                </div>
              </div>
              <div className={dark ? "card-dark" : "card"}>
                <div className={dark ? "card-front-dark" : "card-front"}>
                  <img src={img2} />
                  <h3>Car Spa</h3>
                  <p>
                    Body Wash to full <br />
                    detailing from the best.
                  </p>
                </div>
                <div className={dark ? "card-back-dark" : "card-back"}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt, earum!
                  </p>
                  <Link to="/carspa">
                    <button className="request-btn">Request</button>
                  </Link>
                </div>
              </div>
              <div className={dark ? "card-dark" : "card"}>
                <div className={dark ? "card-front-dark" : "card-front"}>
                  <img src={img3} />
                  <h3>Maintenance</h3>
                  <p>
                    Check your car's health, <br /> oil levels, battery e.t.c
                  </p>
                </div>
                <div className={dark ? "card-back-dark" : "card-back"}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt, earum!
                  </p>
                  <Link to="/maintenance">
                    <button className="request-btn">Request</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Products area */}

          <div className="product-sec">
            <h1 className={dark ? "head1-dark" : "head1"}>
              Browse for Products
            </h1>
            <p>
              Buy whatever parts you want from the wide range of selections from
              our products store. You can now ship them
              <br /> to your doorstep at reliable fees. To browse products go to
              our Products page.
            </p>
            <Link to="/store">
              <button className={dark ? "button-req-dark" : "button-req"}>
                Browse
              </button>
            </Link>
          </div>

          {/* Why Us Area */}
          <h1 className={dark ? "head1-dark" : "head1"}>Why Mechapp</h1>
          <div className="why-us">
            <div className="why-us-card">
              Mechapp is a fast web application that can be accessed by anyone
              from any device at anytime.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
