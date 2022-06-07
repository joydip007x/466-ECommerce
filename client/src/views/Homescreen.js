import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getAllProducts} from '../actions/productAction'
import Product from '../components/SingleProduct/Product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Homescreen() {

  const dispatch=useDispatch()

  const productState= useSelector( state=>state.getAllProductsReducer)

  function timeout(delay) {
    return new Promise( async res => setTimeout(res, delay) );
}

  const { products, error, loading }= productState;
  useEffect(() => {

    dispatch(getAllProducts())
    if (!localStorage.getItem('currentUser')){
      timeout(1000);
      notify('',"Fill Up Every Field Correctly",400)
      window.location.href='/login'
    }
  
  }, [])
  const notify = (callId,msg,timex) => {

    if(callId==='' || callId==='passNotMatch'){
      return toast.warning(msg, {position: toast.POSITION.TOP_CENTER,autoClose:timex})
    }
  }
 
  return (
    <div>
        <div className='row justify-content-center homescreenContainer'>

          { loading ? (<div class="load_hold"> <div class="dots-bars-3">  </div></div>): 
            error ? (<html_h1>Wrong</html_h1>):
            (

              products.map(product => {
              return <div className='col-md-3 m-3 'key={product._id}>
                <Product product={product} />
              </div>
            })
            )
          }
          
        </div>
    </div>
  )
}
