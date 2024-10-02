import React from 'react';
import './Css/principal.css';
import banner from './img/baner.jpeg';


const Banner = () => {
    return (
      <div className="banner">
        <img src={banner} alt="Banner" />
      </div>
    );
  }

export default Banner;

