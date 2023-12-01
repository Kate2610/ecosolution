import React from 'react';
import './MainValues.css'; 
import icon1 from '../../images/maximize-circle.png';
import icon2 from '../../images/global-edit.png';
import icon3 from '../../images/cpu-charge.png';
import icon4 from '../../images/ranking.png';
import workers from '../../images/workers-yellow.png';
import worker from '../../images/worker.png';
import workers2 from '../../images/workers2.png';
import worker2 from '../../images/worker2.png';

const MainValues = () => {
  return (
    <section className="main-values-section" section id="About">

      <div className='values-header'>
        <h1>MAIN VALUES OF OUR COMPANY</h1>
          
      <p className="main-values-text">
      <div className="vertical-line"></div>
        EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs.
        </p>
      </div>
      
      <div className="values-grid">

        <div className="value-container" >
         <div className='value-header'>
          <img src={icon1} alt="Icon 1" className="value-icon" />
          <h2 className="value-title">OPENNESS</h2>
        </div>
          <div className="value-underline"></div>
          <p className="value-description">to the world, people, new ideas and projects</p>
        </div>

      
        <div className="value-container" >
          <div className='value-header'>
          <img src={icon2} alt="Icon 2" className="value-icon" />
            <h2 className="value-title">RESPONSIBILITY</h2>
            </div>
          <div className="value-underline"></div>
          <p className="value-description">we are aware that the results of our work have an impact on our lives and the lives of future generations</p>
        </div>
        <img src={worker} alt="worker" className="worker" />
        <img src={workers} alt="workers" className="worker" />

        <img src={worker2} alt="worker2" className="worker2" />
        <img src={workers2} alt="workers2" className="worker2" />
        
    
        <div className="value-container" >
          <div className='value-header'>
          <img src={icon3} alt="Icon 3" className="value-icon" />
            <h2 className="value-title">INNOVATION</h2>
            </div>
          <div className="value-underline"></div>
          <p className="value-description">we use the latest technology to implement non-standard solutions</p>
        </div>

        <div className="value-container" >
          <div className='value-header'>
          <img src={icon4} alt="Icon 4" className="value-icon" />
            <h2 className="value-title">QALITY</h2>
            </div>
          <div className="value-underline"></div>
          <p className="value-description">we do not strive to be the first among others, but we want to be the best in our business</p>
          </div>
           </div>
   
    </section>
  );
};

export default MainValues;
