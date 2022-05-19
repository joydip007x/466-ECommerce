import axios from 'axios'

export const registerUser=(user)=>async dispatch=>{

    dispatch({type:'USER_REGISTER_REQUEST'})
    
    try{
        const response=await axio.post('/storeAPI/users/register', {user})
        dispatch({type:'USER_REGISTER_SUCCESS'})

    }
    catch{
        console.log("USER ACTION ERROR");
        dispatch({type:'USER_REGISTER_FAILED',payload: error})

    }
}