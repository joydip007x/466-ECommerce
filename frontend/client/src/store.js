import {combineReducers} from 'redux'
import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import {getAllProductsReducer,addNewProductsReducer} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducer'
import { registerUserReducer,loginUserReducer } from './reducers/userReducer'
import { registerUserBankReducer } from './reducers/userReducer_Bank'
import { placeOrderReducer,getUserOrdersReducer } from './reducers/orderReducers';
import { verifyAdminReducer,getAllOrdersReducer,verifyAOrderReducer } from './reducers/adminReducer'
const finalReducer = combineReducers({
    
    getAllProductsReducer : getAllProductsReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer:loginUserReducer,
    registerUserBankReducer: registerUserBankReducer,
    placeOrderReducer:placeOrderReducer ,
    getUserOrdersReducer: getUserOrdersReducer,
    verifyAdminReducer: verifyAdminReducer,
    getAllOrdersReducer: getAllOrdersReducer,
    verifyAOrderReducer: verifyAOrderReducer,
    addNewProductsReducer: addNewProductsReducer,
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser=localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const currentAdmin=localStorage.getItem('currentAdmin') ? JSON.parse(localStorage.getItem('currentAdmin')) : null


console.log(JSON.stringify(cartItems))

const initialState = {

    cartReducer : {
        cartItems : cartItems
    },
    loginUserReducer :{
        currentUser : currentUser
    },
    verifyAdminReducer :{
        currentAdmin : currentAdmin
    }

} 

const composeEnhancers = composeWithDevTools({})
const store= createStore( finalReducer, initialState , composeEnhancers(applyMiddleware(thunk)) )

export default store 


