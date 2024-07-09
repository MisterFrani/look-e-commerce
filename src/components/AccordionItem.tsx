import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none transition-colors duration-300"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-medium">{title}</span>
        <svg
          className={`w-6 h-6 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="py-4 text-gray-700">{content}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
