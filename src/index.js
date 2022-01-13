import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
     <HashRouter base="/">
        <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
