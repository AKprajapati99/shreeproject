import React from 'react'
import './Gallary.css'
import mid from '../../assets/mid-imae.jpg'
import CounterSection from '../Counter/CounterSection'
import Proslader from '../Proslader/Proslader'

const Gallary = () => {
  return (
    <>
    <Proslader/>
    <Proslader/>
    <div className='gallary'>
      <div className="gallary-main">
        <div className="gallary-title">
            <h2>Our Gallary</h2>
        </div>
        <div className="gallary-imgs">
            <img src={mid} alt="" />
            <img src={mid} alt="" />
            <img src={mid} alt="" />
            <img src={mid} alt="" />
            <img src={mid} alt="" />
            <img src={mid} alt="" />
            <img src={mid} alt="" />
            <img src={mid} alt="" />
            <img src={mid} alt="" />
        </div>
        <div className="gallary-counter">
          <CounterSection/>
        </div>
        </div>
    </div>
    </>
  )
}

export default Gallary