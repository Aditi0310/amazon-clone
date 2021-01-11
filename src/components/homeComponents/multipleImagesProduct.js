import React from 'react'
import Image from '../../assets/chocolates.jpg';
import '../../stylesheets/multipleImageProduct.css'

function multipleImagesProduct(props) {
    return (
        <div className="multi_product">
            <div className="product_title1">{props.title}</div>
            <div className="row1">
                <img src={props.image1} className="product2_image"/>
                <img src={props.image2} className="product2_image"/>
            </div>
            <div className="row1">
                <div className="image_title1">{props.img_title1}</div>
                <div className="image_title2">{props.img_title2}</div>
            </div>
            <div className="row2">
                <img src={props.image3} className="product2_image"/>
                <img src={props.image4} className="product2_image"/>
            </div>
            <div className="row2">
                <div className="image_title1">{props.img_title3}</div>
                <div className="image_title2">{props.img_title4}</div>
            </div>
        </div>
    )
}

export default multipleImagesProduct
