import { useState } from "react";
import PropTypes from "prop-types";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-slate-700">
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right border-gray-200 dark:border-gray-700 gap-3 ${
            isOpen ? "text-blue-600 bg-gray-100 dark:bg-slate-800 dark:text-white" : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800"
          }`}
          onClick={onClick}
        >
          <span>{title}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>
        <div className="p-5 border border-t-0 border-gray-200 dark:border-slate-700 dark:bg-slate-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{content}</p>
        </div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4">
      <h1 className="my-6 text-3xl font-bold text-gray-900 dark:text-white">About Us</h1>
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-slate-700">
        <AccordionItem
          title="Analyze Your Text"
          content="TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, or reading time estimation."
          isOpen={activeIndex === 0}
          onClick={() => handleAccordionClick(0)}
        />
        <AccordionItem
          title="Free to use"
          content="TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit."
          isOpen={activeIndex === 1}
          onClick={() => handleAccordionClick(1)}
        />
        <AccordionItem
          title="Browser Compatible"
          content="This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc."
          isOpen={activeIndex === 2}
          onClick={() => handleAccordionClick(2)}
        />
      </div>
    </div>
  );
}