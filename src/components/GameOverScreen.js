import React from 'react';

const GameOverScreen = (props) => {

  const restart = () => props.restartHandler();

  return (
    <div>
      <h3>Your score: {props.score}</h3>
      <button onClick={restart}>Game Over! Restart Game?</button>
    </div>
  );

};

export default GameOverScreen;