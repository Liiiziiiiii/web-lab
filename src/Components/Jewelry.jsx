import React, { useState } from 'react';
import MoreDataHome from './MoreDataHome';

import Necklace1 from "../Asserts/foto_1.jpg";
import Necklace2 from "../Asserts/foto_2.jpg";
import Necklace3 from "../Asserts/foto_5.jpg";

const Jewelry = () => {
    const [showMoreDataHome, setShowMoreDataHome] = useState(false);

    const workInfoData = [
        {
            image: Necklace1,
            title: "Starry Elegance",
            price: "320$",
        },
        {
            image: Necklace2,
            title: "Ambrosia Pear",
            price: "100$",
        },
        {
            image: Necklace3,
            title: "Imperial Refinement",
            price: "200$",
        },
    ];

    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <h1 className="primary-heading">Assortment of jewelry</h1>
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
                {showMoreDataHome && <MoreDataHome />}
                
            </div>
            
            <div className="about-buttons-container">
                <button
                    className="secondary-button_1"
                    onClick={() => setShowMoreDataHome(true)}
                >
                    View more
                </button>
            </div>

            
        </div>
    );
}

export default Jewelry;
