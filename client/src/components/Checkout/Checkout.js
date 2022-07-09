import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch } from 'react-redux';

import { placeOrder } from '../../actions/orderActions';

export default function Checkout({subtotal}) {

  const dispatch= useDispatch();
  function tokenHander(token) {
    console.log(token)
    dispatch(placeOrder(token,subtotal))
  }
  return (
    <div>

        <StripeCheckout
         amount={subtotal*100}
         shippingAddress
         token={tokenHander}
         currency='BDT'
         stripeKey='pk_test_51LJdoPD9PVEyJI4UvvDlPGKKTlwUQOYffUqygRZU8snRITH4WQoCGQwsZWEdubhMNfxplKJAlBN4Mdg6BfBMzk0g00ADD0ottW'

        >

              <button className='btn_checkout'>Pay Now </button>
        </StripeCheckout>
   
    </div>
  )
}
