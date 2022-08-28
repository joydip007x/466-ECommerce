export const registerUserBankReducer= (state={},action)=>{

    switch(action.type){

        default: return state;
        case 'USER_REGISTER_BANK_REQUEST': return {

            loadingy:true,
            successy:false,
        }
        case 'USER_REGISTER_BANK_SUCCESS': return {

            loadingy:false,
            successy:true,
        }
        case 'USER_REGISTER_BANK_FAILED': return {

            loadingy:false,
            successy:false,
            error:action.payload
            
        }
     
    }
}
export const findBankUserReducer= (state={},action)=>{

    switch(action.type){

        case 'USER_FIND_BANK_REQUEST': return state;
        case 'USER_FIND_BANK_SUCCESS': return {

            CurrentUserBankUID:action.payload,
            uidfound: true ,
        }
        case 'USER_FIND_BANK_FAILED': return {

            error:action.payload,
            uidfound: false,
        
        }
        default : return state;
    }
}