import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from './Search';

function App() {
  return (
    <div className="w-100 main-wrapper d-flex flex-column justify-content-center align-items-center">
      <header className="w-100 main-wrapper">
        <h2>Find Your Movie</h2>
        <Search />
      </header>
      
    </div>
  );
}

export default App;
