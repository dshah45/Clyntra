import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({ product }) {
    return (
        <Card className="my-3 p-3 rounded img2">
            <Link style={{ textDecoration: 'none' }} to={`/product/${product._id}`}>
                <Card.Img src={product.image}  />
            </Link>

            <Card.Body>
                <Link style={{ textDecoration: 'none' }}to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong><center>{product.name}</center></strong>
                        <p className="para1">{product.brand}</p>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>


                <Card.Text as="h4">
                    ₹{product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product;
