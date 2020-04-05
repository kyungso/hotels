import 'react-input-range/lib/css/index.css'
import './HotelListPage.scss';

import React from 'react'

export default function HotelWatchRecent() {
    const WatchRecentButton = ({ name }) => {
        return (
          <button
            className="watchRecentButton"
            onClick={(e) => console.log(e.target)}
          >
              {name}
          </button>
        );
    };
    
    return (
        <div className="hotelWatchRecentWrapper">
            <div className="hotelWatchRecentTitle">최근 본 호텔</div>
            <div className="hotelWatchRecent">
                <WatchRecentButton name={'그랜드 호텔'}/>
                <WatchRecentButton name={'그랜드 호텔'}/>
                <WatchRecentButton name={'그랜드 호텔'}/>
            </div>
        </div>
    );
}