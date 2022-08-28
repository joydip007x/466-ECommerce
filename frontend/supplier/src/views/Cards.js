
import  React,{Component,useState,useEffect} from 'react';
import Card from './Card';
import { useDispatch,useSelector } from 'react-redux';
import {Paper,Grid,CircularProgress} from '@material-ui/core';
import { getAllOrders,ShippingAOrder } from '../actions/supplierActions';
import { ToastContainer, toast } from 'react-toastify';


// import 'bootstrap';
// import '../node_modules/bootstrap/dist/css/bootstrap.css'

// import {Modal} from 'react-bootstrap'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { getAllOrders,ShippingAOrder } from './actions/supplierActions';
// import './App.css';

    


export const Cards = function Cards() {
    const orderstate = useSelector(state=>state.getAllOrdersReducer)
    const {orders,error,loading}= orderstate;

      const dispatch = useDispatch()
      const [show, setShow] = useState(false);
      const [UIDPass,setUIDPass]=useState("")
    
      const handleClose = () => setShow(false);
      const handleClose_withConfirm = (order) => { 
    
        if(UIDPass !="supplier"){
          // console.log(currentAdmin[0].password," vs You vs ",UIDPass);
          toast.error("Suppliers's Credential Doesn't Match",
           {position: toast.POSITION.TOP_CENTER,autoClose:3000})
          setUIDPass("")
          setShow(false);
          return;
        }
        console.log('Accpeted'+order._id); 
        dispatch(ShippingAOrder({orderid:order._id}))
        toast.success("Product Supplied for OrderID- "+order._id,
        {position: toast.POSITION.TOP_RIGHT,autoClose:3000})
        setUIDPass("")
        setShow(false);
    
      }
      const handleShow = () => setShow(true);
    
      useEffect(() => {
        dispatch(getAllOrders())
      }, [])

    return (
        
        orderstate.length ? <CircularProgress size={40}
        left={-20}
        top={10}
        status={'loading'}
        style={{marginLeft: '50%',marginTop:'20%'}} /> :(
          
            <Grid container direction="coloumn" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
                {orders.map((order)=>(
                  <Grid key={order.transactionId} item xs={12} sm={12}>
                    <Card order={order}></Card>
                  </Grid>
                ))}
            </Grid>
        

        
    ));
}

export default Cards;


{/* <div className='row justify-content-center'>
//              { loading && <div> Loading... </div>}
//              { error && <div> Something went wrong... </div>}
//              { orders && orders.map( order=>{ */}

//                   return ( order.isDelivered!=0 && <div className='col-md-8 pp  shadow-lg p-3 mb-1 bg-white rounded '>
                    
//                     { 
//                      <div className='flex-container'>
//                       <i class="fa-duotone fa-truck-clock"></i>

                      
//                      <div className="text-left d-flex w-50 m-1 pp2">
                        
                     
//                          <ch1> Transaction Id: { order.transactionId.slice(12)}</ch1>
//                           <ch1> Order Amount : { order.orderAmount} </ch1>
//                           <br></br>
//                           <ch1> Date : { order.createdAt.slice(0,10)} </ch1>
//                           <br></br>
//                           <br></br>
                          

//                           {/* <h1> Order Id :{ order._id}</h1> */}
//                           </div>  
//                          {/*  */}

//                           {/* <div className="text-left w-100 m-1 "> 
//                            <h2 style={{fontSize:'25px'}} >Address</h2>
//                            <h1> Street : {order.shippingAddress.street}</h1>
//                            <h1> City : {order.shippingAddress.city}</h1>
//                            {/* <h1> Country : {order.shippingAddress.country}</h1>
//                            <h1> Pincode : {order.shippingAddress.pincode}</h1> 
//                           </div > */}
                          
//                           {/*  */}
//                           {/* <div className="text-left w-100 m-1 pp2">
//                           <h2 style={{fontSize:'25px'}} >Order Info</h2>
//                           <ch1> Order Amount : { order.orderAmount}</ch1>
//                           <br></br>
//                           <ch1> Date : { order.createdAt.slice(0,10)} </ch1>
//                           <br></br>
//                           <ch1> Transaction Id :{ order.transactionId.slice(12)}</ch1>
//                           <br></br>
//                           <br></br>
//                           <br></br>
                          

//                           {/* <h1> Order Id :{ order._id}</h1> }
//                           </div>   */}
//                           <div className="ExtendedOrder">
//                           <div class = "vertical"></div>
//                           <div class = "vertical2"></div>

//                           {order.isDelivered===1 &&
//                            <div /*class="circle small"*/>
//                           {/* <h3>GFDA / No. 65</h3> */}
//                           <button className="btn h1" onClick={handleShow}>Supply Product</button>
//                           {/*-----------------M--O--D--A--L------------------------*/}
//                           <Modal show={show} className='modal modal_window' >
//                             <Modal.Header closeButton onClick={handleClose}>
//                               <Modal.Title className="pTname ">{"Order No.-"+order._id.slice(4)}</Modal.Title>
//                             </Modal.Header>

//                             <Modal.Body>
//                               <p className="pCname ">{"Customer Name : "+ order.name}</p>
//                               <p className="pAdd ">{"Adress : "+order.shippingAddress.street+","+order.shippingAddress.city+","+order.shippingAddress.country+"-"+order.shippingAddress.pincode}</p>
//                               <hr id='sphr'></hr>
//                               <p className="pAmount ">{"Amount : "+order.orderAmount}</p>
//                               <p className="pTrx ">{"Trx Id. : "+order.transactionId}</p>

//                               <hr id='sphr'></hr>
//                               <div className="itemfix">
//                               {order.orderItems.map(item=>{

//                                 return <div >
//                                   <h1 id="spfont"> {item.name}[ {item.varient}*{item.quantity}]= {item.price}</h1>
//                                   </div>
//                                 })}
//                                 </div>
//                               {/* <p id="pAmount ">{"Shipment City Zip Code. "+order.shippingAddress.pincode}</p> */}
//                               {/* <p>{"Number of Products"+Object.keys( order.orderItem).length}</p> */}
//                               <hr></hr>
//                               <p className="pMsg ">{"IF You Confirm this Supply Request "+
//                               "  Objects will be transferred from your inventory "}</p>
                        
//                              <hr id='sphr'></hr>
//                              <div class="center">
//                               <div class="float-input">
//                                 <label id="slab">Suppliers's BankUID Password</label>
//                                 <input type="password" placeholder="Enter" 
//                                 value={UIDPass}  onChange={(e)=>setUIDPass(e.target.value)} required
//                                 />
//                               </div>
//                             </div>
//                             </Modal.Body>

//                             <Modal.Footer>
//                                 <div className="btn-white accpet clshov" onClick={ handleClose}>CLOSE</div>
//                                 <div className="btn  nclshov" onClick={ ()=>handleClose_withConfirm(order) }>Accept</div>

//                             </Modal.Footer>
//                           </Modal>
//                         </div>
//                           }
//                          { /*-------------------*/}
//                           {
//                            order.isDelivered===2 &&
//                           <div className='fixarea'>
//                         <i class="far fa-check-circle"></i>
//                           <p id="fixit">Supplied</p> 
//                           </div>
//                           }
                         

//                           </div>
//                     </div>}
//                     </div>