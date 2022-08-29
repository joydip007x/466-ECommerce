export const getAllOrdersReducer = (state={ orders:[] }, action) =>{
         

    switch(action.type){

        case 'GET_All_ORDER_REQ':
            return { loading:true,...state }
        case 'GET_All_ORDER_SUCCESS':
            return { loading:false,orders:action.payload} 
        case 'GET_All_ORDER_FAILED':
            return { loading:false,orders:action.payload}
            
        default: return state
    }

}
export const ShippingAOrderReducer = (state={ orders:[]  }, action) =>{
         

    switch(action.type){

        case 'GET_SHIP_ORDER_REQ':
            return { loading:true,...state }
        case 'GET_SHIP_ORDER_SUCCESS':
            return { loading:false,orders:action.payload} 
        case 'GET_SHIP_ORDER_FAILED':
            return { loading:false,orders:action.payload}
            
        default: return state
    }

}