import React from 'react'
import Header from '../src/components/Header';
import Home from '../src/components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './components/checkoutComponents/Checkout'

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Switch>
        <Route path="/checkout"><Checkout/></Route>
        <Route path="/"><Home/></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
