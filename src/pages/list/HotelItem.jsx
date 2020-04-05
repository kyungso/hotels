import 'react-input-range/lib/css/index.css'
import './HotelListPage.scss';

import React, { useState, useEffect } from 'react'
import { hotelListAPI } from '../../lib/api';

export default function HotelItem({ data }) {
    const [price, setPrice] = useState(0);
    const handleRequestHotelPrice = () => {
        hotelListAPI.hotelPrice(data.id).then(response => {
            console.log(response);
            // setPrice(response.data);
        });
    }
   
    useEffect(() => {
        handleRequestHotelPrice();
    }, []);

    return (!!data && 
        <div className="hotelItemWrapper">
            <div className="hotelThumbnail">
                <img src={data.imageUrl} alt="hotelImage" loading="lazy" />
            </div>
            <div className="hotelContent">
              <h3>{data.name}</h3>
              <div className="freeFacility">
                {data.freeServices.map((item, index) => (
                    <span key={index}>
                        {item}
                    </span>
                ))}
              </div>
              <div className="rate">{data.rate}성급 호텔</div>
              <div className="totalReviewCount">{data.totalReviewCount}개의 이용후기</div>
              <div className="reviewScore">{data.reviewScore}</div>
              <div className="price">100,000원~</div>
            </div>
        </div>
    );
}