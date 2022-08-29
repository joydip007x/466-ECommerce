

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
export const addNewProductsReducer = (state={ }, action) =>{
         

    switch(action.type){

        case 'CREATE_NEWPROD_REQ':
            return { loading:true,success:false,...state }
        case 'CREATE_NEWPROD_SUCCESS':
            return { loading:false,success:true,products:action.payload} 
        case 'CREATE_NEWPROD_FAILED':
            return { loading:false,success:false,products:action.payload}
            
        default              : return state
    }

}