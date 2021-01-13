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
        <div><>
                        <p>
                        Subtotal ({basket?.length} items): <strong>${sum(basket)}</strong>
    </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/> <Typography>This order contains a gift.</Typography>
                        </small>
                    <button style={{backgroundColor:"#f0c14b"}}>Proceed to Checkout</button>
                    </>
        </div>
    )
}

export default Subtotal
