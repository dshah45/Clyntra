import React, { useState, useEffect } from "react";

import { Row, Col } from 'react-bootstrap'


import Product from "../components/Product";
import { Link } from "react-router-dom";


import axios from "axios";

function Raymond({match}) {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("http://127.0.0.1:8000/api/ray/");
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
        <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
    
      <Row>
        <Link style={{ textDecoration: 'none' }} to="/rayhigh">Prices <i class="fas fa-arrow-up"></i></Link>
        <br />
        <br />
        <Link style={{ textDecoration: 'none' }}to="/raylow">Prices <i class="fas fa-arrow-down"></i></Link>
        <br />
        <br />
        <Link style={{ textDecoration: 'none' }} to="/rayview">Top Viewed Products <i class="fa fa-eye" aria-hidden="true"></i>
    </Link>
       </Row>
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

export default Raymond;
