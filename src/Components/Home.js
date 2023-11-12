import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Asserts/header.jpg"
import BannerImage from "../Asserts/header.jpg"
import { FiArrowRight } from "react-icons/fi"

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <div className="home-banner-container">
                {/* <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="" />
                </div> */}
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        Minimalist jewelry made of gold
                    </h1>
                    <p className="primary-text">
                        you don't know what to give your
                        wife or girlfriend - give a necklace or a ring
                    </p>
                    <button className="secondary-button">
                        Order Now <FiArrowRight />{" "}
                    </button>
                </div>
                <div className="home-image-section">
                    <img src={BannerImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home