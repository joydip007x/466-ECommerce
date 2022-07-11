import {combineReducers} from 'redux'
import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import {getAllProductsReducer} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducer'
import { registerUserReducer,loginUserReducer } from './reducers/userReducer'
import { registerUserBankReducer } from './reducers/userReducer_Bank'
import { placeOrderReducer,getUserOrdersReducer } from './reducers/orderReducers';
const finalReducer = combineReducers({
    
    getAllProductsReducer : getAllProductsReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer:loginUserReducer,
    registerUserBankReducer: registerUserBankReducer,
    placeOrderReducer:placeOrderReducer ,
    getUserOrdersReducer: getUserOrdersReducer,
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser=localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null


console.log(JSON.stringify(cartItems))

const initialState = {

    cartReducer : {
        cartItems : cartItems
    },
    loginUserReducer :{
        currentUser : currentUser
    }
} 

const composeEnhancers = composeWithDevTools({})
const store= createStore( finalReducer, initialState , composeEnhancers(applyMiddleware(thunk)) )

export default store 


