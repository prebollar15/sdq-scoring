import React from 'react';

const Question = ({ question, onChange, value }) => {
  return (
    <div className="question-container">
      <p className="question-text">{question.num}. {question.question}</p>
      <div className="options-container">
        {question.options.map((option, i) => (
          <label key={i} className="option-label">
            <input
              type="radio"
              name={`question-${question.num}`}
              value={String(option.value)}
              checked={String(value) === String(option.value)}
              onChange={(e) => onChange(e, question.question)}
            />
            <span className="option-text">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question; 