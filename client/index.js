import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import history from './history';
import Application from './application';
// import './socketConnection';

ReactDOM.render(
    <Router history={history}>
      <Application />
    </Router>,
  document.getElementById('application')
);
