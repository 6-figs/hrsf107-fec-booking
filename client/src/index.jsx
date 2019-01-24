/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/App';
import App2 from './components/App2.jsx'
/* eslint-disable-next-line */
import styles from '../dist/styles/styles.css';

// const container = document.getElementById('booking');
//
// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   container,
// );

const container = document.getElementById('booking');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  container,
);
