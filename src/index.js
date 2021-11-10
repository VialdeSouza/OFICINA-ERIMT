import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ServiceTask from './services/task';

ReactDOM.render(
  <React.StrictMode>
    <App service={new ServiceTask()}/>
  </React.StrictMode>,
  document.getElementById('root')
);