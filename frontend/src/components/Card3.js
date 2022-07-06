// src/reusable/image-gallery.component.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



class Card2 extends React.Component {

 
    render() {
        return (
            <div>
                
                <Carousel autoPlay="True" interval="2000" infiniteLoop transitionTime="1000" className="img6"
                >
                    <div>
                        <img src="/images/pic1.jpg" />
                        
                    </div>
                    <div>
                        <img src="/images/pic2.jpg" />
                       
                    </div>
                    <div>
                        <img src="/images/pic3.jpeg" />
                       
                    </div>
                    <div>
                        <img src="/images/a1.jpg" />
                       
                    </div>
                    <div>
                        <img src="/images/lee2.jpg" />
                       
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default Card2;