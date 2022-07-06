import React, { useEffect } from 'react'
import { Button, Row, Col, ListGroup, Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'
function PlaceOrderScree({history}) {

    const orderCreate = useSelector(state =>  state.orderCreate)
    const {order,error, success} = orderCreate

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    cart.shippingPrice = (cart.itemsPrice >= 1000 ? 0 : 10).toFixed(2)
    cart.taxPrice = Number((0.05) * cart.itemsPrice).toFixed(2)

    cart.discount = (cart.cartItems.length >= 3 ? 1000 : 0).toFixed(2)
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice) - Number(cart.discount)).toFixed(2)
    cart.totalPriceUsd = (Number(cart.totalPrice) * 0.01368).toFixed(2)
    
    if (!cart.paymentMethod) {
        history.push('/payment')
    }


    useEffect(() => {
        if (success) {
            history.push(`/order/${order._id}`)
            dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [success, history])

    const placeOrder = () =>{
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            discount: cart.discount,
            totalPrice: cart.totalPrice,
            totalPriceUsd: cart.totalPriceUsd
        }))
        
    }
        return (
        <div>
            <CheckoutSteps step1 step2 step3 step4 />
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'> 
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p class="para3">
                                <strong>Shipping :</strong>
                                {cart.shippingAddress.address},
                                 {' '}
                                {cart.shippingAddress.city}
                                {' '}
                                {cart.shippingAddress.postalCode},
                                {' '}
                                {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <p class="para3">
                                <strong>Method :</strong>
                                {cart.paymentMethod}
                              
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {cart.cartItems.length === 0 ? <Message variant='info'>
                                Your cart is empty 
                                </Message>:(
                                    <ListGroup variant='flush'>
                                        {cart.cartItems.map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col>
                                                    <Image className="img3" src={item.image} alt={item.name} fluid rounded />
                                                    </Col>
                                                    <Col>
                                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                    </Col>
                                                    <Col md={4}>
                                                        {item.qty} X ₹{item.price} = ₹{(item.qty*item.price).toFixed(2)}
                                                    </Col>
                                                </Row>
                                                </ListGroup.Item>
                                        ))}
                                        </ListGroup>

                                )
                                }
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                
                <Col md={4}>
                <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>₹{cart.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping:</Col>
                                    <Col>₹{cart.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax:</Col>
                                    <Col>₹{cart.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                <Message variant='info'>
                                    <p class="para5">Add atleast 3 items to avail discount</p>
                                    <Col>Discount:</Col>
                                    <Col>₹{cart.discount}</Col>
                                    </Message>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Total:</Col>
                                    <Col>₹{cart.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total in USD:</Col>
                                    <Col>${cart.totalPriceUsd}</Col>
                                </Row>
                            </ListGroup.Item>



                            <ListGroup.Item>
                                {error && <Message variant='danger'>{error}</Message>}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button
                                    type='button'
                                    className='btn-block'
                                    disabled={cart.cartItems === 0}
                                    onClick={placeOrder}
                                >
                                    Place Order
                                </Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
           </Row>
        </div>
    )
}

export default PlaceOrderScree
