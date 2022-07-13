import React,{useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch,useSelector } from 'react-redux';

import { registerBankUser,findBankUser } from '../../actions/userAction_Bank';

export default function UserBank() {
  
    const [bankUID,setbankUID]=useState('');
    const [secretKey,setsecretKey]=useState('');
    const dispatch=useDispatch()

    const {loadingy,successy}= useSelector( state=>state.registerUserBankReducer) ;

    const userState = useSelector(state=>state.loginUserReducer)
    const {currentUser}= userState

    const delay = ms => new Promise(res => setTimeout(res, ms));
    
    const notify = (callId,msg,timex) => {
  
      if(callId==='' ){
        return toast.error(msg, {position: toast.POSITION.TOP_CENTER,autoClose:timex})
      }
      if(callId==='reg' ){
         toast.success(msg, {position: toast.POSITION.TOP_CENTER,autoClose:timex})
      }
      if(callId==='info' ){
        toast.info(msg, {position: toast.POSITION.TOP_RIGHT,autoClose:timex})
     }
    }
    
    function bankRegWithUser(){
        
      if(  !bankUID   || !secretKey   ){
        if(bankUID.length<10 ){setbankUID('')}
        return notify('',"BankUID length should be 10",1500)
      }
       const userID={
         bankUID, 
         email:currentUser.email, 
         password: secretKey,
       }
       //console.log("BANK INFO :",userID);
       notify('info',"your Email: "+currentUser.email+" will be used ",2000)
       dispatch(registerBankUser(userID))
       dispatch(findBankUser(currentUser.email))
       
  }
    return (
      <div>
          
           <ToastContainer limit={1} />
          <div className='row justify-content-center'>
              <div className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded ' id='uReginputHolder' validate>
  
                  <html_banner className="text-center"> Bank UID Registration </html_banner>
                  <div>
                      { 
                        loadingy && !successy && 
                        <div class="load_hold" > <div class="dots-bars-3">  </div></div>
                      }
                      {
                         successy && !loadingy && (notify('reg',"BankUID Verification Successful,",1520) )
                         
                      }
                     <input type={'BankUID'} placeholder="Bank User Identification No." className='form-control'
                      value={bankUID}  onChange={(e)=>setbankUID(e.target.value)} required/>
                     <input type={'password'} placeholder="Password" className='form-control' 
                      value={secretKey}  onChange={(e)=>setsecretKey(e.target.value)} required/>
                    
                     <button type="button" className='btn registerButton mt-3'
                     onClick={ bankRegWithUser }
                     >Proceed</button>
                  </div>
  
              </div>
              {/* <a href='/register' id='clicktoLog'> <b>New</b> User ? Create an Account! </a> */}
          </div>
          <p id="clause_for_user"> We need bank details from you to proceed with your orders and payment in future  </p>
          <p id="clause_for_user2"> you'll be using <b>Email</b> : <b>{currentUser.email}</b> to open this bank account</p>

      </div>
  )
}
