import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUID } from './actions/uidlogin';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [clk,setClk]=useState(0);

  const dispatch = useDispatch()
  const { loadingx, successx, currentBankUser } = useSelector(state => state.loginUIDReducer)
  console.log(currentBankUser)

  function loginWithUID() {

    if (!password || (email && !email.match(/.+@.+/))) {
      return toast.warning('Fill the Details Properly',
        { position: toast.POSITION.TOP_CENTER, autoClose: 1800 })
    }
    const bankuser = { email, password }
    console.log(bankuser)

    dispatch(loginUID(bankuser))


  }
  function refpage(){

    const bankuser = { email:currentBankUser.email, password:currentBankUser.password }
    dispatch(loginUID(bankuser))

  }
  function logout() {
    
    localStorage.removeItem('currentBankUser');
    window.location.href = '/'
  }
  const pp = localStorage.getItem('currentBankUser')
  console.log(pp + '       x' + currentBankUser);

  return (
    <div className="App">
      <ToastContainer limit={2} />

      {(!(currentBankUser ) && !clk) ?
        (
          <div>
            <form class="login" >
              <t1>BANK-UID LOGIN</t1>
              <input type="text" placeholder="Username"
                value={email} onChange={(e) => setEmail(e.target.value)} required
              />
              <input type="password" placeholder="Password"
                value={password} onChange={(e) => setPass(e.target.value)} required
              />
              <button type="button" id='log' onClick={loginWithUID} onsubmit="return false" >Login</button>
            </form>
          </div>
        ) :  ////////////////////////////////////////////////////////////

        <div class="padding wow">
          <div class="col-md-8">
            <div class="card"> <img class="card-img-top" src="https://img.freepik.com/premium-vector/online-banking-technology-concept-illustration-bank-electric-circuit-lines-background_387612-43.jpg?w=1480" alt="Card image cap" />
              <div class="card-body little-profile text-center">
                <div class="pro-img"><img id='meo' src="https://www.pngmart.com/files/22/User-Avatar-Profile-Background-Isolated-PNG.png" alt="user" /></div>
                
                <div class="row text-center m-t-20">
                  <div class="col-lg-4 col-md-4 m-t-20">
                    <h3 class="m-b-0 font-light" id="textt">{currentBankUser.email}</h3><small>Email</small>
                  </div>
                  <div class="col-lg-4 col-md-4 m-t-20">
                    <h3 class="m-b-0 " id="textt">{currentBankUser.bdt} BDT </h3><small>Available Balance</small>
                  </div>
                  <div class="col-lg-4 col-md-4 m-t-20">
                    <h3 class="m-b-0 font-light" id="textt">{currentBankUser.bankUID}</h3><small>Account No.</small>
                  </div>

                   <button onClick={ refpage  } id="ref">Refresh Page</button><br></br>
                  <button id='blog' onClick={logout } >LOG OUT</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      }




    </div>
  );
}

export default App;
