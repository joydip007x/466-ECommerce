import React,{useState,useEffect} from 'react'
import './UserUIDCheck.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch,useSelector } from 'react-redux';
import { findBankUser } from '../../actions/userAction_Bank';

export default function UserUIDCheck() {

  const userState = useSelector(state=>state.loginUserReducer)
  const {currentUser}= userState
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const dispatch=useDispatch()
  setTimeout(() =>   dispatch(findBankUser(currentUser.email)), 4000);
 
  return (
    <div className='root_lcontainer'> 
     <div  class="load_container">
        <div class="loader">
            <svg viewBox="0 0 80 80">
                <circle id="test" cx="40" cy="40" r="32"></circle>
            </svg>
        </div>
        <div class="loader triangle">
            <svg viewBox="0 0 86 80">
                <polygon points="43 8 79 72 7 72"></polygon>
            </svg>
        </div>

        <div class="loader">
            <svg viewBox="0 0 80 80">
                <rect x="8" y="8" width="64" height="64"></rect>
            </svg>
        </div>
        <a class="dribbble" href="https://dribbble.com/shots/5878367-Loaders" target="_blank">
            <img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" alt="" /></a>
       
          <div>
       </div>
      </div>
      <p id="Checktext_2"> Please Wait ! </p>
      <p id="Checktext"> Checking User's Bank Details </p>
    </div>
  )
}
