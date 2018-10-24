import React from 'react';

const GameOverScreen = (props) => {

  const restart = () => props.restartHandler();

  return (
    <div>
      <h2>This is game over!</h2>
      <h3>Your score: {props.score}</h3>
      <button onClick={restart}>Restart Game</button>
    </div>
  );

};

export default GameOverScreen;