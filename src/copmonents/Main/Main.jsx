import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Main.css';
import mainImage from '../../images/learnMore.png';
import mainImageH from '../../images/learnMore-h.png';
import millImage from '../../images/mill.png';
import bigMillImage from '../../images/mill-big.png';

const Main = () => {
  const [isMainImageHovered, setMainImageHovered] = useState(false);

  const handleMainImageMouseEnter = () => {
    setMainImageHovered(true);
  };

  const handleMainImageMouseLeave = () => {
    setMainImageHovered(false);
  };

  return (
    <section id="Main" className="main-section">
      <div className="main-content">
        <div className='main-container'>
          <h1>RENEWABLE ENERGY FOR ANY TASK</h1>
          <div className='img-container'>
            <p className='main-text'>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</p>
            <Link
              to="Cases"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <img
                className="main-image"
                src={isMainImageHovered ? mainImageH : mainImage}
                alt="mainImage"
                onMouseEnter={handleMainImageMouseEnter}
                onMouseLeave={handleMainImageMouseLeave}
              />
            </Link>
          </div>
        </div>
        <div className="underline" />
        <div className='contacts'>
          <p className="address-text">79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
          <p className="address-text email">office@ecosolution.com</p>
          <p className="ecolution-text">ecosolution © 2023</p>
        </div>
        <img
          className="mill-image"
          src={millImage}
          alt="mill"
        />
        <img
          className="big-mill-image"
          src={bigMillImage}
          alt="big-mill"
        />
      </div>
    </section>
  );
};

export default Main;
