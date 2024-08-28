import React from 'react';
import './Hero.css';
import hero from '../../assets/hero.mp4';
import backround from '../../assets/backround.png';


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <video className="hero-video" src={hero} autoPlay loop muted>
        
      </video>
      <div className="hero-main">
        {/* <img src={backround} alt="" /> */}
        
        <h1 > Welcome to Shree Engineers </h1>
        <p>
        WE ARE EXPERIENCED THERAMLINSULATION GROUP
        </p>
        <button className="btn">Explore More</button>

      </div>
    </div>
  );
};

export default Hero;
