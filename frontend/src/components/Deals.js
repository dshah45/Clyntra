import React, { Component } from "react";
import Filter from "./Filter";


class Deals extends Component {
  render() {
    return (
      <div className="deals_container">
        <div className="deals_slide">
          <div className="heading">
            <h1>Our Gallery</h1>
            <a href ='/top' className="heading_button">VIEW ALL</a>
          </div>
          <hr></hr>
          <Filter />
        </div>
        <div className="deals-box col-md-5">
          <img
            src="https://i.ytimg.com/vi/-GQjal_UGxM/maxresdefault.jpg"
            width="100%"
            
          />
            <img
            src="https://www.raymond.in/sites/default/files/banner1_0.jpg"
            width="100%"
            height="60%"
            
          />
        </div>
      </div>
    );
  }
}

export default Deals;