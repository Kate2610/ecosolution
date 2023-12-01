import React, { useState } from 'react';
import './ContactUs.css';

import phoneIcon from '../../images/phone-icon.png';
import emailIcon from '../../images/email-icon.png';
import addressIcon from '../../images/address-icon.png';
import sendImage from '../../images/send.png';
import fbIcon from '../../images/facebook-f.png';
import instaIcon from '../../images/instagram.png';

const ContactUS = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

   
    if (name === 'fullName') {
      if (!value || /\d/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          fullName: 'Wrong fullname',
        }));
      }
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Wrong email',
      }));
    } else if (name === 'phone' && !/^\+?3?8?(0\d{9})$/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: 'Wrong phone number',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-us-container" section id="Contact Us">
      <h1 className='contact-header'>CONTACT US</h1>
      
    <div className='contactus-body'> 
      <div className="contacts-cu">
        <div className="contact-item">
          <span className='name'>Phone:</span>
          <div className='item-cont'>
            <img src={phoneIcon} alt="Phone Icon" /> <span>38 (098) 12 34 567</span><br />
            <img src={phoneIcon} alt="Phone Icon" /> <span>38 (093) 12 34 567</span>
          </div> 
        </div>
              
        <div className="contact-item">  
          <span className='name'>Email</span>
          <div className='item-cont'>
            <img src={emailIcon} alt="Email Icon" />
            <span className='spans'>office@ecosolution.com</span>
          </div>
        </div>
              
        <div className="contact-item"> 
          <span className='name'>Address: </span>
          <div className='item-cont'>
            <img src={addressIcon} alt="Address Icon" />
            <span className='spans'>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
          </div>
        </div>
              
        <div className="contact-item">
          <span className='name'>Social networks:</span>
          <div className='item-cont'>
            <img src={fbIcon} alt="Social Icon" className='img-social'/>
            <img src={instaIcon} alt="Social Icon" />       
          </div>
        </div>
      </div>

       
<div className="form">
  <form onSubmit={handleSubmit}>
    <label htmlFor="fullName" >* Full Name</label>
    <input
      type="text"
      id="fullName"
      name="fullName"
      className={errors.fullName ? 'error' : ''}
      value={formData.fullName}
      onChange={handleChange}
      onBlur={handleBlur}
      required
    />
    {errors.fullName && (
      <>
        <span className="error-message">{errors.fullName}</span>
      </>
    )}

    <label htmlFor="email" >* E-mail</label>
    <input
      type="email"
      id="email"
      name="email"
      className={errors.email ? 'error' : ''}
      value={formData.email}
      onChange={handleChange}
      onBlur={handleBlur}
      required
    />
    {errors.email && (
      <>
        <span className="error-message">{errors.email}</span>
      </>
    )}

    <label htmlFor="phone" >* Phone</label>
    <input
      type="tel"
      id="phone"
      name="phone"
      className={errors.phone ? 'error' : ''}
      value={formData.phone}
      onChange={handleChange}
      onBlur={handleBlur}
      required
    />
    {errors.phone && (
      <>
        <span className="error-message">{errors.phone}</span>
      </>
    )}

    <label htmlFor="message">Message</label>
    <textarea
      id="message"
      name="message"
      className=''
      value={formData.message}
      onChange={handleChange}
      placeholder="My message..."
    />

    <button type="submit" className='button'>
      <img className="send-image" src={sendImage} alt="ContactUSnSend" />
    </button>
  </form>
</div>
      </div>
   </div> 
  );
};

export default ContactUS;
