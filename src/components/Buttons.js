import React from 'react';

const Buttons = (props) => {

  const checkButtonClick = (e) => {
    if (e.target.innerHTML === 'Correct') {
      props.handleCheckButton(true);
    } else {
      props.handleCheckButton(false);
    }
  };

  return (
    <div>
      <button onClick={checkButtonClick}>Correct</button>
      <button onClick={checkButtonClick}>Wrong</button>
    </div>
  );

};

export default Buttons;