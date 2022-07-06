import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from 'react-bootstrap'
import Paginate from "../components/Paginate";
import { Link } from "react-router-dom";
import Product from "../components/Product";


import axios from "axios";

function Peter({match}) {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { page,pages} = productList;


  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("http://127.0.0.1:8000/api/peter/");
      setProducts(data);
    }
    fetchProducts();
  }, []);
  return (
    <div>
    
    <br />
      <h1>Peter England</h1>
     
      <Row>
        
      <Col md={3}>
        <div>{products.length} Products</div>
        <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
    
      <Row>
        <Link style={{ textDecoration: 'none' }} to="/phigh">Prices <i class="fas fa-arrow-up"></i></Link>
        <br />
        <br />
        <Link style={{ textDecoration: 'none' }}to="/plow">Prices <i class="fas fa-arrow-down"></i></Link>
        <br />
        <br />
        <Link style={{ textDecoration: 'none' }} to="/pview">Top Viewed Products <i class="fa fa-eye" aria-hidden="true"></i>
    </Link>
       </Row>
       </Col>
        {products.map((product) => (
         
          <Col key={product._id} sm={12} md={3} lg={3} xl={3}>
            <Product product={product} />
          </Col>
        ))}

      </Row>
      <Paginate page={page} pages={pages} />
    </div>
  );
}

export default Peter;
