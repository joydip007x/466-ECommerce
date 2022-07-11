export const placeOrderReducer= (state={},action)=>{

    switch(action.type){

        case 'PLACE_ORDER_REQUEST': return {

            loading:true,
            success:false,
        }
        case 'PLACE_ORDER_SUCCESS': return {

            loading:false,
            success:true,
        }
        case 'PLACE_ORDER_FAILED': return {

            loading:false,
            success:false,
            error:action.payload
            
        }
        default : return state;
    }
}


export const getUserOrdersReducer = (state={ orders:[] }, action) =>{
         

    switch(action.type){

        case 'GET_USER_ORDERS_REQ':
            return { loading:true,...state }
        case 'GET_USER_ORDERS_SUCCESS':
            return { loading:false,orders:action.payload} 
        case 'GET_USER_ORDERS_FAILED':
            return { loading:false,error:action.payload}
            
        default              : return state
    }

}