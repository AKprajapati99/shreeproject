import React from 'react'
import './Parelax.css'

const Parelax = ({ heading, backgroundImage }) => {
  const parelaxStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };


  return (
    <div className="parelax" style={parelaxStyle}>
      <div className='main-parelax'>
        <h1>{heading}</h1>
      </div>
    </div>
  );
}

export default Parelax;
