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
         stripeKey='pk_test_51LIeDmSDHEcZVYyiCaLHfTvYEyMS66I9Kxjpu08HyBsFU9YW8Ly2jCYpaMN1ocpwtcOyN3G6JaR52V7ku0DiJ1Io00fZletYZl'

        >

              <button className='btn_checkout'>Pay Now </button>
        </StripeCheckout>
   
    </div>
  )
}
