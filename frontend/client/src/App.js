import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Homescreen from './views/Homescreen';
import CartScreen from './views/CartScreen';
import UserLogin from './views/User/UserLogin';
import UserRegister from './views/User/UserRegister';
import UserBank from './views/User/UserBank';
import UserUIDCheck from './views/UserUIDCheck/UserUIDCheck';
import OrderScreen from './views/OrderScreen/OrderScreen';
import AdminLogin from './views/Admin/AdminLogin.js';
import AddItem from './components/AddItem/AddItem';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <BrowserRouter>
          <Route path="/"     exact component={Homescreen} />
          <Route path="/cart" exact component={CartScreen} />
          <Route path="/register" exact component={UserRegister} />
          <Route path="/login" exact component={UserLogin} />
          <Route path="/registerUID" exact component={UserBank} />
          <Route path="/uidCheck" exact component={UserUIDCheck} />
          <Route path="/orders" exact component={OrderScreen} />
          <Route path="/admin" exact component={AdminLogin} />
          <Route path="/addItem" exact component={AddItem} />

      </BrowserRouter>
    </div>
  );
}

export default App;
