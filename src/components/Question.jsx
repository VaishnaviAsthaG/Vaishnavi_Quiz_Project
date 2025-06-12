import React from "react";

const Question = ({ data, number, onAnswer }) => {
  return (
    <div className="question-card">
      <h2>Question {number}</h2>
      <p>{data.question}</p>
      <div className="options">
        {data.options.map((opt, idx) => (
          <button key={idx} onClick={() => onAnswer(opt)}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
