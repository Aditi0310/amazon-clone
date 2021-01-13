import React from 'react';
import Subtotal from './Subtotal';
import {Grid, Typography} from '@material-ui/core';
import {useStateValue} from '../StateProvider';
import CheckoutProduct from './CheckoutProduct'
import chocolate from '../../assets/chocolates.jpg';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={8}>
                    <Typography>Your Shopping Cart</Typography>
                    <CheckoutProduct title='Chocolates, sweets and more'
                        image={chocolate}
                        id={0}
                        price='28.98'
                         rating={5}/>
                    {basket.map(item => {
                        console.log(item.id);
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                            
                        ></CheckoutProduct>
                    })}
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Subtotal/>
                    
                </Grid>
            </Grid>
            
            
        </div>
    )
}

export default Checkout
