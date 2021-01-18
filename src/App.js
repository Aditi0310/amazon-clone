import React,{useEffect} from 'react'
import Header from '../src/components/Header';
import Home from '../src/components/Home';
import Login from './components/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './components/checkoutComponents/Checkout';
import {auth} from './firebase'
import { useStateValue } from './components/StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("user", authUser);

      if(authUser){

        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])
  return (
    <Router>
    <div>
     
      <Switch>
        <Route path='/login'><Login/></Route>
        <Route path="/checkout"> <Header/><Checkout/></Route>
        <Route path="/"> <Header/><Home/></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
