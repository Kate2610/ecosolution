import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './Cases.css'; 
import arrowLeft from '../../images/arrow-left.png';
import arrowRight from '../../images/arrow-right.png';
import arrGreenH from '../../images/arrow-right-h.png';
import arrowGreen from '../../images/arrow-green.png';
import S1 from '../../images/S1.png';
import S2 from '../../images/S2.png';
import S3 from '../../images/S3.png';
import S4 from '../../images/S4.png';
import S5 from '../../images/S5.png';

const slidesData = [
  {
    image: S1,
    text: 'Lviv, Private Enterprise “ZAKHIDNYI BUH”',
    info: 'Wind Power for auto field irrigation',
    info2: 'July 2023',
  },
  {
    image: S2,
    text: 'Zhytomyr city Private Enterprise “Bosch”',
    info: 'Solar Panels for industrial use',
    info2: 'November 2023',
  },
  {
    image: S3,
    text: 'Rivne city Private Enterprise “Biotech”',
    info: 'Thermal modules',
    info2: 'October 2023',
  },
  {
    image: S4,
    text: 'Kherson city Private Enterprise “HealthyFarm”',
    info: 'Wind power',
    info2: 'September 2021',
  },
  {
    image: S5,
    text: 'Zaporizhia city Private Enterprise “Biotech”',
    info: 'Mini nuclear stations',
    info2: 'May 2021',
  },
];

const Cases = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredArrows, setHoveredArrows] = useState([false, false]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const handleDragStop = (e, data) => {
    const dragDistance = data.lastX - data.x;

    if (Math.abs(dragDistance) > 50) {
      if (dragDistance > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    } else {
      handleNextSlide();
    }
  };

  const handleArrowGreenHover = (index) => {
    setHoveredArrows((prev) => {
      const newHoveredArrows = [...prev];
      newHoveredArrows[index] = true;
      return newHoveredArrows;
    });
  };

  const handleArrowGreenLeave = (index) => {
    setHoveredArrows((prev) => {
      const newHoveredArrows = [...prev];
      newHoveredArrows[index] = false;
      return newHoveredArrows;
    });
  };

  return (
    <div className="cases-component" section id="Cases">
      <div className='header-title'>
        <div className="header-cases">SUCCESSFUL CASES OF OUR COMPANY</div>
        <div className="slide-controls">
          <div className="slide-number">
            <div className="vertic-line"></div>
            <span className="current">{`0${currentSlide + 1}`} /</span><span className="total">05</span>
          </div>
          <div className="arrows">
            <div className="arrow" onClick={handlePrevSlide}>
              <img src={arrowLeft} alt="Arrow Left" />
            </div>
            <div className="arrow" onClick={handleNextSlide}>
              <img src={arrowRight} alt="Arrow Right" />
            </div>
          </div>
        </div>
      </div>

      <div className="slider-container">
        <Draggable onStop={handleDragStop}>
          <div className="slide">
            <img className='img-slide' src={slidesData[currentSlide].image} alt={`Slide ${currentSlide + 1}`} />
            <div className='slide-info'>
              <div className="text-container">
                <p className="text">{slidesData[currentSlide].text}</p>
                <img
                  src={hoveredArrows[0] ? arrGreenH : arrowGreen}
                  alt="Arrow Green"
                  className='arr-green'
                  onMouseEnter={() => handleArrowGreenHover(0)}
                  onMouseLeave={() => handleArrowGreenLeave(0)}
                />
              </div>
              <div className="underlin" style={{ backgroundColor: 'rgba(151, 210, 139, 1)' }}></div>
              <div className='under-info'>
                <p className="info">{slidesData[currentSlide].info}</p>
                <p className="info2">{slidesData[currentSlide].info2}</p>
              </div>
            </div>
          </div>
        </Draggable>

        <Draggable onStop={handleDragStop}>
          <div className="slide2">
            <img className='img-slide' src={slidesData[(currentSlide + 1) % slidesData.length].image} alt={`Slide ${currentSlide + 2}`} />
            <div className='slide-info'>
              <div className="text-container">
                <p className="text">{slidesData[(currentSlide + 1) % slidesData.length].text}</p>
                <img
                  src={hoveredArrows[1] ? arrGreenH : arrowGreen}
                  alt="Arrow Green"
                  className='arr-green'
                  onMouseEnter={() => handleArrowGreenHover(1)}
                  onMouseLeave={() => handleArrowGreenLeave(1)}
                />
              </div>
              <div className="underlin" style={{ backgroundColor: 'rgba(151, 210, 139, 1)' }}></div>
              <div className='under-info'>
                <p className="info">{slidesData[(currentSlide + 1) % slidesData.length].info}</p>
                <p className="info2">{slidesData[(currentSlide + 1) % slidesData.length].info2}</p>
              </div>
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default Cases;
