import React from 'react'
import '../../stylesheets/checkoutProduct.css';
import {useStateValue} from '../../components/StateProvider'

function CheckoutProduct({image,price,id,title,rating}) {
    const [{ basket }, dispatch] = useStateValue();

const removeItem = () => {
    //remove item from basket
    dispatch({
        type:"REMOVE_FROM_BASKET",
        id:id
    })
}

    return (
        <>
        <div className="checkout_product">
            
            <img src={image} className="checkoutProduct_image"/>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <p>{price}</p>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating).fill().map((_,i) => {
                        <p>1</p>
                    })}
                </div>
                <button onClick={removeItem}>Remove Item</button>
            </div>
            
        </div>
        </>
    )
}

export default CheckoutProduct;
