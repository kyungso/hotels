import 'react-input-range/lib/css/index.css'
import './HotelListPage.scss';
import HotelListFilter from './HotelListFilter';
import HotelWatchRecent from './HotelWatchRecent';
import HotelItem from './HotelItem';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';

import React, { useState, useCallback, useEffect } from 'react'
import { hotelListAPI } from '../../lib/api';

export default function HotelListPage() {
    const [itemIndex, setItemIndex] = useState(0);
    const [hotelList, setHotelList] = useState([]);
    const [requestError, setRequestError] = useState('');
    
    const handleRequestHotelList = () => {
        hotelListAPI.hotelList(1, 'FREE_WIFI').then(response => {
            setHotelList(response.data);
        }).catch(error => setRequestError(error));
    }
   
    useEffect(() => {
        handleRequestHotelList();
    }, []);

    const handleRetry = () => {
        handleRequestHotelList();
    };

    // const _infiniteScroll = useCallback(() => {
    //     let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    //     let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    //     let clientHeight = document.documentElement.clientHeight;

    //     if(scrollTop + clientHeight === scrollHeight) {
    //     setItemIndex(itemIndex + 20);
    //     setResult(result.concat(video_list.slice(itemIndex+100, itemIndex+200)));
    //     } 
    // }, [itemIndex, result]);

    // useEffect(() => {
    //     window.addEventListener('scroll', _infiniteScroll, true);
    //     return () => window.removeEventListener('scroll', _infiniteScroll, true);
    // }, [_infiniteScroll]);

  return (
    <div className="HotelListPage">
      <HotelListFilter />
      <HotelWatchRecent />
      <div className="HotelList">
      {!!hotelList.length
        ? hotelList.map(hotelItem => 
            <HotelItem key={hotelItem.id} data={hotelItem} />
           )
        : requestError ? <Modal handleRetry={handleRetry}/> : <Loader />
      }
      </div>
    </div>
  )
}
