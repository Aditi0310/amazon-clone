import React from 'react'

function CheckoutProduct({image,price,id,title,rating}) {
    return (
        <>
        <div className="checkout_product">
            
            <img src={image} className="checkoutProduct_image" style={{width:"50px"}}/>

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
            </div>
            <button>Remove Item</button>
        </div>
        </>
    )
}

export default CheckoutProduct;
