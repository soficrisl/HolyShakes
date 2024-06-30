/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MenuContextProvider from '../src/components/context/Menucontext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <MenuContextProvider>
        <App />
      </MenuContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);