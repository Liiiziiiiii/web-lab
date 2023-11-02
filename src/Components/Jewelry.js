import React from 'react'

import Necklace1 from "../Asserts/foto_1.jpg"
import Necklace2 from "../Asserts/foto_2.jpg"
import Necklace3 from "../Asserts/foto_5.jpg"
import Necklace4 from "../Asserts/ring.jpg"
import Necklace5 from "../Asserts/foto121.jpg"
import Necklace10 from "../Asserts/foto10.jpg"



const Jewelry = () => {
    const workInfoData = [
        {
            image: Necklace1,
            title: "Pick Meals",
            price: "320$",
        },
        {
            image: Necklace2,
            title: "Choose How Often",
            price: "100$",
        },
        {
            image: Necklace3,
            title: "Fast Deliveries",
            price: "200$",
        },
        {
            image: Necklace4,
            title: "Fast Deliveries",
            price: "100$",
        },
        {
            image: Necklace5,
            title: "Fast Deliveries",
            price: "200$",
        },
        {
            image: Necklace10,
            title: "Fast Deliveries",
            price: "200$",
        },
    ];
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                {/* <p className="primary-subheading">Work</p> */}
                <h1 className="primary-heading">Assortment of jewelry</h1>
                {/* <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                    elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </p> */}
            </div>
            <div className="work-section-bottom">
                {workInfoData.map((data) => (
                    <div className="work-section-info" key={data.title}>
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.price}</p>
                    </div>
                ))}
            </div>
            <div className="about-buttons-container">
                <button className="secondary-button_1">View more</button>
            </div>
        </div>
    );
}

export default Jewelry