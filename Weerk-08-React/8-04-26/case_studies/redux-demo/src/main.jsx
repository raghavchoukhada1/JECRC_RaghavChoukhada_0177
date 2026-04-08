// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import {store} from './app/store';
// import './index.css'
// import App from './App.jsx'

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store};
//   <App/>
//   </Provider>
// );


import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);