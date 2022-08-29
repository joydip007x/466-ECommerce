import axios from 'axios'
const delay = ms => new Promise(res => setTimeout(res, ms));

export const getAllOrders=()=>async dispatch=>{

    dispatch({type:'GET_All_ORDER_REQ'})

    try {
        const response = await axios.get('/supplyAPI/orders/getAllOrders')
        console.log(response)
        dispatch({type:'GET_All_ORDER_SUCCESS', payload: response.data})
        // window.location.reload();

    } catch (error) {
        dispatch({type:'GET_All_ORDER_FAILED' , payload:error})
    }

}

export const ShippingAOrder=(orderid)=>async dispatch=>{

    dispatch({type:'GET_SHIP_ORDER_REQ'})
    console.log("ShiipingAOrder Action : ",orderid)
    try {
         await delay(2500);
        window.location.href='/';
        const response = await axios.post('/supplyAPI/orders/ShippingAOrder',orderid)
        console.log(response)
        dispatch({type:'GET_SHIP_ORDER_SUCCESS', payload: response})
       

    } catch (error) {
        dispatch({type:'GET_SHIP_ORDER_FAILED' , payload:error})
    }

}
