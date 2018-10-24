import React from 'react';

const MainMenu = (props) => {

  const play = () => {
    props.playHandler();
  };

  return (
    <div>
      <button onClick={play}>Play!</button>
    </div>
  );

};

export default MainMenu;