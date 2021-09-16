import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import img from "./img.jpg";
import img2 from "./img2.jpg";

class Searched extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <center>
          <div class="card" style={{ width: "18rem" }}>
            <img
              class="card-img-top"
              src={img}
              style={{ width: "200px", justifySelf: "center" }}
            />
            <div class="card-body">
              <h5 class="card-title">Spolier</h5>
              <p class="card-text">
                Spolier for BMW,AUDI <br /> $60
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img
              class="card-img-top"
              src={img2}
              style={{ width: "200px", justifySelf: "center" }}
            />
            <div class="card-body">
              <h5 class="card-title">Headlight</h5>
              <p class="card-text">
                Headlight for BMW,AUDI <br /> $110
              </p>
            </div>
          </div>
        </center>
      </React.Fragment>
    );
  }
}

export default Searched;
