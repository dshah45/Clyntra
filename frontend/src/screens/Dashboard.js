import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Chart from 'react-google-charts';
import { summaryOrder } from '../actions/orderActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

export default function Dashboard() {
  const orderSummary = useSelector((state) => state.orderSummary);
  const { loading, summary, orders, error } = orderSummary;


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const orderDetails = useSelector(state =>  state.orderDetails)
    const {order1} = orderDetails
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(summaryOrder());
  // }, [dispatch]);
  return (
    <div>
      <div className="row">
        <h1>Dashboard</h1>
      </div>
    
        <div>
          <h1>Total:{order1.totalPrice}</h1>
        </div>
        
    
    </div>
  );
}