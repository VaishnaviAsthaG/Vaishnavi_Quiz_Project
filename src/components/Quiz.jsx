import React, { useState, useEffect } from "react";
import questions from '../data/question';

function Quiz({ onSubmit }) {
  const [current, setCurrent] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [quizStartTime] = useState(Date.now());
  const [quizElapsedTime, setQuizElapsedTime] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [questionElapsedTime, setQuestionElapsedTime] = useState(0);
  const [questionTimings, setQuestionTimings] = useState([]);

  // Global Quiz Timer
  useEffect(() => {
    const quizInterval = setInterval(() => {
      setQuizElapsedTime(Math.floor((Date.now() - quizStartTime) / 1000));
    }, 1000);
    return () => clearInterval(quizInterval);
  }, [quizStartTime]);

  // Per-Question Timer
  useEffect(() => {
    const questionInterval = setInterval(() => {
      setQuestionElapsedTime(Math.floor((Date.now() - questionStartTime) / 1000));
    }, 1000);
    return () => clearInterval(questionInterval);
  }, [questionStartTime]);

  const handleAnswer = (option) => {
    const updated = [...selectedOptions];
    updated[current] = option;
    setSelectedOptions(updated);
  };

  const handleNext = () => {
    const timeTaken = Math.floor((Date.now() - questionStartTime) / 1000);
    const updatedTimings = [...questionTimings];
    updatedTimings[current] = timeTaken;
    setQuestionTimings(updatedTimings);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setQuestionStartTime(Date.now());
      setQuestionElapsedTime(0);
    }
  };

  const handlePrev = () => {
    const timeTaken = Math.floor((Date.now() - questionStartTime) / 1000);
    const updatedTimings = [...questionTimings];
    updatedTimings[current] = timeTaken;
    setQuestionTimings(updatedTimings);

    if (current > 0) {
      setCurrent(current - 1);
      setQuestionStartTime(Date.now());
      setQuestionElapsedTime(0);
    }
  };

  const submitQuiz = () => {
    const timeTaken = Math.floor((Date.now() - questionStartTime) / 1000);
    const updatedTimings = [...questionTimings];
    updatedTimings[current] = timeTaken;
    setQuestionTimings(updatedTimings);

    onSubmit({
      selectedOptions,
      quizElapsedTime,
      questionTimings: updatedTimings,
    });
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-timer">⏱ Total Time: {quizElapsedTime}s</div>
      </div>

      <div className="card flash-card">
        <div className="question-timer">🕒 Q-Time: {questionElapsedTime}s</div>
        <h2>Q{current + 1}: {questions[current].question}</h2>

        <div className="options">
          {questions[current].options.map((option, idx) => (
            <button
              key={idx}
              className={`option-button ${selectedOptions[current] === option ? 'selected' : ''}`}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="nav-buttons">
          {current > 0 && <button onClick={handlePrev}>Previous</button>}
          {current < questions.length - 1 ? (
            <button onClick={handleNext}>Next</button>
          ) : (
            <button onClick={submitQuiz}>Submit Quiz</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;

