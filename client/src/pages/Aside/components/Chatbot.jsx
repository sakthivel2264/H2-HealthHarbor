import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chatbot = () => {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const removeFormattingMarkers = (text) => {
    return text.replace(/\*\*|\*/g, '').trim();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Initialize the Google Generative AI with your API key
    const genAI = new GoogleGenerativeAI("AIzaSyDKx8QSMBfSKXqK4XijmLMX6h1jDyBgPRg");

    try {
      // Get the generative model (gemini-pro model for text-only input)
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      // Generate content using the model and user input
      const result = await model.generateContent(inputText);
      const response = await result.response;
      const text = await response.text();
      const results = await removeFormattingMarkers(text)
      // Set the response text
      setResponseText(results);
      setIsLoading(false);
    } catch (error) {
      setError('Error generating chatbot response.');
      console.error('Error generating chatbot response:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className='chatC'>
      <h1 className='chat-h1'>ChatBot</h1>
      <form onSubmit={handleSubmit} className='chat-form'>
      <div className="search">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your prompt"
        />
        <button type="submit">Submit</button>
        </div>
        {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{responseText}</p>
      )}
      {error && <p>Error: {error}</p>}
      </form>
      
    </div>
  );
};

export default Chatbot;
