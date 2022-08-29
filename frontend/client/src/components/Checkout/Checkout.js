import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch,useSelector } from 'react-redux';

import { placeOrder } from '../../actions/orderActions';
import {updateBalance} from '../../actions/adminAction';

import './Checkout.css'
export default function Checkout({subtotal}) {

  const dispatch= useDispatch();

  const orderState= useSelector((state)=> state.placeOrderReducer)
  const userState = useSelector(state=>state.loginUserReducer)

  const {currentUser}= userState
  const {loading,error,success}=orderState;
  function tokenHander(token) {
    console.log(token)
    dispatch(placeOrder(token,subtotal))
    dispatch(updateBalance(currentUser.email,subtotal,token))
    {console.log("EFFECT " ,loading)}

  }
  return (

    <div>
      {  loading && (<div class="load"></div>)  }
        {  success &&
         (<div class="container">  
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
              <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <b id="paytxt">Payment OK</b>
           </div>)
        }
    <div>

        { console.log(" return " ,loading) }
        
         {
         !success && !loading &&
        <StripeCheckout

         amount={subtotal*100}
         shippingAddress
         token={tokenHander}
         currency='BDT'
         stripeKey='pk_test_51LJdoPD9PVEyJI4UvvDlPGKKTlwUQOYffUqygRZU8snRITH4WQoCGQwsZWEdubhMNfxplKJAlBN4Mdg6BfBMzk0g00ADD0ottW'

        >
           <button className='btn_checkout'>Pay Now </button> 
        </StripeCheckout>
        }
   
    </div>
    </div>
  )
}
