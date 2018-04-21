import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';

import './index.scss';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
