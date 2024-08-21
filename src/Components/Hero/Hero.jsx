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
        
        <h1 >WELCOME <br /> TO <br /> SHREEINSUL</h1>
        <p>
          Welcome to La Patisserie Belle, where every <br />
           bite is a journey into the
    /
          haven for those who appreciate the finer things in life.
        </p>
        <button className="btn">Explore More</button>

      </div>
    </div>
  );
};

export default Hero;
