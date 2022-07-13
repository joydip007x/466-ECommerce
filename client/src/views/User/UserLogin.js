import React,{useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch,useSelector } from 'react-redux';

import { loginUser } from '../../actions/userAction';
import {checkLoggedAsAdmin} from '../Homescreen';

export default function UserLogin() {

  const [email,setEmail]=useState('');
  const [password,setPass]=useState('');

  const dispatch=useDispatch()
  const delay = ms => new Promise(res => setTimeout(res, ms));

  useEffect(() => {
    
      checkLoggedAsAdmin();
      if (localStorage.getItem('currentUser')){

        setTimeout(this, 500)
        notify('',"Fill Up Every Field Correctly",400)
        window.location.href='/'
      }
    
  }, [])
  
  const {loadingx,successx}= useSelector( state=>state.loginUserReducer);

  const notify = (callId,msg,timex) => {

    if(callId==='' || callId==='passNotMatch'){
      return toast.warning(msg, {position: toast.POSITION.TOP_CENTER,autoClose:timex})
    }
    if(callId==='reg' ){
       toast.success(msg, {position: toast.POSITION.TOP_CENTER,autoClose:timex})
    }
  }
  
  function loginWithUser(){
      
    if(  !email   || !password ||  !email.match(/.+@.+/) ){
      if(!email.match(/.+@.+/)){setEmail('')}
      return notify('',"Fill Up Every Field Correctly",1000)
    }
     const user={
       email, password
     }
     console.log("LOGIN :",user);
     dispatch(loginUser(user))
    
     
}
  return (
    <div>
        
         <ToastContainer limit={2} />
        <div className='row justify-content-center'>
            <div className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded ' id='uReginputHolder' validate>

                <html_banner className="text-center"> LOGIN </html_banner>
                <div>
                    { 
                      loadingx && !successx && 
                      <div class="load_hold" > <div class="dots-bars-3">  </div></div>
                    }
                    {
                       successx && !loadingx && (notify('reg',"Login Successful",900) )
                       
                    }
                   <input type={'email'} placeholder="Email" className='form-control'
                    value={email}  onChange={(e)=>setEmail(e.target.value)} required/>
                   <input type={'password'} placeholder="Password" className='form-control' 
                    value={password}  onChange={(e)=>setPass(e.target.value)} required/>
                  
                   <button type="button" className='btn-outline-dark registerButton mt-3'
                   onClick={ loginWithUser }
                   >SUBMIT</button>
                </div>

            </div>
            <a href='/register' id='clicktoLog'> <b>New</b> User ? Create an Account! </a>
        </div>
    </div>
  )
}
