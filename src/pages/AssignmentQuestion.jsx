import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I submit my assignment?",
    answer:
      "Simply go to the assignment page, click on the 'Submit' button, upload your file (PDF/DOC), and hit confirm. You'll get a success message once it's submitted.",
  },
  {
    question: "Can I edit my assignment after submission?",
    answer:
      "Yes! As long as the deadline hasn’t passed, you can re-upload a new version of your assignment from the 'My Submissions' section.",
  },
  {
    question: "How are assignments evaluated?",
    answer:
      "Assignments are reviewed by instructors manually. Marks are given based on criteria like completeness, code quality, and presentation.",
  },
  {
    question: "What if I miss a deadline?",
    answer:
      "You can still submit late, but it will be marked as 'Late Submission'. Some instructors may deduct marks for late work.",
  },
  {
    question: "Where can I check my assignment results?",
    answer:
      "Go to your dashboard and navigate to the 'My Assignments' tab. You'll see the status, marks, and any instructor feedback there.",
  },
];

const AccordionItem = ({ faq, isOpen, toggle }) => {
  return (
    <div className="border border-gray-300 rounded-xl overflow-hidden mb-4 transition-all">
      <button
        onClick={toggle}
        className="w-full px-6 py-4 flex justify-between items-center text-left bg-white hover:bg-pink-50 transition"
      >
        <span className="text-lg font-medium text-gray-800">{faq.question}</span>
        <ChevronDown
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180 text-pink-600" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-600 text-base bg-gradient-to-br from-white to-pink-50">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

const AssignmentQuestion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto my-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-800">
        ❓ Assignment FAQs
      </h2>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          faq={faq}
          isOpen={openIndex === index}
          toggle={() => toggleAccordion(index)}
        />
      ))}
    </section>
  );
};

export default AssignmentQuestion;
