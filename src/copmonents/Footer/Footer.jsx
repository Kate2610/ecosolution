import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Footer.css';
import favicon from '../../images/fav.png';
import ecog from '../../images/eco-g.png';
import ecob from '../../images/eco-b.png';
import gfl from '../../images/GFL.png';
import arrTop from '../../images/arrow-top.png';
import arrH from '../../images/arrow-h.png';
import facebookIcon from '../../images/facebook-f.png';
import instagramIcon from '../../images/instagram.png';

const Footer = () => {
  const [isEcoHovered, setEcoHovered] = useState(false);
  const [isArrowHovered, setArrowHovered] = useState(false);

  const handleEcoMouseEnter = () => {
    setEcoHovered(true);
  };

  const handleEcoMouseLeave = () => {
    setEcoHovered(false);
  };

  const handleArrowMouseEnter = () => {
    setArrowHovered(true);
  };

  const handleArrowMouseLeave = () => {
    setArrowHovered(false);
  };

  return (
    <footer className='footer'>
      <div className='mobile-footer'>
        <div className='footer-images'>
          <div className="footer-logo">
            <img src={favicon} alt="favicon" />
            <img
              src={isEcoHovered ? ecob : ecog}
              alt="Logo"
              onMouseEnter={handleEcoMouseEnter}
              onMouseLeave={handleEcoMouseLeave}
            />
            <img src={gfl} alt="gfl" className="gfl" />
          </div>
          <Link to="Main" smooth={true} duration={500} className="footer-image">
            <img
              src={isArrowHovered ? arrH : arrTop}
              alt="Arrow Top"
              onMouseEnter={handleArrowMouseEnter}
              onMouseLeave={handleArrowMouseLeave}
            />
          </Link>
        </div>

        <div className="footer-icons">
          <img src={facebookIcon} alt="Facebook Icon" className='footer-icon'/>
          <img src={instagramIcon} alt="Instagram Icon" />
        </div>

        <div className="footer-text">
          <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
          <p>office@ecosolution.com</p>
          <p>ecosolution © 2023</p>
        </div>
      </div>

      <div className='desctop-footer'>
        <div className='desctop-item'>
          <div className="footer-logo">
            <img src={favicon} alt="favicon" />
            <img
              src={isEcoHovered ? ecob : ecog}
              alt="Logo"
              onMouseEnter={handleEcoMouseEnter}
              onMouseLeave={handleEcoMouseLeave}
            />
            <img src={gfl} alt="gfl" className="gfl" />
          </div>
          <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
        </div>

        <div className='desctop-item'>
          <div className="footer-icons">
            <img src={facebookIcon} alt="Facebook Icon" className='footer-icon'/>
            <img src={instagramIcon} alt="Instagram Icon" />
          </div>
          <p>office@ecosolution.com</p>
        </div>

        <div className='desctop-last'>
          <Link to="Main" smooth={true} duration={500} className="footer-image">
            <img
              src={isArrowHovered ? arrH : arrTop}
              alt="Arrow Top"
              onMouseEnter={handleArrowMouseEnter}
              onMouseLeave={handleArrowMouseLeave}
            />
          </Link>
          <p>ecosolution © 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
