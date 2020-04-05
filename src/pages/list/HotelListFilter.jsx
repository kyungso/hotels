import 'react-input-range/lib/css/index.css'
import './HotelListPage.scss';

import React, { useState } from 'react'
import InputRange from 'react-input-range'

export default function HotelListFilter() {
    const [costValue, setCostValue] = useState({
        min: 0,
        max: 1000000,
      });
    const [rateValue, setRateValue] = useState({
        min: 0,
        max: 10,
    });

    const CheckBox = ({ name }) => {
        return (
          <div className="checkBox">
            <input type="checkbox" />
            <span>{name}</span>
          </div>
        );
    };
    
    return (
        <div className="filterWrapper">
            <div className="filterTitle">필터</div>
            <div className="filter">
            <div className="costFilter" style={{ width: 200 }}>
                <h4>1박당 요금</h4>
                <InputRange
                minValue={0}
                maxValue={1000000}
                value={costValue}
                step={1000}
                formatLabel={value => (value === 1000000 ? '1,000,000+' : value.toString())}
                onChange={value => setCostValue(value)}
                />
            </div>
            <div className="rateFilter" style={{ marginTop: 60, width: 200 }}>
                <h4>리뷰 점수</h4>
                <InputRange
                minValue={0}
                maxValue={10}
                value={rateValue}
                step={0.5}
                formatLabel={value => (value === 10 ? '10' : value.toString())}
                onChange={value => setRateValue(value)}
                />
            </div>
            <div className="facility" style={{ marginTop: 60, width: 200 }}>
                <h4>시설 정보</h4>
                <CheckBox name={'Free WIFI'}/>
                <CheckBox name={'Free Parking'}/>
                <CheckBox name={'Free Airport Pickup'}/>
            </div>
            </div>
        </div>
    );
}