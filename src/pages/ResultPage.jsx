import React from 'react';
import questions from '../data/question';

function ResultPage({ userAnswers, quizElapsedTime, questionTimings, onBack }) {
  const totalQuestions = questions.length;
  const score = userAnswers.filter((ans, i) => ans === questions[i].answer).length;

  return (
    <div className="result-page flash-layout">
      <h2 className="flash-heading">🎯 Result</h2>
      <p><strong>Marks:</strong> {score} / {totalQuestions}</p>
      <p><strong>Total Time Taken:</strong> {quizElapsedTime} seconds</p>

      {questions.map((q, i) => {
        const userAnswer = userAnswers[i];
        const isCorrect = userAnswer === q.answer;

        return (
          <div key={i} className="flash-card">
            <p className="flash-question"><strong>Q{i + 1}:</strong> {q.question}</p>
            <div className="options">
              {q.options.map((option, idx) => {
                let className = 'option-button';

                if (userAnswer === option && isCorrect) {
                  className += ' correct'; // Correctly selected
                } else if (userAnswer === option && !isCorrect) {
                  className += ' incorrect'; // Incorrectly selected
                } else if (option === q.answer && !isCorrect) {
                  className += ' correct'; // The correct one when user was wrong
                }

                return (
                  <button key={idx} className={className} disabled>
                    {option}
                  </button>
                );
              })}
            </div>
            <p className="question-time">
              <strong>Time Taken:</strong> {questionTimings[i]} seconds
            </p>
          </div>
        );
      })}

      <div className="nav-buttons">
        <button onClick={onBack}>🔙 Back</button>
      </div>
    </div>
  );
}

export default ResultPage;
