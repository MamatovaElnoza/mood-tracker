import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MoodTracker from './mood-tracker/mood-tracker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoodTracker />
  </React.StrictMode>
);
