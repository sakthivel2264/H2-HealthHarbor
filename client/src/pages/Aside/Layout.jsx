import React, { useState } from 'react';
import "./Layout.css";
import News from './components/News';
import Hospitals from './components/Hospitals';
import MentalHealth from './components/MentalHealth';
import Chatbot from './components/Chatbot';
import Prescription from './components/Prescription';

const Layout = () => {
  const [selectedOption, setSelectedOption] = useState("news");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  
  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case "news":
        return <News/>;
      case "hospitals":
        return <Hospitals/>;
      case "chatbot":
        return <Chatbot/>;
      case "mental-health":
        return <MentalHealth/>;
      case "Prescription":
        return <Prescription/>;
        
      default:
        return null;
    }
  };

  return (
    <div className='containers'>
      {/* Aside Navbar */}
      <aside className='sidebar'>
        <h2>Features</h2>
        <ol>
          <li className="button" onClick={() => handleOptionChange("news")}><span>News</span></li>
          <li className="button" onClick={() => handleOptionChange("hospitals")}><span>Location of Hospitals</span></li>
          <li className="button" onClick={() => handleOptionChange("chatbot")}><span>ChatBot</span></li>
          <li className="button" onClick={() => handleOptionChange("mental-health")}><span>Mental Health Care</span></li>
          <li className="button" onClick={() => handleOptionChange("Prescription")}><span>PrescriptionAnalyse</span></li>
        </ol>
      </aside>

      {/* Main Content */}
      <main className='main-content'>
        {renderSelectedComponent()}
      </main>
    </div>
  );
};

export default Layout;
