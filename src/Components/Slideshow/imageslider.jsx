import React, { Component } from "react";
import img1 from "./images/slider1.jpg";
import img2 from "./images/slider2.jpg";
import img3 from "./images/slider3.jpg";
import "./imgslider.css";

class ImageSlider extends Component {
  state = {
    imgno: 0,
    slider: [img1, img2, img3],
  };
  render() {
    console.log(this.state.imgno);
    return (
      <React.Fragment>
        <div>
          <button
            className="buttoni prev"
            onClick={() => {
              let { imgno } = this.state;
              if (imgno > 0) {
                imgno--;
              }
              this.setState({ imgno });
            }}
          >
            <i className="fa fa-arrow-left"></i>
          </button>
          <div className="image">
            <img src={this.state.slider[this.state.imgno]} />
          </div>
          <button
            className="buttoni next"
            onClick={() => {
              let { imgno } = this.state;
              if (imgno < 2) {
                imgno++;
              }
              this.setState({ imgno });
            }}
          >
            <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ImageSlider;
