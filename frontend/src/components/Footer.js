import React from "react";

import F from './F'
class Footer extends React.Component {
  render() {
    return (
      <div id="footer" data-animate="fadeInUp">
        <div className="container">
          <div className="row col-sm-12 footer-container">
            <div className="col-md-3 col-sm-6">
              <h4 class="header">Pages</h4>

              <ul>
                <li>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <a href="/">Terms and conditions</a>
                </li>
              
                <li>
                  <a href="/contact">Contact us</a>
                </li>
              </ul>

              <hr />

              <h4 class="header">User section</h4>

              <ul>
                <li>
                  <a href="/login">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/register">Regiter</a>
                </li>
              </ul>

              <hr className="hidden-md hidden-lg hidden-sm" />
            </div>

            <div className="col-md-3 col-sm-6">
              <h4 class="header">Categories</h4>

              <h5 class="head">Brands</h5>

              <ul>
                <li>
                  <a href="/lee">Lee</a>
                </li>
                <li>
                  <a href="/ray">Raymond</a>
                </li>
                <li>
                  <a href="/peter">Peter England</a>
                </li>
                <li>
                  <a href="/levis">Levis</a>
                </li>
                <li>
                  <a href="/hm">H&M</a>
                </li>
              </ul>

              <h5 class="head">Men</h5>
              <ul>
                <li>
                  <a href="/top">Top Wear</a>
                </li>
           
                <li>
                  <a href="/bottom">Bottom</a>
                </li>
              </ul>

              <hr className="hidden-md hidden-lg" />
            </div>

            <div className="col-md-3 col-sm-6">
              <h4 class="header">Where to find us</h4>

              <p class="header">
                <strong>Clyntra Pvt Ltd., </strong>
              
                13/25 New Avenue
                <br />
                New Heaven
                <br />
                45Y 73J
                <br />
                <strong>Bengalaru</strong>
              </p>

            </div>

            <div className="col-md-3 col-sm-6">
              <h4 class="header">Get the news</h4>

              <p className="text-muted">
                To get the latest offers, please provide your email here!
              </p>

              {/* <form>
                <div className="input-group">
                  <input type="text" className="form-control" />

                  <span className="input-group-btn">
                    <button className="btn btn-default btn-light" type="button">
                      Subscribe!
                      <i class="fa fa-send"></i>
                    </button>
                  </span>
                </div>
              </form> */}
              <F /> 

              <hr />

              <h4 class="header">Stay in touch</h4>

              <p className="social">
                <a
                  href="#"
                  className="facebook external"
                  ref="abc"
                  onMouseOver={this.onMouseOverHandler}
                  onMouseOut={this.onMouseOutHandler}
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="twitter external"
                  onMouseOver={this.onMouseOverHandler}
                  onMouseOut={this.onMouseOutHandler}
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="instagram external"
                  onMouseOver={this.onMouseOverHandler}
                  onMouseOut={this.onMouseOutHandler}
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="gplus external"
                  onMouseOver={this.onMouseOverHandler}
                  onMouseOut={this.onMouseOutHandler}
                >
                  <i class="fab fa-google"></i>
                </a>
                <a
                  href="#"
                  className="email external"
                  onMouseOver={this.onMouseOverHandler}
                  onMouseOut={this.onMouseOutHandler}
                >
                  <i className="fa fa-envelope" />
                </a>
              </p>
            </div>
          </div>
        </div>
       
        <div class="copyright">
            &copy; Copyright <strong><span>Clyntra</span></strong>. All Rights Reserved
        </div>
      </div>
    );
  }
}

export default Footer;
