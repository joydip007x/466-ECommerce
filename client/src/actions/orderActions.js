import axios from 'axios'
export const placeOrder =(token,subtotal)=> async(dispatch, getState)=>{ 

    dispatch({type:'PLACE_ORDER_REQUEST'})
    const currentUser= getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems
    try{

        const response=await axios.post('/storeAPI/orders/placeOrder',{token,subtotal,currentUser,cartItems});
        dispatch({type:'PLACE_ORDER_SUCCESS'})
        console.log(response.json());

    }catch(error){
        dispatch({type:'PLACE_ORDER_FAILED'})
    }
}