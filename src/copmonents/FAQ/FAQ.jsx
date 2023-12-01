import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './FAQ.css';
import minusImage from '../../images/minus.png';
import addImage from '../../images/add.png';
import contactImage from '../../images/contactUS.png';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-container" section id="FAQ">
      <h1 className='mobile-header'>FREQUENTLY ASKED QUESTIONS</h1>
      <div className="faq-div-1">
        <div className="green-bar"></div>
        <div className="faq-content">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <div className='main-txt'>
                <div className='item-header' onClick={() => handleToggle(index)}>
                  <img src={index === openIndex ? minusImage : addImage} alt="Toggle Icon" />
                  <h2 className='faq-header'>{item.question}</h2>
                </div>
                {index === openIndex && (
                  <p className='answer'>{item.answer}</p>
                )}
              </div>
            </div>
          ))}
          <div className='txt-end'>
            <h2 className='faq-end'>Didn't find the answer to your question? </h2>
            <img src={contactImage} alt="contactImage" />
          </div>
        </div>
      </div>
      <div className="faq-div-2">
        <h1 className=''>FREQUENTLY ASKED QUESTIONS</h1>
        <div className="faq-divider">
          <h2 className='faq-end'>Didn't find the answer to your question? </h2>
          <Link
            to="Contact Us"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img src={contactImage} alt="contactImage" />
          </Link>
        </div>
      </div>
    </div>
  );
};


const faqData = [
  {
    question: "How do wind turbines and solar panels work together in a renewable energy system?",
    answer: "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."
  },
  {
    question: "What sets EcoSolution's renewable energy solutions apart from others on the market?",
    answer: "Answer"
  },
  {
    question: "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
    answer: "Answer"
  },
  {
    question: "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
    answer: "Answer"
  },
  {
    question: "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
    answer: "Answer"
  },
];

export default FAQ;