import React,{useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch,useSelector } from 'react-redux';

import { registerUser } from '../actions/userAction';

export default function UserRegister() {
  
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPass]=useState('');
  const [cpass,setCPass]=useState('');
  
  const notify = (callId,msg,timex) => {

    if(callId==='' || callId==='passNotMatch'){
      return toast.warning(msg, {position: toast.POSITION.TOP_CENTER,autoClose:timex})
    }
    if(callId==='reg' ){
       toast.success(msg, {position: toast.POSITION.TOP_CENTER,autoClose:timex})
    }
  }
  
  const dispatch=useDispatch()

  const {loading,success}= useSelector( state=>state.registerUserReducer);
  //console.log("regState "+loading , success);

  function register(){
      
      if( !name || !email   || !password || !cpass ||  !email.match(/.+@.+/) ){
        if(!email.match(/.+@.+/)){setEmail('')}
        return notify('',"Fill Up Every Field Correctly",1000)
      }
      if(password!=cpass ){ 
        setPass('');setCPass('');
        return notify('passNotMatch',"Passwords did not Match",1500)
       }
       const user={
         name,email, password
       }
      //  console.log(user);

       dispatch(registerUser(user))
       
  }
  return (
    <div>
         <ToastContainer limit={2} />
        <div className='row justify-content-center'>
            <div className='col-md-5' id='uReginputHolder' validate>

                <html_banner className="text-center"> Register User</html_banner>
                <div>
                    { loading && !success && 
                      <div class="load_hold"> <div class="dots-bars-3">  </div></div>
                    }
                    {
                       success && !loading && (notify('reg',"Registration Successful",2000) )
                       
                    }
                   <input type={'text'} placeholder="Name" className='form-control' 
                   value={name}  onChange={(e)=>setName(e.target.value)}  required/>
                   <input type={'email'} placeholder="Email" className='form-control'
                    value={email}  onChange={(e)=>setEmail(e.target.value)} required/>
                   <input type={'password'} placeholder="Password" className='form-control' 
                    value={password}  onChange={(e)=>setPass(e.target.value)} required/>
                   <input type={'password'} placeholder="Confirm Password" className='form-control'
                    value={cpass} onChange={(e)=>setCPass(e.target.value)} required/>

                   <button type="button" className='btn-outline-dark registerButton mt-3'
                   onClick={ register }
                   >Register</button>
                </div>

            </div>
        </div>
    </div>
  )
}
