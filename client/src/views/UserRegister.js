import React,{useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserRegister() {
  
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const [cpass,setCPass]=useState('');
  
  const notify = (callId,msg,timex) => {

    if(callId==='' || callId==='passNotMatch'){
      return toast.warning(msg, {position: toast.POSITION.TOP_CENTER,autoClose:timex})
    }
  }

  function register(){
      
      if( !name || !email   || !pass || !cpass ||  !email.match(/.+@.+/) ){
        if(!email.match(/.+@.+/)){setEmail('')}
        return notify('',"Fill Up Every Field Correctly",1000)
      }
      if(pass!=cpass ){ 
        setPass('');setCPass('');
        return notify('passNotMatch',"Passwords did not Match",1500)
       }
       const user={
         name,email,pass
       }
       console.log(user);




       
     
       
  }
  return (
    <div>
         <ToastContainer limit={2} />
        <div className='row justify-content-center'>
            <div className='col-md-5' id='uReginputHolder' validate>

                <html_banner className="text-center"> Register User</html_banner>
                <div>
                   <input type={'text'} placeholder="Name" className='form-control' 
                   value={name}  onChange={(e)=>setName(e.target.value)}  required/>
                   <input type={'email'} placeholder="Email" className='form-control'
                    value={email}  onChange={(e)=>setEmail(e.target.value)} required/>
                   <input type={'password'} placeholder="Password" className='form-control' 
                    value={pass}  onChange={(e)=>setPass(e.target.value)} required/>
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
