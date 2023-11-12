import React from 'react'

import Necklace4 from "../Asserts/ring.jpg"
import Necklace5 from "../Asserts/foto121.jpg"
import Necklace10 from "../Asserts/foto10.jpg"

const MoreDataHome = () => {
    const workInfoData = [
        {
            image: Necklace4,
            title: "Evening Stardust",
            price: "100$",
        },
        {
            image: Necklace5,
            title: "Pink Harmony",
            price: "200$",
        },
        {
            image: Necklace10,
            title: "Diamond Rainbow",
            price: "200$",
        },
    ];

    return (

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


    )
}

export default MoreDataHome
