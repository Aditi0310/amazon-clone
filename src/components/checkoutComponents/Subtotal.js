import React from 'react'
import CurrencyFormat from 'react-currency-format';
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core';

function Subtotal() {
    return (
        <div><>
                        <p>
                            Subtotal (0 items): <strong>$ 0</strong>
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
