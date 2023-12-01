import React, { useState } from 'react';
import './Header.css';
import favicon from '../../images/fav.png';
import ecog from '../../images/eco-g.png';
import ecob from '../../images/eco-b.png';
import gfl from '../../images/GFL.png';
import gitImage from '../../images/git.png';
import gitImageH from '../../images/git-hov.png';
import burgerImage from '../../images/burger.png';
import burgerImageH from '../../images/brg-hov.png';
import Modal from '../Modal/Modal';

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isGitHovered, setGitHovered] = useState(false);
  const [isBurgerHovered, setBurgerHovered] = useState(false);
  const [isEcoHovered, setEcoHovered] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleGitMouseEnter = () => {
    setGitHovered(true);
  };

  const handleGitMouseLeave = () => {
    setGitHovered(false);
  };

  const handleBurgerMouseEnter = () => {
    setBurgerHovered(true);
  };

  const handleBurgerMouseLeave = () => {
    setBurgerHovered(false);
  };

  const handleEcoMouseEnter = () => {
    setEcoHovered(true);
  };

  const handleEcoMouseLeave = () => {
    setEcoHovered(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={favicon} alt="favicon" />
        <img
          src={isEcoHovered ? ecob : ecog}
          alt="Logo"
          onClick={handleModalOpen}
          onMouseEnter={handleEcoMouseEnter}
          onMouseLeave={handleEcoMouseLeave}
        />
        <img src={gfl} alt="gfl" className="gfl" />
      </div>

      <div className="burger-and-touch-container">
        <img
          className="burger-menu"
          src={isBurgerHovered ? burgerImageH : burgerImage}
          alt="Burger Menu"
          onClick={handleModalOpen}
          onMouseEnter={handleBurgerMouseEnter}
          onMouseLeave={handleBurgerMouseLeave}
        />
        <div
          className="get-in-touch"
          onMouseEnter={handleGitMouseEnter}
          onMouseLeave={handleGitMouseLeave}
        >
          <img src={isGitHovered ? gitImageH : gitImage} alt="Get in Touch" />
        </div>
      </div>

      {isModalOpen && <Modal onClose={handleModalClose} />}
    </header>
  );
};

export default Header;
