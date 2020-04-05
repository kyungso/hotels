import './Modal.scss';

import React from 'react'

export default function Modal({ handleRetry }) {
  return (
    <>
      <div className="Modal-overlay" />
      <div className="Modal">
        <p className="title">요청 실패</p>
        <div className="content">
          <p>
    		데이터 요청에 실패했습니다.
    	  </p>
        </div>
        <div className="button-wrap">
          <button onClick={handleRetry}> 다시 요청 </button>
        </div>
      </div>
    </>
  )
}
