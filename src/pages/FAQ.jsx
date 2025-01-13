import React, { useState } from "react";
import "./FAQ.css"; // Add styles to match the design
import Navbar from "./Navbar";
import Footer from "./Footer";
import image from '../assets/jpg.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    "Furniture", "Home Decor", "Mattresses", "Sofas & Seatings", "All Products", "About Us", "FAQs"
  ];

  const questions = [
    "How can I pay for my order?",
    "Can I pay by bank transfer?",
    "What is Amazon Pay?",
    "I want to change my account information.",
    "How can I pay for my order?",
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div> <Navbar categories={categories} />
    <div className="faq-container">
      <div className="faq-header">
        <div className="faq-header-text">
          <h1>Help Center</h1>
          <h2>How can We help You</h2>
          <p>
            Browse through our frequently asked questions to find the help you need.
          </p>
          <div className="faq-search">
             <div className="faq-search-wrapper">
               <FontAwesomeIcon icon={faMagnifyingGlass} className="faq-search-icon" />
               <input type="text" placeholder="Search your query here..." />
             </div>
            </div>

        </div>
        <div className="faq-header-image">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="faq-questions">
        <h3>General Questions</h3>
        <div className="faq-list">
          {questions.map((question, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="faq-question">
                {question}
                <span className="faq-icon">{openIndex === index ? "-" : "+"}</span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>
                    This is the answer to the question. You can customize it as needed.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default FAQPage;
