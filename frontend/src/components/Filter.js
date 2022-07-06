// // import React, { useEffect } from 'react';
// // import 'react-responsive-carousel/lib/styles/carousel.min.css';
// // import { Carousel } from 'react-responsive-carousel';
// // import { Row, Col } from 'react-bootstrap'
// // import { Link } from 'react-router-dom';
// // import brand from '../brand';
// // import Brand from './Brand';

// // const Filter = () => {
// //   return ( 
// //     <Carousel showArrows autoPlay showThumbs={false}>
// //     {brand.map(brands => (
                        
// //                         <Col key={brands._id} md={12}>
// //                           <Link to={`/brands/${brands._id}`}></Link>
// //                                     <Brand brand={brands} />
// //                                 </Col>
// //                             ))}
// // </Carousel>
// // /* <Carousel showArrows autoPlay showThumbs={false}>
// // {brand.map((brands) => (
// //   <div key={brands._id}>
// //     <Link to={`/brands/${brands._id}`}>
// //       <img className="img1" src={brands.image} alt={brands.name} />
// //        <p className="para2">{brands.name}</p> 
// //        <Brand brand={brands} ></Brand>
// //     </Link>
// //   </div>
// // ))}
// // </Carousel> */
// //    );
// // }
 




// // export default Filter



// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// class Filter extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Carousel autoPlay interval="2000" transitionTime="5000" className="img4">
//                     <div>
//                         <img src="/images/l1.png" />
                        
//                                            </div>
//                     <div>
//                         <img src="/images/h.jpg" />
                       
//                     </div>
//                     <div>
//                         <img src="/images/p1.png" />
                      
//                     </div>
//                     <div>
//                         <img src="/images/Levis.jpg" />
                        
//                     </div>
//                     <div>
//                         <img src="/images/r.jpg" />
                        
//                     </div>
//                 </Carousel>
//             </div>
//         )
//     };
// }

// export default Filter;

import React, { Component } from "react";

import Card3 from "./Card3";

class Filter extends Component {
  render() {
    let data = [
      {
        imgSrc: "https://i.imgur.com/7nbAJ0C.jpg",
      },
      {
        imgSrc: "https://i.imgur.com/pgCzueK.jpg",
      },
      {
        imgSrc: "https://i.imgur.com/d5aiXJP.jpg",
      },
      {
        imgSrc: "https://i.imgur.com/L75otV6.jpg",
      },
      {
        imgSrc: "https://i.imgur.com/qkPMr9D.jpg",
      },
    ];
    let buttonSetting = {
      placeOn: "middle-inside",
      hoverEvent: true,
      style: {
        left: {
          height: "50px",
          width: "50px",
          color: "#929393",
          background: "rgba(225, 228, 232, 0.8)",
          borderRadius: "50%",
        },
        right: {
          height: "50px",
          width: "50px",
          color: "#929393",
          background: "rgba(225, 228, 232, 0.8)",
          borderRadius: "50%",
        },
      },
    };
    return (
    //   <CarouselSlider
    //     slideItems={data}
    //     accEle={{ dots: false }}
    //     sliderBoxStyle={{
    //       width: "99%",
    //       height: "250px",
    //       margin: "10px 10px 0 5px",
    //     }}
    //     buttonSetting={buttonSetting}
    //   />
    <Card3 />
    );
  }
}

export default Filter;