import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';

import { loginUser } from '../../actions/userAction';
import { checkLoggedAsAdmin } from '../Homescreen';
import './UserLogin.css'

export default function UserLogin() {

  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const dispatch = useDispatch()
  const delay = ms => new Promise(res => setTimeout(res, ms));

  useEffect(() => {

    checkLoggedAsAdmin();
    if (localStorage.getItem('currentUser')) {

      setTimeout(this, 500)
      notify('', "Fill Up Every Field Correctly", 400)
      window.location.href = '/'
    }

  }, [])

  const { loadingx, successx } = useSelector(state => state.loginUserReducer);

  const notify = (callId, msg, timex) => {

    if (callId === '' || callId === 'passNotMatch') {
      return toast.warning(msg, { position: toast.POSITION.TOP_CENTER, autoClose: timex })
    }
    if (callId === 'reg') {
      toast.success(msg, { position: toast.POSITION.TOP_CENTER, autoClose: timex })
    }
  }

  function loginWithUser() {

    if (!email || !password || !email.match(/.+@.+/)) {
      if (!email.match(/.+@.+/)) { setEmail('') }
      return notify('', "Fill Up Every Field Correctly", 1000)
    }
    const user = {
      email, password
    }
    console.log("LOGIN :", user);
    dispatch(loginUser(user))


  }

  return (
    <div className="App">

      <ToastContainer limit={2} />
      <div className='row justify-content-center'>
        <div>
          <form class="login" >
          {
            loadingx && 
            <div class="load_hold2"> <div class="dots-bars-3">  </div></div>
           }
            {
              successx && !loadingx && (notify('reg',"Login   Successful",2000) )
            } 

            <t1> Log In</t1>
            <input type="text" placeholder="Email"
              value={email} onChange={(e) => setEmail(e.target.value)} required
            />
            <input type="password" placeholder="Password"
              value={password} onChange={(e) => setPass(e.target.value)} required
            />
            <button type="button" id='log' onClick={loginWithUser} onsubmit="return false" >Login</button>
          </form>
        </div>
        <a href='/register' id='clicktoLog'> <b>New</b> User ? Create an Account! </a>
      </div>
    </div>
  )
}
