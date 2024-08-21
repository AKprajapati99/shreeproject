import React from 'react'
import './Info.css'
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoPeople } from "react-icons/io5";
import { GiLaurelsTrophy } from "react-icons/gi";
import { PiHandshakeLight } from "react-icons/pi";

const Info = () => {
    return (
        <div className='info'>
            <div className="info-main-container">
            <div className="info-text">
                <div className="info-text-main">
                    <span>WHY LEARN WITH TANVEER SIR...</span>
                    <h2>Build better skills,faster</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dicta reprehenderit, earum quia iste saepe.</p>
                </div>
            </div>
            <div className="info-boxs">
                <div className="info-box-1">
                    <span><GiLaurelsTrophy />
                    </span>
                    <h4>We Believe in Best Quality</h4>
                    <p>Lorem ipsum dolor sit amet, lorem consectetur adipiscing elit.</p>
                </div>
                <div className="info-box-1">
                    <span><PiHandshakeLight /></span>
                    <h4>We Believe in Good Relation</h4>
                    <p>Lorem ipsum dolor sit amet, lorem consectetur adipiscing elit.</p>
                </div>
                <div className="info-box-1">
                    <span><LiaCertificateSolid />
                    </span>
                    <h4>We Believe in Abilities</h4>
                    <p>Lorem ipsum dolor sit amet, lorem consectetur adipiscing elit.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Info