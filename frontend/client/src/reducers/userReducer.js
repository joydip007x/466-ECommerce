
export const registerUserReducer= (state={},action)=>{

    switch(action.type){

        case 'USER_REGISTER_REQUEST': return {

            loading:true,
            success:false,
        }
        case 'USER_REGISTER_SUCCESS': return {

            loading:false,
            success:true,
        }
        case 'USER_REGISTER_FAILED': return {

            loading:false,
            success:false,
            error:action.payload
            
        }
        default : return state;
    }
}

export const loginUserReducer= (state={},action)=>{

    switch(action.type){

        case 'USER_LOGIN_REQUEST': return {

            loadingx:true,
            successx:false,
        }
        case 'USER_LOGIN_SUCCESS': return {

            loadingx:false,
            successx:true,
            CurrentUser:action.payload
        }
        case 'USER_LOGIN_FAILED': return {

            loadingx:false,
            successx:false,
            error:action.payload
            
        }
        default : return state;
    }
}