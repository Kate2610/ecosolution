import React, { useState, useEffect } from 'react';
import './Electricity.css';

const Electricity = () => {
  const [electricityCount, setElectricityCount] = useState(1134147814); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElectricityCount((prevCount) => prevCount + 1);
    }, 1000);

   
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="electricity-component">
      <div className="electricity-text">
        <p>ELECTRICITY WE PRODUCED<br/>FOR ALL TIME</p>
      </div>
      <div className="green-line"></div>
      <div className="number-container">
        <span className="number">{electricityCount.toLocaleString()}</span>
        <span className="unit">kWh</span>
      </div>
    </div>
  );
}

export default Electricity;
