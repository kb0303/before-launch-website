import React, { useState } from 'react';
import './App.css';
import wishgeeks_logo from './img/wishgeeks_logo.png';
import windowImg from './img/window.png';
import macImg from './img/mac.png';
import chromeImg from './img/chrome.png';
import connectPrinterToWifi from './img/Connect-Printer-to-Wifi.png';
import newPrinter from './img/new-printer.png';
import paperJamPrinter from './img/Paper-Jam-in-Printer.png';
import printerOffile from './img/Printer-Offline.png';
import troubleshootPrinter from './img/Troubleshoot-Printer.png';
import printerWontPrintImg from './img/Printer-wont-Print.png';
import bgImg from './img/bg-design.png';
import emailImg from './img/email.png';
import phoneImg from './img/phone.png';
import manufacturerImg from './img/manufacturer.png';
import customerServiceImg from './img/customer-service.png';
import printerBannerImg from './img/printer-banner.png';

import axios from 'axios';
import IssueResolve from './IssueResolve';
import Loader from './Loader';
import Footer from './Footer';

function App() {
  const [currentQuiz, setCurrentQuiz] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [email, setEmail] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showIssueResolve, setShowIssueResolve] = useState(false);

  const [displayQuiz, setDisplayQuiz] = useState({
    1: 'block',
    2: 'none',
    3: 'none',
    4: 'none',
    5: 'none',
    6: 'none',
    7: 'none',
  });

  const [emailError, setEmailError] = useState('');
  const [manufacturerError, setManufacturerError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleOptionSelect = (question, value) => {
    setSelectedOptions((prev) => ({ ...prev, [question]: value }));
    setTimeout(() => {
      setCurrentQuiz((prev) => prev + 1);
      setDisplayQuiz((prev) => ({
        ...prev,
        [currentQuiz]: 'none',
        [currentQuiz + 1]: 'block',
      }));
    }, 500);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };                                                                           

  const handleEmailSubmit = () => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
      setTimeout(() => {
        setCurrentQuiz((prev) => prev + 1);
        setDisplayQuiz((prev) => ({
          ...prev,
          [currentQuiz]: 'none',
          [currentQuiz + 1]: 'block',
        }));
      }, 500);
    }
  };

  const handleNextClick = () => {
    if (!manufacturer) {
      setManufacturerError('Printer Mode is required');
    } else {
      setManufacturerError('');
      setCurrentQuiz((prev) => prev + 1);
      setDisplayQuiz((prev) => ({
        ...prev,
        [currentQuiz]: 'none',
        [currentQuiz + 1]: 'block',
      }));
    }
  };



  const handleCheckboxSelect = (value) => {
    setSelectedOptions((prev) => ({ ...prev, customerService: value }));
    setTimeout(() => {
      setCurrentQuiz((prev) => prev + 1);
      setDisplayQuiz((prev) => ({
        ...prev,
        [currentQuiz]: 'none',
        [currentQuiz + 1]: 'block',
      }));
    }, 500);
  };

  const validatePhoneNumber = (phone) => {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  };

  const handlePhoneSubmit = () => {
    if (!phone) {
      setPhoneError('Contact Number is required');
    } else if (!validatePhoneNumber(phone)) {
      setPhoneError('Contact Number must be a 10-digit number without special characters or spaces');
    } else {
      setPhoneError('');
      const formData = { email, ...selectedOptions, manufacturer, phone };
      setIsSubmitting(true);
      axios.post('http://208.72.154.18/api/save', formData)
        .then(response => {
          console.log('Data saved:', response.data);
          setTimeout(() => {
            setShowIssueResolve(true);
            setIsSubmitting(false);
          }, 5000); // Display loader for 5 seconds
        })
        .catch(error => {
          console.error('Error saving data:', error);
          setIsSubmitting(false);
        });
    }
  };

  const isInfoVisible = (info) => info ? 'infoVisible' : '';

  return (
    <div>
      {isSubmitting && <Loader />}
      {!isSubmitting && !showIssueResolve && (
        <>
          <nav>
            <img src={wishgeeks_logo} alt="Logo" />
            <p id="company-name">Wish Geeks</p>
          </nav>

          <div id="quiz-and-choosen-information-container" className="mt-4">
            <div id="quiz-container1" className="quiz-container" style={{ display: displayQuiz[1] }}>
              <img src={printerBannerImg} alt="Banner Image" className='banner-img' />
              <h5>Q1. What Operating System Do You Use?</h5>
              <div className="quiz-options-container mt-4">
                <div className={`quiz-option ${selectedOptions.os === 'window' ? 'selected' : ''}`} onClick={() => handleOptionSelect('os', 'window')}>
                  <input type="radio" name="os" id="window" value="window" className="quiz-option-radio" />
                  <div className="quiz-option-content">
                    <img src={windowImg} alt="Windows Logo" />
                    <p className="quiz-option-title">Window</p>
                  </div>
                </div>
                <div className={`quiz-option ${selectedOptions.os === 'mac' ? 'selected' : ''}`} onClick={() => handleOptionSelect('os', 'mac')}>
                  <input type="radio" name="os" id="mac" value="mac" className="quiz-option-radio" />
                  <div className="quiz-option-content">
                    <img src={macImg} alt="Mac Logo" />
                    <p className="quiz-option-title">Mac</p>
                  </div>
                </div>
                <div className={`quiz-option ${selectedOptions.os === 'chromebook' ? 'selected' : ''}`} onClick={() => handleOptionSelect('os', 'chromebook')}>
                  <input type="radio" name="os" id="chromebook" value="chromebook" className="quiz-option-radio" />
                  <div className="quiz-option-content">
                    <img src={chromeImg} alt="Chrome Book Logo" />
                    <p className="quiz-option-title">Chromebook</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="quiz-container2" className="quiz-container mt-5" style={{ display: displayQuiz[2] }}>
              <h5>Q2. CHOOSE THE CLOSEST OPTION TO YOUR ISSUE:</h5>
              <div className="quiz-options-container mt-5">
                <div className={`quiz-option ${selectedOptions.issue === 'connect_printer' ? 'selected' : ''}`} onClick={() => handleOptionSelect('issue', 'connect_printer')}>
                  <input type="radio" name="issue" id="connect_printer" value="connect_printer" className="quiz-option-radio" />
                  <div className="quiz-option-content">
                    <img src={connectPrinterToWifi} alt="Connect Printer Logo" />
                    <p className="quiz-option-title">Connect Printer to Wifi</p>
                  </div>
                </div>
                <div className={`quiz-option ${selectedOptions.issue === 'printer_offline' ? 'selected' : ''}`} onClick={() => handleOptionSelect('issue', 'printer_offline')}>
                  <input type="radio" name="issue" id="printer_offline" value="printer_offline" className="quiz-option-radio" />
                  <div className="quiz-option-content">
                    <img src={printerOffile} alt="Printer Offline Logo" />
                    <p className="quiz-option-title">Printer Offline</p>
                  </div>
                </div>
                <div className={`quiz-option ${selectedOptions.issue === 'troubleshoot_printer' ? 'selected' : ''}`} onClick={() => handleOptionSelect('issue', 'troubleshoot_printer')}>
                  <input type="radio" name="issue" id="troubleshoot_printer" value="troubleshoot_printer" className="quiz-option-radio" />
                  <div className="quiz-option-content">
                    <img src={troubleshootPrinter} alt="Troubleshoot Printer Logo" />
                    <p className="quiz-option-title">Troubleshoot Printer</p>
                  </div>
                </div>
                <div className={`quiz-option ${selectedOptions.issue === 'printer_wont_print' ? 'selected' : ''} mt-4`} onClick={() => handleOptionSelect('issue', 'printer_wont_print')}>
                  <input type="radio" name="issue" id="printer_wont_print" value="printer_wont_print" className="quiz-option-radio" />
                  <div className="quiz-option-content">
                    <img src={printerWontPrintImg} alt="Printer won't Print Logo" />
                    <p className="quiz-option-title">Printer won't Print</p>
                  </div>
                </div>
                <div className={`quiz-option ${selectedOptions.issue === 'paper_jam_in_printer' ? 'selected' : ''} mt-4`} onClick={() => handleOptionSelect('issue', 'paper_jam_in_printer')}>
                  <input type="radio" name="issue" id="paper_jam_in_printer" value="paper_jam_in_printer" className="quiz-option-radio" />
                  <div className="quiz-option-content">
                    <img src={paperJamPrinter} alt="Paper Jam in Printer Logo" />
                    <p className="quiz-option-title">Paper Jam in Printer</p>
                  </div>
                </div>
                <div className={`quiz-option ${selectedOptions.issue === 'setting_up_new_printer' ? 'selected' : ''} mt-4`} onClick={() => handleOptionSelect('issue', 'setting_up_new_printer')}>
                  <input type="radio" name="issue" id="setting_up_new_printer" value="setting_up_new_printer" className="quiz-option-radio" />
                  <div className="quiz-option-content">
                    <img src={newPrinter} alt="Setting up New Printer Logo" />
                    <p className="quiz-option-title">Setting up New Printer</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="quiz-container3" className="quiz-container mt-5" style={{ display: displayQuiz[3] }}>
              <h5>Q3. EMAIL</h5>
              <div className="quiz-options-container mt-5">
                <img src={emailImg} alt="" className='email-img' />
                <div className="row g-3 align-items-center email-input-container">
                  <label htmlFor="email" className="form-label">Email address: </label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required />
                  {emailError && <div className="error-message text-danger">{emailError}</div>}
                </div>
                <button type="button" className="btn btn-success next-btn" onClick={handleEmailSubmit}>Next</button>
              </div>
            </div>

            <div id="quiz-container4" className="quiz-container mt-5" style={{ display: displayQuiz[4] }}>
              <h5>Q4. WHAT IS YOUR PRINTER MODE?</h5>
              <div className="quiz-options-container mt-5">
                <img src={manufacturerImg} alt="Manufacturer Design" className='manufacturer-img' />
                <div className="row g-3 align-items-center email-input-container">
                  <label htmlFor="manufacturer" className="form-label">Printer Mode: </label>
                  <input type="text" className="form-control" id="manufacturer" name="manufacturer" placeholder="Enter Your Printer Mode here" onChange={(e) => setManufacturer(e.target.value)} required />
                  {manufacturerError && <div className="error-message text-danger">{manufacturerError}</div>}
                </div>
                <button type="button" className="btn btn-success next-btn" onClick={handleNextClick}>Next</button>
              </div>
            </div>

            <div id="quiz-container5" className="quiz-container mt-5" style={{ display: displayQuiz[5] }}>
              <h5>Q5. WOULD YOU LIKE TO CONNECT WITH CUSTOMER SERVICE?</h5>
              <div className="quiz-options-container mt-5">
                <img src={customerServiceImg} alt="Customer Service Design" className='customer-service-img' />
                <div className='quiz-option' onClick={() => handleCheckboxSelect('yes')}>
                  <label className="checkbox-container">
                    <input type="checkbox" value="yes" />
                    <div className="checkmark"></div>
                  </label>
                  <span>Yes</span>
                </div>
                <div className='quiz-option' onClick={() => handleCheckboxSelect('no')}>
                  <label className="checkbox-container">
                    <input type="checkbox" value="no" />
                    <div className="checkmark"></div>
                  </label>
                  <span>No</span>
                </div>
                <div className='quiz-option' onClick={() => handleCheckboxSelect('notSure')}>
                  <label className="checkbox-container">
                    <input type="checkbox" value="notSure" />
                    <div className="checkmark"></div>
                  </label>
                  <span>I am not sure</span>
                </div>
              </div>
            </div>

            <div id="quiz-container6" className="quiz-container mt-5" style={{ display: displayQuiz[6] }}>
              <h5>Q6. YOUR CONTACT NUMBER</h5>
              <div className="quiz-options-container mt-5">
                <img src={phoneImg} alt="Phone Design" className='phone-img' />
                <div className="row g-3 align-items-center email-input-container">
                  <label htmlFor="phone" className="form-label">Contact Number: </label>
                  <input type="phone" className="form-control" id="phone" name="phone" placeholder="Enter your contact number here" onChange={(e) => setPhone(e.target.value)} required />
                  {phoneError && <div className="error-message text-danger">{phoneError}</div>}
                </div>
                <button type="button" className="btn btn-success next-btn" onClick={handlePhoneSubmit}>Submit</button>
              </div>
            </div>

            <div id="choosen-information-container">
              <img src={bgImg} alt="Background Image Design" className='bg-design' />
              <div className='w-100 z-1'>
                <h6><span>1</span> WHICH OPERATING SYSTEM DO YOU USE</h6>
                <p className={isInfoVisible(selectedOptions.os)}>
                  <span className='ms-4 me-3'><i className="fa-solid fa-arrow-left"></i></span>
                  {selectedOptions.os}
                </p>
              </div>
              <div className='w-100 z-1'>
                <h6><span>2</span> CHOOSE THE CLOSEST OPTION TO YOUR ISSUE</h6>
                <p className={isInfoVisible(selectedOptions.issue)}>
                  <span className='ms-4 me-3'><i className="fa-solid fa-arrow-left"></i></span>
                  {selectedOptions.issue ? selectedOptions.issue.replace(/_/g, ' ') : ""}
                </p>
              </div>
              <div className='w-100 z-1'>
                <h6><span>3</span> EMAIL</h6>
                <p className={isInfoVisible(email)}>
                  <span className='ms-4 me-3'><i className="fa-solid fa-arrow-left"></i></span>
                  {email}
                </p>
              </div>
              <div className='w-100 z-1'>
                <h6><span>4</span> MANUFACTURER</h6>
                <p className={isInfoVisible(manufacturer)}>
                  <span className='ms-4 me-3'><i className="fa-solid fa-arrow-left"></i></span>
                  {manufacturer}
                </p>
              </div>
              <div className='w-100 z-1'>
                <h6><span>5</span> CUSTOMER SERVICE</h6>
                <p className={isInfoVisible(selectedOptions.customerService)}>
                  <span className='ms-4 me-3'><i className="fa-solid fa-arrow-left"></i></span>
                  {selectedOptions.customerService}
                </p>
              </div>
              <div className='w-100 z-1'>
                <h6><span>6</span> PHONE NUMBER</h6>
                <p className={isInfoVisible(phone)}>
                  <span className='ms-4 me-3'><i className="fa-solid fa-arrow-left"></i></span>
                  {phone}
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
      {showIssueResolve && <IssueResolve issue={selectedOptions.issue} />}
    </div>
  );
}

export default App;
