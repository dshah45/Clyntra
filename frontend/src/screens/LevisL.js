import React, { useState, useEffect } from "react";

import { Row, Col } from 'react-bootstrap'


import { Link } from "react-router-dom";
import Product from "../components/Product";


import axios from "axios";

function Levis({match}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("http://127.0.0.1:8000/api/levislow/");
      setProducts(data);
    }
    fetchProducts();
  }, []);
  return (
    <div>
    
    <br />
      <h1>Levis</h1>
   
      <Row>
      <Col md={3}>
        <div>{products.length} Products</div>
        <Link to="/levis" className="btn btn-light my-3">
        Go Back
      </Link>
    
      <Row>
        <Link style={{ textDecoration: 'none' }} to="/levishigh">Prices <i class="fas fa-arrow-up"></i></Link>
        <br />
        <br />
        <Link style={{ textDecoration: 'none' }}to="/">Prices <i class="fas fa-arrow-down"></i></Link>
        <br />
        <br />
        <Link style={{ textDecoration: 'none' }} to="/levisiew">Top Viewed Products <i class="fa fa-eye" aria-hidden="true"></i>
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

export default Levis;
