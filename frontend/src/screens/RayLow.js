import React, { useState, useEffect } from "react";

import { Row, Col } from 'react-bootstrap'

import { Link } from "react-router-dom";
import Product from "../components/Product";


import axios from "axios";

function Seller({match}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("http://127.0.0.1:8000/api/raylow/");
      setProducts(data);
    }
    fetchProducts();
  }, []);
  return (
    <div>
    
    <br />
      <h1>Raymond</h1>
     
      <Row>
        
        <Col md={3}>
        <div>{products.length} Products</div>
        <Link to="/ray" className="btn btn-light my-3">
        Go Back
      </Link>
        <Link to="/rayhigh">Prices<i class="fas fa-arrow-up"></i></Link>
        
        <Link to="/">Prices<i class="fas fa-arrow-down"></i></Link>
        </Col>
    
        {products.map((product) => (
         
          <Col key={product._id} sm={12} md={3} lg={3} xl={3}>
            <Product product={product} />
          </Col>
        ))}

      </Row>

    </div>
  );
}

export default Seller;
