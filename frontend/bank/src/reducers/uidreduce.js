
export const loginUIDReducer= (state={},action)=>{

    switch(action.type){

        case 'USER_UID_REQUEST': return {

            loadingx:true,
            successx:false,
        }
        case 'USER_UID_SUCCESS': return {

            loadingx:false,
            successx:true,
            currentBankUser:action.payload
        }
        case 'USER_UID_FAILED': return {

            loadingx:false,
            successx:false,
            error:action.payload
        }
        default : return state;
    }
}