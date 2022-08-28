import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Admin.css"
import { verifyAdmin } from '../../actions/adminAction';

export default function AdminLogin() {

  const [email,setEmail]=useState('');
  const [password,setPass]=useState('');
  const dispatch=useDispatch()

  const {loadingx,successx}= useSelector( state=>state.verifyAdminReducer);

  useEffect(() => {
    
    if (localStorage.getItem('currentUser')){

      setTimeout(this, 1000)
      notify('',"You are Already Logged in as a User !",1000)
      window.location.href='/'
      }
    if (localStorage.getItem('currentAdmin')){
      setTimeout(this, 500)
      notify('',"You are Already Logged in as a Admin !",200)
      window.location.href='/'
    }
    
  }, [])
  

  const notify = (callId,msg,timex) => {

    if(callId==='' || callId==='passNotMatch'){
      return toast.warning(msg, {position: toast.POSITION.TOP_CENTER,autoClose:timex})
    }
    if(callId==='reg' ){
      toast.success(msg, {position: toast.POSITION.TOP_CENTER,autoClose:timex})
    }
  }
  function loginWithAdmin(){
      
    if(  !email   || !password ||  !email.match(/.+@.+/) ){
      if(!email.match(/.+@.+/)){setEmail('')}
      return notify('',"Fill Up Every Field Correctly",1000)
    }
     const admin={
       email, password
     }
     console.log("ADMIN :",admin);
     dispatch(verifyAdmin(admin))
     
  }
   console.log(" ADLOGIN ", loadingx,successx)
  return (
    <div  className="admin-login">
          <ToastContainer limit={2} />
      {/* <div>AdminLogin</div> */}
      { loadingx &&
        <div class="load_hold"> <div class="dots-bars-3">  </div></div>
      }
      {
        successx && !loadingx && (notify('reg',"Login As Admin Successful",2000) )
      }
              <div>
          <form class="login" >
            <t1>Admin Log In</t1>
            <input type="text" placeholder="Username"
              value={email} onChange={(e) => setEmail(e.target.value)} required
            />
            <input type="password" placeholder="Password"
              value={password} onChange={(e) => setPass(e.target.value)} required
            />
            <button type="button" id='log' onClick={loginWithAdmin} onsubmit="return false" >Login</button>
          </form>
        </div>
  </div>
  )
}
