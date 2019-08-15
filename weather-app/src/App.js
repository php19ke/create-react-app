import React from 'react';
import Weather from './components/weather';
import Titles from './components/titles';
import Form from './components/form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Weather />
      <Titles />
      <Form />
    </div>
  );
}

export default App;
