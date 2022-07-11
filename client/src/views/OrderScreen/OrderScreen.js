import React from 'react'
import { useDispatch,useSelector } from 'react-redux' 
import { useEffect } from 'react'
import { getUserOrders } from '../../actions/orderActions'

import './OrderScreen.css'
export default function OrderScreen() {

  const dispatch = useDispatch()
  const orderstate = useSelector(state=>state.getUserOrdersReducer)
  const {orders,error,loading}= orderstate

  useEffect(()=>{
     dispatch(getUserOrders())

  },[])

  return (
    <div>
        <h2 style={{fontSize: '35px'}}>My Orders </h2>
          <div className='row justify-content-center'>
             { loading && <div> Loading... </div>}
             { error && <div> Something went wrong... </div>}
             { orders && orders.map( order=>{

                  return <div className='col-md-8 pp'>
                    
                     <div className='flex-container'>
                          <div className="text-left w-100 m-1 ">
                            <h2 style={{fontSize:'25px'}} >Items</h2>
                            {order.orderItems.map(item=>{

                              return <div>
                                <h1> {item.name}[ {item.varient}*{item.quantity}]= {item.price}</h1>

                                </div>
                            })}
                              
                         </div>
                         {/*  */}
                          <div className="text-left w-100 m-1 "> 
                           <h2 style={{fontSize:'25px'}} >Address</h2>
                           <h1> Street : {order.shippingAddress.street}</h1>
                           <h1> City : {order.shippingAddress.city}</h1>
                           {/* <h1> Country : {order.shippingAddress.country}</h1>
                           <h1> Pincode : {order.shippingAddress.pincode}</h1> */}


                          </div >
                          {/*  */}
                          <div className="text-left w-100 m-1 pp2">
                          <h2 style={{fontSize:'25px'}} >Order Info</h2>
                          <ch1> Order Amount : { order.orderAmount}</ch1>
                          <br></br>
                          <ch1> Date : { order.createdAt.slice(0,10)} </ch1>
                          <br></br>
                          <ch1> Transaction Id :{ order.transactionId.slice(6)}</ch1>
                          <br></br>
                          <br></br>
                          <br></br>

                          {/* <h1> Order Id :{ order._id}</h1> */}

                          </div>   
                    </div>
                    </div>

              })  
             }


          </div>
    </div>
  )
}
