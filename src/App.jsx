import React, { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import ResultPage from './pages/ResultPage';
import SolutionPage from './pages/SolutionPage';

function App() {
  const [page, setPage] = useState('home');
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizElapsedTime, setQuizElapsedTime] = useState(0);
  const [questionTimings, setQuestionTimings] = useState([]);

  const handleStart = () => {
    setPage('quiz');
    setUserAnswers([]);
    setQuizElapsedTime(0);
    setQuestionTimings([]);
  };

  const handleSubmit = ({ selectedOptions, quizElapsedTime, questionTimings }) => {
    setUserAnswers(selectedOptions);
    setQuizElapsedTime(quizElapsedTime);
    setQuestionTimings(questionTimings);
    setPage('summary');
  };

  const handleViewResult = () => setPage('result');
  const handleViewSolution = () => setPage('solution');
  const handleBackToSummary = () => setPage('summary');
  const handleBackToHome = () => setPage('home');

  return (
    <div>
      {page === 'home' && <Home onStart={handleStart} />}

      {page === 'quiz' && (
        <Quiz onSubmit={handleSubmit} />
      )}

      {page === 'summary' && (
        <div className="summary-page" style={{ textAlign: 'center', marginTop: '5rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Quiz Finished!</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <button onClick={handleViewResult} className="nav-button next-button">📊 View Result</button>
            <button onClick={handleViewSolution} className="nav-button prev-button">📘 View Solution</button>
            <button onClick={handleBackToHome} className="nav-button prev-button">🔁 Try Again</button>
          </div>
        </div>
      )}

      {page === 'result' && (
        <ResultPage
          userAnswers={userAnswers}
          quizElapsedTime={quizElapsedTime}
          questionTimings={questionTimings}
          onBack={handleBackToSummary}
        />
      )}

      {page === 'solution' && (
        <SolutionPage
          userAnswers={userAnswers}
          quizElapsedTime={quizElapsedTime}
          questionTimings={questionTimings}
          onBack={handleBackToSummary}
        />
      )}
    </div>
  );
}

export default App