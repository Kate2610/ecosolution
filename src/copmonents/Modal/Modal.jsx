import React from 'react';
import { Link } from 'react-scroll';
import './Modal.css';
import facebookImage from '../../images/facebook.png';
import instaImage from '../../images/instagram.png';

const Modal = ({ onClose, onMenuItemClick }) => {
  const menuItems = ['Main', 'About', 'Cases', 'FAQ', 'Contact Us'];

  const handleMenuItemClick = (item) => {
    onMenuItemClick(item);
    onClose(); 
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="close-button" onClick={onClose}>
          <div className="close-content">
            <div className="close-icon">&#10005;</div>
            <div className="close-text">close</div>
          </div>
        </div>

        <nav className="navigation-menu">
          <ul className="menu-list">
            {menuItems.map((item, index) => (
              <li key={index} onClick={() => handleMenuItemClick(item)}>
                <Link
                  to={item === 'Main' ? 'Main' : item === 'About' ? 'About' : item === 'Cases' ? 'Cases' : item === 'FAQ' ? 'FAQ' : item === 'Contact Us' ? 'Contact Us'  : item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="icons-container">
          <img
            className="icon"
            src={facebookImage}
            alt="facebook"
          />

          <img
            className="icon"
            src={instaImage}
            alt="instagram"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
