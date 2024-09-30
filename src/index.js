import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IptvContextProvider } from './components/context/Iptv';

ReactDOM.render(
  <React.StrictMode>
    <IptvContextProvider>
      <App />
    </IptvContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();