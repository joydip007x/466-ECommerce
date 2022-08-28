import axios from 'axios'
const delay = ms => new Promise(res => setTimeout(res, ms));

export const registerUser=(user)=>async dispatch=>{

    dispatch({type:'USER_REGISTER_REQUEST'})
    
    try{
        const response=await axios.post('/storeAPI/users/register', user)
        console.log('userAction: ',response)
        dispatch({type:'USER_REGISTER_SUCCESS'})
        await delay(2500);
        window.location.href='/login'

    }
    catch(error){
        console.log("USER ACTION ERROR", error);
        dispatch({type:'USER_REGISTER_FAILED',payload: error})
    }
}

export const loginUser=(user)=>async dispatch=>{

    dispatch({type:'USER_LOGIN_REQUEST'})
    try {
        const response=await axios.post('/storeAPI/users/login', user)
        console.log("userActionLogin",response)
        dispatch({type:'USER_LOGIN_SUCCESS',payload:response.data})
        localStorage.setItem('currentUser',JSON.stringify(response.data))
        localStorage.removeItem('currentAdmin');
        await delay(2500);
        window.location.href='/uidCheck'
    
    }
    catch(error){
        dispatch({type:'USER_LOGIN_FAILED',payload:error})
    }
}

export const logoutUser=()=>dispatch=>{

    localStorage.removeItem('currentUser');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('currentUserUID');
    window.location.href='/login'
}

