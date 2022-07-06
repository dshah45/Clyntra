import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listUsers, deleteUser } from "../actions/userAction";

function UserListScreen({history}) {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
      if(userInfo && userInfo.isAdmin){
        dispatch(listUsers());
      }else{
          history.push('/login')
      }
        
  }, [dispatch, history, successDelete, userInfo]);


  return (
    <div>
      <h1>Sales</h1>
      { loading 
      ? (<Loader />)
        : error 
        ? (<Message variant='danger'>{error}</Message>)
        :(
            <Table striped bordered hover responsive className='table-sm'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ADMIN</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            
            </tbody>
            </Table>
        )}
    </div>
  );
}

export default UserListScreen;
