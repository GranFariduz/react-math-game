import React from 'react';

import Aux from '../HOC/Auxil';

import Timer from './Timer';
import Score from './Score';
import QuestionBox from './QuestionBox';
import Buttons from './Buttons';

const Enclose = (props) => {
  return (
    <Aux>
      <Timer width={props.things.timerWidth} />
      <Score score={props.things.score} />
      <QuestionBox
        num1={props.things.num1}
        num2={props.things.num2}
        result={props.things.result}
      />
      <Buttons handleCheckButton={props.handleCheckButton} />
    </Aux>
  );
}

export default Enclose;