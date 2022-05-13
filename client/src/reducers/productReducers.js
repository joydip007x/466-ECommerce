

export const getAllProductsReducer = (state={ products:[] }, action) =>{
         

    switch(action.type){

        case 'GET_All_REQ':
            return { loading:true,...state }
        case 'GET_All_SUCCESS':
            return { loading:false,products:action.payload} 
        case 'GET_All_FAILED':
            return { loading:false,products:action.payload}
            
        default              : return state
    }

}