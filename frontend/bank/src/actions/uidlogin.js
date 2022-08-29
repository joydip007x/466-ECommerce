import axios from 'axios'

export const loginUID=(user)=>async dispatch=>{

    dispatch({type:'USER_UID_REQUEST'})
    try {
       console.log(user);
       const response=await axios.post('/bankAPI/users/login',user)
       console.log("\nUID BANK___Login",response.data._id);
       const response2=await axios.get('/bankAPI/users/findbyUid',{params:{user:response.data._id}})
       dispatch({type:'USER_UID_SUCCESS',payload:response2.data})
       localStorage.setItem('currentBankUser',JSON.stringify(response2.data))
    //    window.location.href='/userAccounts'
    } catch (error) {
        dispatch({type:'USER_UID_FAILED',payload:error})
    }

}