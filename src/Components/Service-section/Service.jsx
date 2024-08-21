import React from 'react'
import './Service.css'
import { IoBulbOutline } from "react-icons/io5";
import midimage from '../../assets/mid-imae.jpg'
import video02 from '../../assets/AboutPageimg/aboutpagevideo02.mp4'


const Service = () => {
    return (
        <div className='service'>
            <div className="service-container">
            <div className="info-text">
                <div className="info-text-main">
                    <span>SERVICE</span>
                    <h2>Build better skills,faster</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dicta reprehenderit, earum quia iste saepe.</p>
                </div>
            </div>
            <div className="service-main">
                <div className="service-main-content">
                    <div className="service-main-one">
                        <div className="service-main-text">
                            <h4>Innovation of Metallurgy</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi non pretium pur.</p>
                        </div>
                        <div className="service-main-icon">
                            <IoBulbOutline />
                        </div>
                    </div>
                    <div className="service-main-one service-main-two">
                        <div className="service-main-text">
                            <h4>Innovation of Metallurgy</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi non pretium pur.</p>
                        </div>
                        <div className="service-main-icon">
                            <IoBulbOutline />
                        </div>
                    </div>
                    <div className="service-main-one service-main-three">
                        <div className="service-main-text">
                            <h4>Innovation of Metallurgy</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi non pretium pur.</p>
                        </div>
                        <div className="service-main-icon">
                            <IoBulbOutline />
                        </div>
                    </div>
                </div>
                <div className="service-main-mid-image">
                    <div className="service-img">
                       <video src={video02} autoPlay loop muted />
                    </div>
                </div>
                <div className="service-main-content">
                    <div className="service-main-one">
                        <div className="service-main-icon">
                            <IoBulbOutline />
                        </div>
                        <div className="service-main-text service-text-last
                        ">
                            <h4>Innovation of Metallurgy</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi non pretium pur.</p>
                        </div>
                    </div>
                    <div className="service-main-one service-main-two">
                        <div className="service-main-icon">
                            <IoBulbOutline />
                        </div>
                        <div className="service-main-text service-text-last
                        ">
                            <h4>Innovation of Metallurgy</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi non pretium pur.</p>
                        </div>
                    </div>
                    <div className="service-main-one service-main-three">
                        <div className="service-main-icon">
                            <IoBulbOutline />
                        </div>
                        <div className="service-main-text service-text-last
                        ">
                            <h4>Innovation of Metallurgy</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi non pretium pur.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-btn">
            <button>Read More</button>

            </div>
            </div>
        </div>
    )
}

export default Service