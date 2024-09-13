import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { authContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <authContextProvider>
      <App />
    </authContextProvider>
  </React.StrictMode>
);