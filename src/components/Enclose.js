import React, { Component } from 'react';

import Aux from '../HOC/Auxil';

import Timer from './Timer';
import Score from './Score';
import QuestionBox from './QuestionBox';
import Buttons from './Buttons';

class Enclose extends Component {

  render() {
    return (
      <Aux>
        <Timer width={this.props.things.timerWidth} />
        <Score score={this.props.things.score} />
        <QuestionBox 
          num1={this.props.things.num1} 
          num2={this.props.things.num2} 
          result={this.props.things.result} 
        />
        <Buttons  handleCheckButton={this.props.handleCheckButton} />
      </Aux>
    );
  }

}

export default Enclose;