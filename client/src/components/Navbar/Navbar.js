import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
// import bootstrap from '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { logoutUser } from '../../actions/userAction'
import {logoutAdmin} from '../../actions/adminAction'
export default function Navbar() {

  const cartState = useSelector(state=>state.cartReducer)
  const userState = useSelector(state=>state.loginUserReducer)
  const adminState = useSelector(state=>state.verifyAdminReducer)
  const {currentUser}= userState
  const {currentAdmin}= adminState

  const dispatch= useDispatch()

  console.log("Dispatch ",currentAdmin,currentUser)

  const title_style={fontWeight:"bold",fontSize:"25px"  }
  const space_keep={visibility: 'hidden'}
  return (
    <div className="whole_navbar">
      <nav className="navbar nav_component navbar-expand-lg  shadow-lg p-3 mb-5   ">
        <a className="navbar-brand" href="/">
          <b style={title_style}>C</b>SE-466
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
         <span className="navbar-toggler-icon"  data-bs-toggle="dropdown"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">

      
        <link rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
         
         <li className="nav-item" id="nav-home-icon">
              <a className="nav-link " href="/" > 
              <i className="fa fa-home" ></i>
              </a>
        </li>

          <ul className="navbar-nav ms-auto">
          
            { (currentUser || currentAdmin) ? 
            (

              <div class="dropdown">
              <a class="userBtn dropdown-toggle  "  id="dropdownMenu2" data-bs-toggle="dropdown" >
              {currentUser? <i className="fa fa-user" ></i> :<i class="fa-brands fa-adn"></i> }
              {currentUser? currentUser.name.slice(0,6) : "Admin" }
              </a>


            {
              currentUser? 
              <ul class="dropdown-menu"  aria-labelledby="dropdownMenu">
                <a><button class="dropdown-item" type="button"  
                onClick={()=>{ window.location.href='/orders'}}
                href="/orders">Orders</button></a>
                <a><button class="dropdown-item" type="button"
                onClick={()=>dispatch(logoutUser())}
                >LogOut</button></a>
                {/* <li><button class="dropdown-item" type="button">Something else here</button></li> */}
              </ul> :
              
              <ul class="dropdown-menu"  aria-labelledby="dropdownMenu">
                <a><button class="dropdown-item" type="button"  
                onClick={()=>{ window.location.href='/orders'}}
                href="/orders">Orders</button></a>
                <a><button class="dropdown-item" type="button"
                onClick={()=>dispatch(logoutAdmin())}
                >LogOut</button></a>
                {/* <li><button class="dropdown-item" type="button">Something else here</button></li> */}
              </ul>

            }

            </div>
              

            ):  
            <li className="nav-item ">
              <a className="nav-link" style={{backgroundColor:"Scrollbar"}} href="/login">
                Login 
              </a>
            </li>
            
            }

          {currentUser?
            <li className="nav-item" id="nav_link_cart">
              <a className="nav-link " href="/cart" >
              Cart 
              <i className="fa fa-shopping-cart" ></i>
                 { cartState.cartItems.length }
              </a>
            </li>: "***"}
           
            
          </ul>
        </div>
      </nav>
    </div>
  );
}
