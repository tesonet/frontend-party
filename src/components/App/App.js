import React from 'react';
import copy from './App.json';

export default function App() {
  return (
    <div>
      <header>
        <h1>{copy.welcome}</h1>
      </header>
      <p>
        {copy.body}
      </p>
    </div>
  );
}
