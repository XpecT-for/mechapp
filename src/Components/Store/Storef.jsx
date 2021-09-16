import React, { Component } from "react";
import ProductPage from "./Store";
import Navbar from "../Navbar/Navbar";

class Storef extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="contain">
          <ProductPage />
        </div>
      </React.Fragment>
    );
  }
}

export default Storef;
