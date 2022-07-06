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
import TopP from "./TopP";
import ProductCarousel from "../components/ProductCarousel";
import Deals2 from "../components/Deals2";
function HomeScreen({history}) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page,pages} = productList;

  let keyword = history.location.search
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div>
       <Card1 />
       <br />
      <br />
      
      <h1>Top Products</h1>
      {loading ? (
       <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <div>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        <Paginate page={page} pages={pages} keyword={keyword} />
        <Deals />
        
        <br />
        <Deals2 />
        {/* <ProductCarousel /> */}
       {/* <TopP /> */}
        </div>
      )}
   

      <Contact /> 
    </div>
  );
}

export default HomeScreen;
