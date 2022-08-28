import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';

import { registerUser } from '../../actions/userAction';
import { checkLoggedAsAdmin } from '../Homescreen';

export default function UserRegister() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [cpass, setCPass] = useState('');

  const notify = (callId, msg, timex) => {

    if (callId === '' || callId === 'passNotMatch') {
      return toast.warning(msg, { position: toast.POSITION.TOP_CENTER, autoClose: timex })
    }
    if (callId === 'reg') {
      toast.success(msg, { position: toast.POSITION.TOP_CENTER, autoClose: timex })
    }
  }

  checkLoggedAsAdmin();
  const dispatch = useDispatch()

  const { loading, success } = useSelector(state => state.registerUserReducer);
  //console.log("regState "+loading , success);

  function register() {

    if (!name || !email || !password || !cpass || !email.match(/.+@.+/)) {
      if (!email.match(/.+@.+/)) { setEmail('') }
      return notify('', "Fill Up Every Field Correctly", 1000)
    }
    if (password != cpass) {
      setPass(''); setCPass('');
      return notify('passNotMatch', "Passwords did not Match", 1500)
    }
    const user = {
      name, email, password
    }
    //  console.log(user);

    dispatch(registerUser(user))

  }
  return (
    <div>
      <ToastContainer limit={2} />
      <div className='row justify-content-center'>


        <div>
          <form class="login" >
            <t1> Sign Up</t1>
            {loading && !success &&
              <div class="load_hold"> <div class="dots-bars-3">  </div></div>
            }
            {
              success && !loading && (notify('reg', "Registration Successful. You'll be redirected to Login Page Now", 2000))

            }
            <input type={'text'} placeholder="Name" className='form-control'
              value={name} onChange={(e) => setName(e.target.value)} required />
            <input type={'email'} placeholder="Email" className='form-control'
              value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type={'password'} placeholder="Password" className='form-control'
              value={password} onChange={(e) => setPass(e.target.value)} required />
            <input type={'password'} placeholder="Confirm Password" className='form-control'
              value={cpass} onChange={(e) => setCPass(e.target.value)} required />
            <button type="button" id='log' onClick={register} onsubmit="return false" >Submit</button>
          </form>
        </div>


        <a href='/login' id='clicktoLog'> Already a <b>Registered</b> User ? </a>

      </div>

    </div>
  )
}
