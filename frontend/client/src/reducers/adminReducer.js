export const verifyAdminReducer= (state={},action)=>{

    switch(action.type){
     
        case 'ADMIN_LOGIN_REQUEST': return {

            loadingx:true,
            successx:false,
        }
        case 'ADMIN_LOGIN_SUCCESS': return {

            loadingx:false,
            successx:true,
            CurrentAdmin:action.payload
        }
        case 'ADMIN_LOGIN_FAILED': return {

            loadingx:false,
            successx:false,
            error:action.payload
            
        }
        default : return  state;
    }
}

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
export const verifyAOrderReducer = (state={ orders:[] }, action) =>{
         

    switch(action.type){

        case 'VERIFY_A_ORDER_REQ':
            return { loadx:true,sucx:false,...state }
        case 'VERIFY_A_ORDER_SUCCESS':
            return { loadx:false,sucx:true,orders:action.payload} 
        case 'VERIFY_A_ORDER_FAILED':
            return { loadx:false,sucx:false,error:action.payload}
            
        default: return state
    }

}