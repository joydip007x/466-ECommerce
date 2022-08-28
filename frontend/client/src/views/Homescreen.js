import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getAllProducts} from '../actions/productAction'
import Product from '../components/SingleProduct/Product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLogin from './Admin/AdminLogin';

export default function Homescreen() {

  const dispatch=useDispatch()

  const productState= useSelector( state=>state.getAllProductsReducer)
  const { products, error, loading }= productState;
  
  const logState=!(!localStorage.getItem('currentAdmin'));
  
  useEffect(() => {

    if (!logState){
      
       dispatch(getAllProducts())
       checkUser()
    }
}, [])
  //  console.log(logState)
 
  return (
    <div>   <ToastContainer limit={1} />
        <div className='row justify-content-center homescreenContainer'>

        { logState ? 
          (<div><p>  
                <div> 
                  <h3 id='noItemsinCart'>Welcome ,You are Logged in as an Administrator</h3> 
                  <h3 id='noItemsinCart2'>Visit <a href= '/orders' >Orders</a> to Verify and Forward Orders to Suppliers </h3> 
                </div>  
           </p></div> ): 
        
          ( loading ? (<div class="load_hold"> <div class="dots-bars-3">  </div></div>): 
            error ? (<html_h1>Wrong</html_h1>):
            (
              products.map(product => {
              return <div  className='col-md-3 m-3 'key={product._id}>
                <Product product={product} />
              </div>
            })
            )
          )
        
        }
        </div>
    </div>
  )
}
export const notify = (callId,msg,timex) => {

  if(callId==='noUser'){return toast.error(msg, {position: toast.POSITION.TOP_CENTER,autoClose:timex})}
  if(callId==='redirect'){return toast.info(msg, {position: toast.POSITION.TOP_RIGHT,autoClose:timex})}
}
export const checkUser=()=>{
  if (!localStorage.getItem('currentUser')){
  
    setTimeout(() =>   window.location.href='/login', 6000);
    notify('noUser',"Please Login First",1000)
    notify('redirect',"You will be redirected to Login Page",2000)


  }
}

export const checkLoggedAsAdmin=()=>{

  if (localStorage.getItem('currentAdmin')){
  
    setTimeout(() =>   window.location.href='/', 3000);
    notify('noUser',"You are logged in as admin",2000)

  }
}
