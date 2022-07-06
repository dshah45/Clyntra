import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Filter from "../components/Filter";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import { listProducts } from "../actions/productActions";
import Card1 from "../components/Card1";
import Contact from "../components/Contact";
import Deals from "../components/Deals";

import ProductCarousel from "../components/ProductCarousel";
import Deals2 from "../components/Deals2";
function TopP({history}) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, product1} = productList;

  return (
    <div>
    
      
      <h1>Top Products</h1>
      {loading ? (
       <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <div>
        <Row>
          {product1.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      
        </div>
      )}
   

    </div>
  );
}

export default TopP;
