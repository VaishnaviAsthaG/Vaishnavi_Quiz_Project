import React from 'react';

function Home({ onStart }) {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="quiz-title">React Quiz</h1>
        <button className="start-button" onClick={onStart}>Start Quiz</button>
      </div>
    </div>
  );
}

export default Home;