import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ShouldeProvider } from './context/ShouldeContext';
import LanguageProvider from './context/languageContext';
import TeacheProvider from './context/TeacherContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <ShouldeProvider>
        <TeacheProvider>
          <App />
        </TeacheProvider>
      </ShouldeProvider>
    </LanguageProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
