import React from 'react';

const QuestionBox = (props) => {
  return (
    <div>
      <p>{props.num1} + {props.num2} = {props.result}</p>
    </div> 
  );
};

export default QuestionBox;