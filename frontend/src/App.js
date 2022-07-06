import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';


import Sidebar from "./components/Sidebar";
import { HashRouter, Switch, Route } from "react-router-dom";
// import {
//   Product1,
//   ProductOne,
//   ProductTwo,
//   ProductThree,
//   ProductFour,
//   ProductFive,
// } from "./screens/Product1";

import HomeScreen from './screens/HomeScreen';
import './bootstrap.min.css'; 

import Footer from './components/Footer';
import ProductScreen from './screens/ProductScreen';
import Seller from './screens/Seller';
import LeeLow from './screens/LeeLow';
import Leehigh from './screens/Leehigh'
import Raymond from './screens/Raymond';
import RayHigh from './screens/RayHigh'
import RayLow from './screens/RayLow'
import Top from './screens/Top';
import Bottom from './screens/Bottom,';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import Product from './components/Product';
import Levis from './screens/Levis';
import LevisL from './screens/LevisL';
import LevisH from './screens/LevisH'
import products from './products'
import F from './components/F'
import Peter from './screens/Peter';
import Dashboard from './screens/Dashboard';

import PeterLow from './screens/PeterLow';
import Peterhigh from './screens/PeterHigh';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import PlaceOrderScree from './screens/PlaceOrderScree';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import OrderScreen from './screens/OrderScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import HM from './screens/HM';
import Sales from './screens/Sales'
import Contact1 from './screens/Contact1';
import LeeView from './screens/LeeView';
import About from './screens/About';
class App extends React.Component {

  render(){
  return (
    <HashRouter>    
    <Route>
      <Header />
     
  
      <main className="py-3">
      
      <Container>

        <Route path='/' component={HomeScreen} exact />
       


        <Route path='/login' component={LoginScreen}  />
        <Route path='/register' component={RegisterScreen}  />
        <Route path='/profile' component={ProfileScreen}  />
        <Route path='/contact' component={Contact1}  />
        <Route path='/about' component={About}  />

        <Route path='/dashboard' component={Dashboard}  />
  

        <Route path='/shipping' component={ShippingScreen}  />
        <Route path='/payment' component={PaymentScreen}  />
        <Route path='/placeorder' component={PlaceOrderScree}  />
        <Route path='/order/:id' component={OrderScreen}  />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen} />

        <Route path='/admin/userList' component={UserListScreen}  />
        <Route path='/admin/sales' component={Sales}  />
        <Route path='/admin/user/:id/edit' component={UserEditScreen}  />
        <Route path='/admin/productList' component={ProductListScreen}  />
        <Route path='/admin/orderList' component={OrderListScreen}  />
        <Route path='/lee' component={Seller} />
        <Route path='/leelow' component={LeeLow} />
        <Route path='/leehigh' component={Leehigh} />
        <Route path='/leeview' component={LeeView} />
        <Route path='/ray' component={Raymond} />
        <Route path='/rayhigh' component={RayHigh} />
        <Route path='/raylow' component={RayLow} />
        <Route path='/levis' component={Levis} />
        <Route path='/levishigh' component={LevisH} />
        <Route path='/levislow' component={LevisL} />
        <Route path='/peter' component={Peter} />
        <Route path='/plow' component={PeterLow} />
        <Route path='/phigh' component={Peterhigh} />
        <Route path='/hm' component={HM} />
        <Route path='/top' component={Top} />
        <Route path='/bottom' component={Bottom} />
        

      
        </Container>
      </main>
      <br />
      <br />
      <Footer />
    </Route>
    </HashRouter>
   
  );
}
}
export default App;
