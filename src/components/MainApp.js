import React, { Component } from 'react';

import Enclose from './Enclose';
import GameOverScreen from './GameOverScreen';

class MainApp extends Component {

  state = {
    timerWidth: 100,
    isCorrect: false,
    isGameOver: false,
    score: 0,
    num1: 0,
    num2: 0,
    result: 0
  };

  generateRandom = () => {

    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    let result;

    if (num1 % 2 === 0) {
      result = num1 + num2;
    } else if (num1 % 3 === 1) {
      result = Math.floor(Math.random() * (num1 + num2));
    } else {
      result = Math.floor(Math.random() * (num1 + num2));
    }

    this.setState({ num1, num2, result });

  }

  handleCheckButton = (correctButtonClicked) => {
    if (this.state.num1 + this.state.num2 === this.state.result) {
      if (correctButtonClicked === true) {
        this.setState({
          isCorrect: true,
          isGameOver: false,
          score: this.state.score + 100,
          timerWidth: 100
        })
        this.generateRandom();
      } else {
        this.setState({
          isCorrect: false,
          isGameOver: true,
          timerWidth: 0
        });
      }
    } else {
      if (correctButtonClicked === false) {
        this.setState({
          isCorrect: true,
          isGameOver: false,
          score: this.state.score + 100,
          timerWidth: 100
        })
        this.generateRandom();
      } else {
        this.setState({
          isCorrect: false,
          isGameOver: true,
          timerWidth: 0
        });
      }
    }
  }

  restartHandler = () => {
    this.setState({ isGameOver: false, score: 0, timerWidth: 100 });
    this.generateRandom();
  };

  timerHandler = () => {
    if (this.state.timerWidth > 0) {
      this.setState({ 
        timerWidth: this.state.timerWidth - 10,
        isGameOver: false
      });
    } else {
      this.setState({ isGameOver: true });
    }
  };

  componentDidMount() {
    this.generateRandom();
    setInterval(this.timerHandler, 600);
  }

  render() {
    return (
      <div>
        {
          this.state.isGameOver
            ?
            <GameOverScreen score={this.state.score} restartHandler={this.restartHandler} />
            :
            <Enclose handleCheckButton={this.handleCheckButton} things={this.state} />
        }
      </div>
    );
  }

}

export default MainApp;