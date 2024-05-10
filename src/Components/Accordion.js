import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion border border-gray-300 rounded-3xl border-cyan-600 overflow-hidden mb-4">
      <div
        className="bg-gray-100 px-4 py-2 flex items-center justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <span
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="p-4 bg-white">
          <p className="text-gray-700">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;