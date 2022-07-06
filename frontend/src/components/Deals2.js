import React, { Component } from "react";
import Filter1 from "./Filter1";


class Deals2 extends Component {
  render() {
    return (
      <div className="deals_container">
        
        <div className="deals-box col-md-5">
          <img
            src="https://varner.com/globalassets/images/our_consepts/concept_img/levis-banner_750-x-550-px.jpg"
            width="100%"
            
          />
            <img
            src="https://www.raymond.in/sites/default/files/banner1_0.jpg"
            width="100%"
            height="47%"
            
          />
        </div>
        <div className="deals_slide">
          <div className="heading">
            <h1>Our Gallery</h1>
            <a href ='/bottom' className="heading_button">VIEW ALL</a>
          </div>
          <hr></hr>
          <Filter1 />
        </div>
      </div>
    );
  }
}

export default Deals2;