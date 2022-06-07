import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getAllProducts} from '../actions/productAction'
import Product from '../components/SingleProduct/Product'

export default function Homescreen() {

  const dispatch=useDispatch()

  const productState= useSelector( state=>state.getAllProductsReducer)

  const { products, error, loading }= productState;
  useEffect(() => {

    dispatch(getAllProducts())
  
  }, [])
  
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
