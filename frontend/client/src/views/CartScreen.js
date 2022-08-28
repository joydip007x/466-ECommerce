import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';

import { addToCart,deleteFromCart } from '../actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import { checkUser } from './Homescreen';
import Checkout from '../components/Checkout/Checkout';


export default function CartScreen() {

  checkUser();
  const notify = (callId,msg) => {

    toast.clearWaitingQueue({containerId:'default'});
    if(callId==='limit'){
      return toast.info(msg, {position: toast.POSITION.TOP_CENTER,autoClose: 1000})
    }
    toast('Default!', { position: toast.POSITION.BOTTOM_LEFT })

  }
  const cartState= useSelector(state=>state.cartReducer)
  const cartItems= cartState.cartItems

  const dispatch=useDispatch()
  // const temp="JSON.stringify(item.prices[0]).split(',')[0].split(':')[1]"

  function increaseCount(item){
    if(item.quantity===20) 
        return notify('limit',"We deliver maximum of 20 quantities ")
    dispatch(addToCart(item,Math.min(item.quantity+1,20),item.varient))
  }
  function decreaseCount(item){
    if(item.quantity===1) 
       return notify('limit',"Can't Order Less than 1 quantities")
    dispatch(addToCart(item,Math.max(item.quantity-1,1),item.varient))
  }
  function removeItemCart(item){
      dispatch(deleteFromCart(item))
  }

  var subtotal=cartItems.reduce((x,item)=>x+item.price,0)
///////////////////////////////////////////////////////////////////////////////////

// // Some random colors
// const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

// const numBalls = 50;
// const balls = [];

// for (let i = 0; i < numBalls; i++) {
//   let ball = document.createElement("div");
//   ball.classList.add("ball");
//   ball.style.background = colors[Math.floor(Math.random() * colors.length)];
//   ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
//   ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
//   ball.style.transform = `scale(${Math.random()})`;
//   ball.style.width = `${Math.random()}em`;
//   ball.style.height = ball.style.width;
  
//   balls.push(ball);
//   document.body.append(ball);
// }

// // Keyframes
// balls.forEach((el, i, ra) => {
//   let to = {
//     x: Math.random() * (i % 2 === 0 ? -11 : 11),
//     y: Math.random() * 12
//   };

//   let anim = el.animate(
//     [
//       { transform: "translate(0, 0)" },
//       { transform: `translate(${to.x}rem, ${to.y}rem)` }
//     ],
//     {
//       duration: (Math.random() + 1) * 2000, // random duration
//       direction: "alternate",
//       fill: "both",
//       iterations: Infinity,
//       easing: "ease-in-out"
//     }
//   );
//});

/////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div id='basic_container'>
      
      <ToastContainer limit={1} containerId="default"/>
        <div className='row justify-content-center' id='consumeBody'>
          
           <div className='back_container'>
            <i className='fas fa-chevron-circle-left goback  ' aria-hidden="true" 
             onClick={ ()=> window.location.replace('/')}
            ></i>
            <p className='goback2'>Go Back</p>
           </div>
           <div className='col-md-6 cartContainer'>

              <h4 id='myCartText' >My Cart</h4>
              <hr id="allhr"></hr>

              {
              cartItems.length ==0  ?
                <div id="noItemDiv"> 
                  <h3 id='noItemsinCart'>No items in your Cart. Visit the <a href='/'>Homepage</a></h3> 
                  <h3 id='noItemsinCart2'>or Visit <a href= '/orders' > My Orders </a> for recent order info</h3> 
                </div> :
                
              

              (cartItems.map(item=>{

                /*default prize = Price of First Variant of the Product */
               const defaultPrize=JSON.stringify(item.prices[0]).split(',')[0].split(':')[1];  
                {console.log(item.varients )}
                return <div className='flex-container'>

                <div className='UnitpriceFlex m-1 w-100 text-left'>
                    <custom_h1 className="type1_text">{item.name } 
                    [{item.varient!="null" ? item.varient :  item.varients[0]  } ]
                    <br></br>
                    </custom_h1>

                    <custom_h1 className="type2_text">Price : <></>
                    {item.varient!="null" ? item.prices[0][item.varient] :  defaultPrize  }
                    * {item.quantity} Unit
                    = {JSON.stringify(item.price)!='null'?
                    item.price: defaultPrize* item.quantity }</custom_h1>
                    
                    <div className="type2_text">

                    <custom_h1 id='cartPage_defQ'>Quantity :&nbsp;</custom_h1>
                    <i className='fa fa-plus ' 
                       id='cartPageIconPlus' 
                       aria-hidden="true"
                       onClick={()=> increaseCount(item)}>
                   </i> 
                    &nbsp; &nbsp;
                    <b id='cartPageQuantity_text'>{item.quantity}</b> 
                    &nbsp;&nbsp;&nbsp;
                    <i className='fa fa-minus' id='cartPageIconMinus' 
                    aria-hidden="true" 
                    onClick={()=> decreaseCount(item) }>
                    </i>
                    <hr/>
                    
                    </div>
                    
                </div>
                <div>
                    <img  className='m-1 w-100' id="cartPageProdImg" src={item.image}  ></img>
                </div>

                <div>
                <i className=' fa fa-trash  mt-5 w-100 ' 
                  id='cartPageIconTrash' aria-hidden="true" onClick={()=>removeItemCart(item)}>

                  </i>
                </div>
              
              </div>

              }))
              
            }
            </div>
           
           { 
           cartItems.length !=0  && 
           <div className='col-md-4 flex-container subtotal text-right'>

                  <h1 className='type3_text subt'>Subtotal : { subtotal} Bdt/=</h1>
                  <Checkout  subtotal={subtotal} />
           </div>

            }

        </div>
    </div>
  )
}
