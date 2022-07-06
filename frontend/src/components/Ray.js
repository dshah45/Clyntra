import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Ray({ray}) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link style={{ textDecoration: 'none' }} to={`/ray/${ray._id}`}>
                <Card.Img src={ray.image} />
            </Link>

            <Card.Body>
                <Link style={{ textDecoration: 'none' }}to={`/lee/${ray._id}`}>
                    <Card.Title as="div">
                        <strong><center>{ray.name}</center></strong>
                        <p className="para1">{ray.brand}</p>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={ray.rating} text={`${ray.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>


                <Card.Text as="h4">
                    ₹{lee.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Lee;

// import React, { Component } from 'react'


// export default class Product extends Component {
//     render() {
//         return (
//             <div>
//                 <ul className="products">
//                     {this.props.products.map(product => (
//                         <li key={product._id}>
//                             <div className="product">
//                                 <a href={"#" + product._id}>
//                                     <img src={product.image}></img>
//                                     <p>{product.title}</p>
//                                 </a>
//                                 <div className="product-price">
//                       <div>{product.price}</div>
//                       <button
//                         onClick={() => this.props.addToCart(product)}
//                         className="button primary"
//                       >
//                         Add To Cart
//                       </button>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//             </div>
//         )
//     }
// }
