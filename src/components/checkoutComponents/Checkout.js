import React from 'react';
import Subtotal from './Subtotal';
import {Grid} from '@material-ui/core'

function Checkout() {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={8}>
                    Hello
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Subtotal/>
                </Grid>
            </Grid>
            
            
        </div>
    )
}

export default Checkout
