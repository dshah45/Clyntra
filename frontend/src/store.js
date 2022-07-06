import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productListReducer, productDetailsReducer,productDeleteReducer, productReviewCreateReducer,  productTopRatedReducer,} from './reducer/productReducer'
import { cartReducer } from './reducer/cartReducers'
import {userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userContactReducer, userDeleteReducer, userUpdateReducer } from './reducer/userReducer'
import { orderCreateReducer, orderDetailsReducer,orderPayReducer, orderListMyReducer, orderListReducer, orderDeliverReducer,   orderSummaryReducer } from './reducer/orderReducers'
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productReviewCreate: productReviewCreateReducer,
    productDelete: productDeleteReducer,
    productTopRated: productTopRatedReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userContact: userContactReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderList: orderListReducer,
    orderListMy: orderListMyReducer,
    orderDeliver: orderDeliverReducer,
    orderSummary: orderSummaryReducer,
    
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : []



const initialState = {
    cart: {
        cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage,
    },
    userLogin: { userInfo:userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store