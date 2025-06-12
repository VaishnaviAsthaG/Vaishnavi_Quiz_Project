import React, { useState } from 'react';
import questions from '../data/question';

function SolutionPage({ userAnswers, onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = questions[currentIndex];
  const userAnswer = userAnswers[currentIndex];
  // const isCorrect = userAnswer === currentQuestion.answer;

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="solution-container">
      <h2>📘 View Solution</h2>
      <div className="flashcard">
        <p className="flash-question">
          <strong>Q{currentIndex + 1}:</strong> {currentQuestion.question}
        </p>

        <div className="options">
          {currentQuestion.options.map((option, idx) => {
            let className = 'option-button';
            if (option === currentQuestion.answer) {
              className += ' correct';
            } else if (option === userAnswer && option !== currentQuestion.answer) {
              className += ' incorrect';
            }
            return (
              <button key={idx} className={className} disabled>
                {option}
              </button>
            );
          })}
        </div>

        <div style={{ marginTop: '1rem', textAlign: 'left' }}>
          <p><strong>✅ Correct Answer:</strong> {currentQuestion.answer}</p>
          <p><strong>📝 Your Answer:</strong> {userAnswer}</p>
          <p><strong>📖 Explanation:</strong> {currentQuestion.explanation}</p>
        </div>
      </div>

      <div className="flash-nav">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>⬅️ Previous</button>
        <button onClick={onBack}>🔙 Back</button>
        <button onClick={handleNext} disabled={currentIndex === questions.length - 1}>Next ➡️</button>
      </div>
    </div>
  );
}

export default SolutionPage;
