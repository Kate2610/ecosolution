import React from 'react';
import './App.css';
import Header from './copmonents/Header/Header.jsx';
import Main from './copmonents/Main/Main.jsx';
import MainValues from './copmonents/MainValues/MainValues.jsx';
import Electricity from './copmonents/Electricity/Electricity.jsx';
import Cases from './copmonents/Cases/Cases.jsx';
import FAQ from './copmonents/FAQ/FAQ.jsx';
import ContactUs from './copmonents/ContactUs/ContactUs.jsx';
import Footer from './copmonents/Footer/Footer.jsx';

const App = () => {
  return (
    <div сclassname = 'app-container'  >
      <Header />
      <Main />
      <MainValues />
      <Electricity />
      <Cases />
      <FAQ />
      <ContactUs />
      <Footer /> 
    </div>
  );
};

export default App;
