import React from 'react';
import '../../stylesheets/product.css';
import chocolate from '../../assets/chocolates.jpg'

function Product({id, title, price, image, rating}) {

    const addToBasket = () => {
        //dispatch an action
    }
    return (
        <div className="product">
            <div className="product_title">
                {title}
            </div>
            <img src={image} alt="chocolate" className="product_image"/>
            <div className="product_seeMore">See more...</div>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
