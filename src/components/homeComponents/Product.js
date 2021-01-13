import React from 'react';
import '../../stylesheets/product.css';
import chocolate from '../../assets/chocolates.jpg';
import {useStateValue} from '../StateProvider'

function Product({id, title, price, image, rating}) {
    //basket is destructured from state otherwise [state, dispatch]
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = (event) => {
        //dispatch an action
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
              id,
              title,
              price,
              rating,
              image,
            },
          });
    };
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
