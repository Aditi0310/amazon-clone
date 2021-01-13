import React from 'react';
import Product from '../components/homeComponents/Product'
import home from '../assets/main_home.jpg'
import MultiProduct from './homeComponents/multipleImagesProduct'
import '../stylesheets/home.css'
//images
import AC from '../assets/AC.jpg'
import Wmachine from '../assets/Wmachine.jpg'
import TV from '../assets/tv.jpg';
import Refrigerator from '../assets/refrigerator.jpg';
import Laptop from '../assets/laptop.jpg'
import Router from '../assets/routers.jpg'
import Keyboard from '../assets/keyboard.jpg'
import Headphone from '../assets/headphone.jpg'
import chocolate from '../assets/chocolates.jpg';


function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img src={home} alt="home_image" className="home_image"/>
                <div className="home_row">
                    <MultiProduct title="Work from home essentials"
                        image1={Router} img_title1="Routers"
                        image2={Laptop} img_title2="Laptops"
                        image3={Keyboard} img_title3="Keyboards & more"
                        image4={Headphone} img_title4="Headphones"
                    />
                    <MultiProduct title="Top picks for your home"
                        image1={AC} img_title1="ACs"
                        image2={Wmachine} img_title2="Washing Machine"
                        image3={TV} img_title3="TV"
                        image4={Refrigerator} img_title4="Refrigerator"
                    />
                    <Product title='Chocolates, sweets and more'
                        image={chocolate}
                        id={0}
                        price='28.98'
                        rating={5}
                    />
                    <Product title='Chocolates, sweets and more'
                        image={chocolate}
                        id={1}
                        price='28.98'
                        rating={5}/>
                </div>
                <div className="home_row">

                </div>
                <div className="home_row">

                </div>
            </div>
        </div>
    )
}

export default Home

