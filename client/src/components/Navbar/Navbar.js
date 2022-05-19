import React from 'react'
import { useSelector,useDispatch} from 'react-redux'

export default function Navbar() {

  const cartState = useSelector(state=>state.cartReducer)

  const title_style={fontWeight:"bold",fontSize:"25px"  }
  const space_keep={visibility: 'hidden'}
  return (
    <div className="whole_navbar">
      <nav className="navbar nav_component navbar-expand-lg  shadow-lg p-3 mb-5   ">
        <a className="navbar-brand" href="/">
          <b style={title_style}>W</b>ill
          <b style={title_style}> I</b>
          <b style={space_keep}>""</b>
          <b style={title_style}>S</b>ell
          <b style={title_style}> T</b>omato?
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
         >
         <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">

        <link rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
         
          <ul className="navbar-nav ms-auto">
          <li className="nav-item" id="nav_link_cart">
              <a className="nav-link " href="/cart" >
              Cart 
              <i class="fa fa-shopping-cart" ></i>
                 { cartState.cartItems.length }
              </a>
            </li>
            
            <li className="nav-item ">
              <a className="nav-link" href="/login">
                Login 
              </a>
            </li>
           
            
          </ul>
        </div>
      </nav>
    </div>
  );
}
