import React from 'react'
import '../stylesheets/header.css'
import {Link} from 'react-router-dom'
import logo from '../assets/amazon-logo3.png'
// material-ui icons
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';


function Header() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="header">
            <img src={logo} className="header_logo"/>

            <div className="header_search">
                <input className="header_input" type="text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <Link to='/login'>
                <div className="header_option">
                    <span className="header_optionOne">Hello</span>
                    <span className="header_optionTwo">Sign In</span>
                   
                </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionOne">Return</span>
                    <span className="header_optionTwo">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionOne">Your</span>
                    <span className="header_optionTwo">Prime</span>
                </div>
                <div className="header_basketIcon">
                  <Link to="/checkout">  <ShoppingBasketIcon/></Link>
                    <span className="header_optionTwo header_basketCount">{basket?.length}</span>  {/* ? beacause if any problem happen it will automatically handle it */}
                </div>
            </div>
        </div>
        
    )
}

export default Header
