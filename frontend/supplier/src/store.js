import {combineReducers} from 'redux'
import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { getAllOrdersReducer,ShippingAOrderReducer } from './reducer/supplierReducers';

const finalReducer = combineReducers({

    getAllOrdersReducer: getAllOrdersReducer,
    ShippingAOrderReducer : ShippingAOrderReducer,
})

const initialState = {
} 

const composeEnhancers = composeWithDevTools({})
const store= createStore( finalReducer, initialState , composeEnhancers(applyMiddleware(thunk)) )
export default store 


