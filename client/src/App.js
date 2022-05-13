import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Homescreen from './views/Homescreen';
import CartScreen from './views/CartScreen';

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <BrowserRouter>
          <Route path="/"     exact component={Homescreen} />
          <Route path="/cart" exact component={CartScreen} />
      </BrowserRouter>

    </div>
  );
}

export default App;
