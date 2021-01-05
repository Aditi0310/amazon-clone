import React from 'react'
import home from '../assets/main_home.jpg'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img src={home} alt="home_image" className="home_image"/>
            </div>
        </div>
    )
}

export default Home

