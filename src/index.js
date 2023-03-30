import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ModalProvider } from './context/ModalProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* wrapped the App component with the provider to enable access to globally set props */}
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);
