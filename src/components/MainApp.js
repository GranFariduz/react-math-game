import React, { Component } from 'react';

import Enclose from './Enclose';
import GameOverScreen from './GameOverScreen';
import Head from './Head';
import MainMenu from './MainMenu';

class MainApp extends Component {

  state = {
    timerWidth: 10,
    isCorrect: false,
    isGameOver: false,
    score: 0,
    num1: 0,
    num2: 0,
    result: 0,
    playClicked: false,
    intervalId: ''
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
          timerWidth: 10
        })
        this.generateRandom();
      } else {
        this.setState({
          isCorrect: false,
          isGameOver: true,
          timerWidth: 0,
        });
        clearInterval(this.state.intervalId);
      }
    } else {
      if (correctButtonClicked === false) {
        this.setState({
          isCorrect: true,
          isGameOver: false,
          score: this.state.score + 100,
          timerWidth: 10
        })
        this.generateRandom();
      } else {
        this.setState({
          isCorrect: false,
          isGameOver: true,
          timerWidth: 0,
        });
        clearInterval(this.state.intervalId);
      }
    }
  }

  restartHandler = () => {
    let intervalId = setInterval(this.timerHandler, 600);
    this.setState({ isGameOver: false, score: 0, timerWidth: 10, intervalId });
    this.generateRandom();
  };

  timerHandler = () => {
    if (this.state.timerWidth > 0) {
      this.setState({ 
        timerWidth: this.state.timerWidth - 1,
        isGameOver: false
      });
    } else {
      this.setState({ isGameOver: true });
    }
  };

  playHandler = () => {
    this.generateRandom();
    let intervalId = setInterval(this.timerHandler, 600);
    this.setState({ playClicked: true, intervalId });
  };

  encloseOrNot = () => {
    if (this.state.playClicked) {
      return <Enclose handleCheckButton={this.handleCheckButton} things={this.state} />;
    } 
  };

  render() {
    return (
      <div>
        <Head />
        { !this.state.playClicked && <MainMenu playHandler={this.playHandler} /> }
        {
          this.state.isGameOver
            ?
            <GameOverScreen score={this.state.score} restartHandler={this.restartHandler} />
            :
            this.encloseOrNot()
        }
      </div>
    );
  }

}

export default MainApp;