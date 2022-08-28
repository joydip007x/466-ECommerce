
import Product from '../components/SingleProduct/Product';
export const addToCart=(product, quantity , varient )=>(dispatch,getState)=>{

      var cartItem={
          name: product.name ,
          _id : product._id ,
          image: product.image ,
          varient : varient ,
          varients : product.varients,
          quantity : quantity ,
          prices : product.prices ,
          price : product.prices[0][varient] * quantity ,
      }

      dispatch({type:'ADD_TO_CART', payload: cartItem})
      
      const cartItems= getState().cartReducer.cartItems

      localStorage.setItem('cartItems',JSON.stringify(cartItems))
}

export const deleteFromCart=(product)=>(dispatch,getState)=>{

    dispatch({type:'DELETE_FROM_CART', payload: product})
    const cartItems= getState().cartReducer.cartItems 
    localStorage.setItem('cartItems',JSON.stringify(cartItems))

}