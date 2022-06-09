import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Homescreen from './views/Homescreen';
import CartScreen from './views/CartScreen';
import UserLogin from './views/UserLogin';
import UserRegister from './views/UserRegister';
import UserBank from './views/UserBank';
import UserUIDCheck from './views/UserUIDCheck/UserUIDCheck';

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

      </BrowserRouter>
    </div>
  );
}

export default App;
