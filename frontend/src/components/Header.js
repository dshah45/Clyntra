import React from "react";

import { Navbar, Nav, Container, Row, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userAction'
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  const userLogin = useSelector( state => state.userLogin)

  const { userInfo } = userLogin
  const dispatch = useDispatch()
  
  const logoutHandler = () => {
    dispatch(logout('/'))
  }

  return (
    <header className="title">
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Clyntra</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="ml-auto">
              
              {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                                )}
              { userInfo && userInfo.isAdmin  && (
                 <NavDropdown title='Admin' id='adminmenu'>
                 <LinkContainer to='/admin/userList'>
                     <NavDropdown.Item>Users</NavDropdown.Item>
                 </LinkContainer>
                 <LinkContainer to='/admin/productList'>
                     <NavDropdown.Item>Products</NavDropdown.Item>
                 </LinkContainer>

                 <LinkContainer to='/admin/orderList'>
                     <NavDropdown.Item>Orders</NavDropdown.Item>
                 </LinkContainer>

                 {/* <LinkContainer to='/dashboard'>
                     <NavDropdown.Item>Dashboard</NavDropdown.Item>
                 </LinkContainer> */}
                 {/* <LinkContainer to='/admin/userlist'>
                     <NavDropdown.Item>Sales</NavDropdown.Item>
                 </LinkContainer> */}

                 
             </NavDropdown>
              )}
              <NavDropdown title='Products' id='username'>
              <LinkContainer to="/lee">
                 
                <NavDropdown.Item>Lee</NavDropdown.Item>
              
              </LinkContainer>
              <LinkContainer to="/ray">
                <NavDropdown.Item>Raymond</NavDropdown.Item>
               
              </LinkContainer>
              <LinkContainer to="/levis">
                <NavDropdown.Item>Levis</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/peter">
                
                <NavDropdown.Item>Peter England</NavDropdown.Item>
                
              </LinkContainer>
               <LinkContainer to="/hm">
               
                <NavDropdown.Item>H&M</NavDropdown.Item>
               
              </LinkContainer> 
              </NavDropdown>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart align-right"></i> Cart
                </Nav.Link>
              </LinkContainer>
               {/* <SearchBox /> */}
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    </header>
    
    
  );
}

export default Header;
