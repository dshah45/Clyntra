import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import brand from '../brand'

function Brand({ brand }) {
    return (
        <Card className="my-3 p-3 rounded img1">
            <Link style={{ textDecoration: 'none' }} to={`/brand/${brand._id}`}>
                <Card.Img src={brand.image} className="img1" />
            </Link>

            <Card.Body>
                <Link style={{ textDecoration: 'none' }}to={`/brand/${brand._id}`}>
                    <Card.Title as="div" className="head">
                       
                    </Card.Title>
                </Link>

            </Card.Body>
        </Card>
    )
}

export default Brand