import React,{useState} from 'react'
import CurrencyFormat from 'react-currency-format';
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core';
import {useStateValue} from '../StateProvider'
import {sum} from '../Reducer'

function Subtotal() {

    const [{ basket }, dispatch] = useStateValue();
    const [s,ss] = useState(0);

  const add = (basket) => {
    
  };
    return (
        <div style={{backgroundColor:"white", padding:"2rem", marginTop:" 4rem", marginRight:"2rem"}}>
                        <p>
                        Subtotal ({basket?.length} items): <strong>${sum(basket)}</strong>
                        </p>
                        <small className="subtotal_gift" style={{display:"flex", alignItems:"center"}}>
                            <input type="checkbox"/> <Typography>This order contains a gift.</Typography>
                        </small>
                    <button style={{backgroundColor:"#f0c14b", border:"1px solid grey", marginTop:"1rem", width:"100%", padding:"0.5rem"}}>Proceed to Checkout</button>
                    
        </div>
    )
}

export default Subtotal
