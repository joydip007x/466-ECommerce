import {combineReducers} from 'redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getAllProductsReducer} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducer'

const finalReducer = combineReducers({
    
    getAllProductsReducer : getAllProductsReducer,
    cartReducer : cartReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

console.log(JSON.stringify(cartItems))

const initialState = {

    cartReducer : {
        cartItems : cartItems
    }
} 

const composeEnhancers = composeWithDevTools({})
const store= createStore( finalReducer, initialState , composeEnhancers(applyMiddleware(thunk)) )

export default store 


