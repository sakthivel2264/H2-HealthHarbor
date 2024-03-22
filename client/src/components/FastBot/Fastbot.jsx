import React, { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";
import './FastBot.css'

const FastBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBot = () => {
    setIsOpen(!isOpen);
  };

  const closeBot = () => {
    setIsOpen(false);
  };

  return (
    <div className="floating-bot">
      {isOpen ? (
        <div className="bot-container">
          <iframe
            style={{ width: "400px", height: "600px" }}
            src="https://app.fastbots.ai/embed/cltzou6bn002fswb3x4b63gku"
            title="Your Embedded Content"
          ></iframe>
          <button className="close-btn" onClick={closeBot}>
            <FaTimes />
          </button>
        </div>
      ) : (
        <div className="bot-icon" onClick={toggleBot}>
          <FaComments />
        </div>
      )}
    </div>
  );
};

export default FastBot;
