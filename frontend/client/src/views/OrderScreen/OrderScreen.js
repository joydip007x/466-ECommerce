import React, { Component, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUserOrders } from '../../actions/orderActions'
import { getAllOrders, verifyAOrder, updateAdminBalance } from '../../actions/adminAction'
import { checkUser } from '../Homescreen';
import { Modal } from 'react-bootstrap'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './OrderScreen.css'

export default function OrderScreen() {

  const dispatch = useDispatch()
  const adminState = useSelector(state => state.verifyAdminReducer)
  const{ loadx,sucx}= useSelector(state=>state.verifyAOrderReducer);
  const { currentAdmin } = adminState

  const [UIDPass, setUIDPass] = useState("")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose_withConfirm = (order) => {
    // if (UIDPass != currentAdmin[0].password) {
    //   console.log(currentAdmin[0].password, " vs You vs ", UIDPass);
    //   toast.error("Admin's Credential Doesn't Match",
    //     { position: toast.POSITION.TOP_CENTER, autoClose: 3000 })
    //   setUIDPass("")
    //   setShow(false);
    //   return;
    // }
    // setUIDPass("")
    console.log('Accpeted' + order._id);
    dispatch(verifyAOrder({ orderid: order._id }))
    dispatch(updateAdminBalance(currentAdmin[0].email, order.orderAmount))
    toast.success("Order Forwared to Supplier " + order._id,
      { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
    setShow(false);
  }
  
  console.log("TEST "+ loadx + " : "+ sucx);


  const handleShow = () => setShow(true);

  const orderstate = useSelector(state => state.getUserOrdersReducer)
  const orderstateAdmin = useSelector(state => state.getAllOrdersReducer)
  const logState = !(!localStorage.getItem('currentAdmin'));
  var orders, error, loading;

  if (logState) { ({ orders, error, loading } = orderstateAdmin) }
  else { ({ orders, error, loading } = orderstate) }

  useEffect(() => {

    if (!logState) {
      dispatch(getUserOrders())
      checkUser()
    }
    else {
      dispatch(getAllOrders())
    }

  }, [])

  return (
    <div className='orderScreenHolder'>
      <ToastContainer limit={2} />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      {
        !logState ?
          (<h2 style={{ fontSize: '35px' }}>My Orders </h2>) :
          (<h2 style={{ fontSize: '35px' }}>Check Orders </h2>)
      }
      
      {
        (
          <div className='row justify-content-center'>
            {loading && <div> Loading... </div>}
            {error && <div> Something went wrong... </div>}
            {orders && orders.map(order => {

              return <div className='col-md-8 pp shadow-lg p-3 mb-1 bg-white rounded'>

                <div className='flex-container'>
                  <div className="text-left w-100 m-1 ">
                    <h2 style={{ fontSize: '25px' }} >Items</h2>
                    {order.orderItems.map(item => {

                      return <div>
                        <h1> {item.name}[ {item.varient}*{item.quantity}]= {item.price}</h1>
                      </div>
                    })}

                  </div>
                  {/*  */}
                  <div class="vertical"></div>
                  <div className="text-left w-100 m-1 ">
                    <h2 style={{ fontSize: '25px' }} >Customer Info</h2>
                    <h1> Name :{order.name} </h1>
                    <h1> {order.shippingAddress.street},{order.shippingAddress.city},{order.shippingAddress.pincode},{order.shippingAddress.country} </h1>


                  </div >
                  {/*  */}
                  <div className="text-left w-100 m-1 pp2">
                    <h2 style={{ fontSize: '25px' }} >Order Info</h2>
                    <ch1> Order Amount : {order.orderAmount}</ch1>
                    <br></br>
                    <ch1> Date : {order.createdAt.slice(0, 10)} </ch1>
                    <br></br>
                    <ch1> Transaction Id :{order.transactionId.slice(12)}</ch1>
                    <br></br>
                    <br></br>
                    <br></br>


                    {/* <h1> Order Id :{ order._id}</h1> */}
                  </div>
                  <div className="ExtendedOrder">
                    {logState && order.isDelivered === 0 &&


                      <div>

                        <button className="btn h1 clrme" onClick={handleShow}>CONFIRM</button>

                        {
                          <Modal show={show} className='modal modal_window' >
                            <Modal.Header closeButton onClick={handleClose}>
                              <Modal.Title className="pTname ">{"Order No : " + order._id.slice(4)}</Modal.Title>
                            </Modal.Header>

                            <Modal.Body style={{
                              maxHeight: 'calc(100vh - 210px)',
                              overflowY: 'auto'
                            }}>

                              <p className="pAmount ">{"Amount Paid : " + order.orderAmount}</p>
                              <hr id='sphr'></hr>
                              <p className="pMsg ">{"IF You Confirm this Order  " +
                                " A Supply Request will be sent to supplier with the transaction number "}</p>
                              <p className="pMsg2 ">{"Also "}{<a id="amountSP"> {order.orderAmount} </a>}{" /= BDT will be "}{
                                " Deducted From Admin's Bank Account "}</p>
                              <hr id='sphr'></hr>
                              <br></br>
                              {/* <div class="center">
                                <div class="float-input">
                                  <label>Please Enter Password</label>
                                  <input type="password" placeholder="Enter"
                                    onChange={(e) => setUIDPass(e.target.value)} required
                                  />
                                </div>
                              </div> */}

                            </Modal.Body>

                            <Modal.Footer>
                              <div className="btn-white accpet clshov" onClick={handleClose}>Close</div>
                              <div className="btn nclshov" onClick={() => handleClose_withConfirm(order)}>Proceed</div>

                            </Modal.Footer>
                          </Modal>
                        }
                      </div>
                    }
                    {
                      !logState && order.isDelivered === 0 &&
                      <div className='fixarea'>
                        <i class="fas fa-hourglass fa-xl " aria-hidden="true"></i>
                        <p id="fixt1">Processing</p>
                      </div>
                    }
                    { /*-------------------*/}
                    {
                      order.isDelivered === 2 &&
                      <div className='fixarea'>
                        {logState ? <i class="fa fa-check fa-xl " aria-hidden="true"></i> :
                          <i class="fa fa-smile-o fa-xl" aria-hidden="true"></i>}
                        {logState ? <p id="fixit">Supplied</p> : <p id="fixit">Products Received</p>}

                      </div>
                    }
                    {
                      order.isDelivered === 1 &&
                      <div className='fixarea'>
                        <i class="fas fa-cubes"></i>
                        <p>Under Shipping</p>

                      </div>
                    }

                  </div>
                </div>
              </div>

            })
            }
          </div>)
      }

    </div>
  )
}
