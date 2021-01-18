import React, {useState} from 'react';
import logo from '../assets/amazon-logo.png'
import {Link, useHistory} from 'react-router-dom';
import '../stylesheets/login.css'
import {auth} from '../firebase'

function Login() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/');
        })
        .catch(e => alert(e.message));
    }
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/');
        })
        .catch(e => alert(e.message));
    }
    return (
        <div className="login">
          <Link to='/'>  <img src={logo} className="login_logo"/> </Link>

          <div className="login_container">
                <h1>Login</h1>
                
                <form>
                    <h5>E-mail or phone number</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </form>


                <button className="login_button" type="submit" onClick={signIn}>Sign In</button>

                <p>By continuing, you agree to Amazon's <a href="#">Conditions Use</a> and <a>Privacy policy.</a></p>

                <button className="login_registration" type="submit" onClick={register}>Create your Amazon account</button>
          </div>
        </div>
    )
}

export default Login
