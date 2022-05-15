import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';

export default function CartScreen() {

  const cartState= useSelector(state=>state.cartReducer)
  const cartItems= cartState.cartItems
  
  const temp="JSON.stringify(item.prices[0]).split(',')[0].split(':')[1]"
  return (
    <div>
        <div className='row justify-content-center'>

           <div className='col-md-6'>

              <h1 style={{fontSize:"40px"}}>My Cart</h1>

              {cartItems.map(item=>{

                /*default prize = Price of First Variant of the Product */
               const defaultPrize=JSON.stringify(item.prices[0]).split(',')[0].split(':')[1];  
                {console.log(item.varients )}
                return <div className='flex-container'>

                <div className='UnitpriceFlex'>
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
                    <i className='fa fa-plus ' id='cartPageIconPlus' aria-hidden="true"></i> 
                    &nbsp; &nbsp;
                    <b id='cartPageQuantity_text'>{item.quantity}</b> 
                    &nbsp;&nbsp;&nbsp;
                    <i className='fa fa-minus' id='cartPageIconMinus' aria-hidden="true"></i>
                    <hr/>
                    </div>
                    
                </div>
                <div>

                </div>
                <div>

                </div>

              </div>

              })}
              
             
            </div>

           <div className='col-md-4'>


           </div>

        </div>
    </div>
  )
}
