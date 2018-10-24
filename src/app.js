import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/style.scss';

import MainApp from './components/MainApp';

const appRoot = document.querySelector('#root');
ReactDOM.render(<MainApp />, appRoot);