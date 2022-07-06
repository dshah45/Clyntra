// src/reusable/image-gallery.component.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



class Card1 extends React.Component {

 
    render() {
        return (
            <div>
                
                <Carousel autoPlay="True" interval="2000" infiniteLoop transitionTime="1000" className="img4"
                >
                    <div>
                        <img src="/images/l1.png" />
                        
                    </div>
                    <div>
                        <img src="/images/h.jpg" />
                       
                    </div>
                    <div>
                        <img src="/images/p1.png" />
                       
                    </div>
                    <div>
                        <img src="/images/Levis.jpg" />
                       
                    </div>
                    <div>
                        <img src="/images/r.jpg" />
                       
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default Card1;